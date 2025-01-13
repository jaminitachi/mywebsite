import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins", // 이 줄을 추가합니다
});

export const metadata = {
  title: "Daehan Lim's Portfolio",
  description: "Professional experiences, education, and skills of Daehan Lim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <body>
        <div className="bg-white text-gray-900 min-h-screen font-poppins">
          {children}
        </div>
      </body>
    </html>
  );
}
