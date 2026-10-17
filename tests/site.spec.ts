import { expect, test, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

async function fillInquiry(page: Page) {
  await page.getByLabel("First name").fill("Test");
  await page.getByLabel("Last name").fill("Applicant");
  await page.getByLabel("Phone number").fill("8455550123");
  await page
    .getByLabel("I’m interested in")
    .selectOption("Class A CDL Training");
  await page.getByRole("checkbox").check();
}

test("contact links, metadata, and section destinations are consistent", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Interstate Connections/);
  await expect(page.locator("h1")).toHaveText("Put your careerin high gear.");
  const calls = page.locator('a[href^="tel:"]');
  expect(await calls.count()).toBeGreaterThan(2);
  for (const call of await calls.all())
    await expect(call).toHaveAttribute("href", "tel:+18453831299");
  expect(await page.content()).not.toContain("663-5613");
  const missing = await page
    .locator('a[href*="#"]')
    .evaluateAll((links) =>
      links
        .map((link) => new URL((link as HTMLAnchorElement).href).hash)
        .filter(
          (hash) =>
            hash && !document.getElementById(decodeURIComponent(hash.slice(1))),
        ),
    );
  expect(missing).toEqual([]);
  const schema = JSON.parse(
    await page.locator('script[type="application/ld+json"]').innerText(),
  );
  expect(schema.telephone).toBe("+18453831299");
});

test("schedule controls and program selection work", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Evenings & weekends" }).click();
  await expect(page.locator(".schedule-times")).toContainText("5:00–9:00 PM");
  await expect(
    page.getByRole("button", { name: "Evenings & weekends" }),
  ).toHaveAttribute("aria-pressed", "true");
  await page
    .getByRole("link", { name: "Ask about Class B CDL", exact: true })
    .click();
  await expect(page.getByLabel("I’m interested in")).toHaveValue(
    "Class B CDL Training",
  );
});

test("inquiry validates input, retains data on rejection, and confirms only success", async ({
  page,
}) => {
  let requests = 0;
  let succeed = false;
  await page.route("https://formsubmit.co/**", async (route) => {
    requests++;
    const data = route.request().postDataJSON();
    expect(data.Phone).toBe("8455550123");
    expect(data["Contact permission"]).toBe("Agreed");
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ success: succeed ? "true" : "false" }),
    });
  });
  await page.goto("/#apply");
  await page
    .getByRole("button", { name: "Request information", exact: true })
    .click();
  expect(requests).toBe(0);
  await fillInquiry(page);
  await page.getByLabel("Phone number").fill("abcdefghij");
  await page
    .getByRole("button", { name: "Request information", exact: true })
    .click();
  expect(requests).toBe(0);
  await page.getByLabel("Phone number").fill("8455550123");
  await page
    .getByRole("button", { name: "Request information", exact: true })
    .click();
  await expect(page.locator(".lead-form").getByRole("alert")).toBeVisible();
  await expect(page.getByLabel("First name")).toHaveValue("Test");
  succeed = true;
  await page
    .getByRole("button", { name: "Request information", exact: true })
    .click();
  await expect(page.getByRole("status")).toContainText(
    "Your inquiry was submitted",
  );
  await expect(page.getByRole("status")).toBeFocused();
  expect(requests).toBe(2);
});

test("network failure offers a direct contact fallback", async ({ page }) => {
  await page.route("https://formsubmit.co/**", (route) => route.abort());
  await page.goto("/#apply");
  await fillInquiry(page);
  await page
    .getByRole("button", { name: "Request information", exact: true })
    .click();
  await expect(page.locator(".lead-form").getByRole("alert")).toContainText(
    "(845) 383-1299",
  );
  await expect(page.getByLabel("Phone number")).toHaveValue("8455550123");
});

test("mobile menu and FAQ support keyboard interaction", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeHidden();
  const question = page
    .locator("summary")
    .filter({ hasText: "Can I keep working while I train?" });
  await question.focus();
  await page.keyboard.press("Enter");
  await expect(question.locator("..")).toHaveAttribute("open", "");
});

test("layouts have no horizontal overflow from small phones through desktop", async ({
  page,
}) => {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `overflow at ${width}px`,
    ).toBe(true);
  }
});

test("home and privacy pass automated WCAG checks on desktop and mobile", async ({
  page,
}) => {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const path of ["/", "/privacy/"]) {
      await page.goto(path);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(results.violations, `${path} at ${width}px`).toEqual([]);
    }
  }
});

test("static pages and image assets load without runtime errors", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  for (const image of await page.locator("img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect(image).toHaveJSProperty("complete", true);
    expect(
      await image.evaluate((image) => (image as HTMLImageElement).naturalWidth),
    ).toBeGreaterThan(0);
  }
  await page.goto("/privacy/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Inquiry privacy notice",
  );
  expect(errors).toEqual([]);
  expect((await page.request.get("/social-preview.png")).status()).toBe(200);
});

test("published metadata and crawl files use the confirmed domain", async ({
  page,
}) => {
  const origin = "https://www.interstateconnections.co";
  await page.goto("/");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    origin + "/",
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    origin + "/social-preview.png",
  );
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
    "content",
    "summary_large_image",
  );
  await page.goto("/privacy/");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    origin + "/privacy/",
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    origin + "/privacy/",
  );
  expect(await (await page.request.get("/robots.txt")).text()).toContain(
    origin + "/sitemap.xml",
  );
  const sitemap = await (await page.request.get("/sitemap.xml")).text();
  expect(sitemap).toContain(`<loc>${origin}/</loc>`);
  expect(sitemap).toContain(`<loc>${origin}/privacy/</loc>`);
});
