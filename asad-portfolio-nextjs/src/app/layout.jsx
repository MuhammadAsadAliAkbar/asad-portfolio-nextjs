import "./globals.css";
import "leaflet/dist/leaflet.css";

export const metadata = {
  title: "Asad Ali | Full Stack Developer",
  description: "Muhammad Asad Ali Akbar - Full Stack Developer Portfolio",
  icons: {
    icon: "/Asad.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Saved theme ko hydration se pehle apply karta hai (flash avoid karne ke liye)
const themeInitScript = `
try {
  var t = localStorage.getItem("theme") === "light" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", t);
} catch (e) {}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
