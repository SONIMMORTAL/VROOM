import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";
export const alt =
  "Interstate Connections — put your career in high gear. Class A and Class B CDL training.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#faf8f3",
        color: "#182e36",
        display: "flex",
        flexDirection: "column",
        padding: "65px 75px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          fontSize: 21,
          letterSpacing: 3,
        }}
      >
        <div style={{ width: 7, height: 39, background: "#8d293a" }} />
        INTERSTATE CONNECTIONS
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 86,
          lineHeight: 1.05,
          letterSpacing: -4,
        }}
      >
        <span>Put your career</span>
        <span style={{ color: "#8d293a" }}>in high gear.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #d7d8cf",
          paddingTop: 26,
          fontSize: 22,
        }}
      >
        <span>Class A & B CDL training · English & Español</span>
        <span>{SITE.phone}</span>
      </div>
    </div>,
    size,
  );
}
