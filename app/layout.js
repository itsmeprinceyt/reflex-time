import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from ".//(components)/Nav.jsx"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reflex Time",
  description: "Test your reflexes with Reflex Time! Click on the right numbers as they appear on the screen from a field of 100 randomly numbered balls in this exciting Next.js game.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <Navbar />
          <div className="flex-grow overflow-y-auto ">
            {children}
            </div>
        </div>
      </body>
    </html>
  );
}
