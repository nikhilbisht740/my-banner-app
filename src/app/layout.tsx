// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// // import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={inter.className}
//         style={{
//           backgroundImage: "url('/images/background.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           minHeight: "100vh",
//           margin: 0,
//           padding: 0,
//         }}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          backgroundImage: "url('/imag/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <main style={{ flex: 1 }}>{children}</main>

        {/* Footer */}
        <footer
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background for better readability
            color: "white",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h1 style={{ margin: "10px 0" }}>GrowEasy</h1>
          <p style={{ margin: 0 }}>
            YOUR AI POWERED ALL IN ONE LEAD GENERATION APP.
          </p>
        </footer>
      </body>
    </html>
  );
}
