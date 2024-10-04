import "./globals.css";

export const metadata = {
  title: "Daehan Lim's Portfolio",
  description: "Professional experiences, education, and skills of Daehan Lim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-white text-gray-900 min-h-screen">{children}</div>
      </body>
    </html>
  );
}
