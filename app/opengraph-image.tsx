import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "assets", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#166294",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            right: "-60px",
            top: "-60px",
            width: "380px",
            height: "380px",
            background: "#E63946",
            borderRadius: "50%",
            opacity: 0.2,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "180px",
            bottom: "-100px",
            width: "300px",
            height: "300px",
            background: "#4CAF50",
            borderRadius: "50%",
            opacity: 0.15,
            display: "flex",
          }}
        />

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          width="100"
          height="100"
          alt="HOOT Initiative logo"
          style={{
            borderRadius: "16px",
            marginBottom: "28px",
            objectFit: "contain",
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: "68px",
            fontWeight: "900",
            color: "white",
            lineHeight: 1.1,
            marginBottom: "20px",
            letterSpacing: "-1px",
            display: "flex",
          }}
        >
          HOOT Initiative
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "30px",
            color: "rgba(255,255,255,0.8)",
            fontWeight: "400",
            maxWidth: "680px",
            lineHeight: 1.4,
            display: "flex",
          }}
        >
          Empowering Children, Youths and Communities
        </div>

        {/* Bottom color bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "10px",
            display: "flex",
          }}
        >
          <div style={{ flex: 1, background: "#E63946", display: "flex" }} />
          <div style={{ flex: 1, background: "#4CAF50", display: "flex" }} />
          <div style={{ flex: 1, background: "#F3EEE7", display: "flex" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
