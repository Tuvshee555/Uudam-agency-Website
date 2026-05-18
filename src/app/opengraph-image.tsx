import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, #0b2a46 0%, #113e67 42%, #2a5c8a 100%)",
          color: "#f5f0e8",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "760px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 24,
              letterSpacing: "0.42em",
              textTransform: "uppercase",
              color: "#d8e4f0",
            }}
          >
            Уудам Аялал
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 86,
              lineHeight: 0.96,
              letterSpacing: "-0.05em",
            }}
          >
            Таны аяллыг тайван хэмнэлтэйгээр бүтээнэ.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 28,
              color: "rgba(245, 240, 232, 0.78)",
            }}
          >
            Улаанбаатараас сонгомол чиглэл рүү
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "rgba(245, 240, 232, 0.66)",
            }}
          >
            Онцлох чиглэл, сонгомол багц, хувийн анхааралтай аяллын төлөвлөлт.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 999,
              border: "1px solid rgba(216, 228, 240, 0.32)",
              padding: "16px 28px",
              fontSize: 22,
              color: "#d8e4f0",
            }}
          >
            Аяллаа төлөвлөх
          </div>
        </div>
      </div>
    ),
    size,
  );
}
