import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-firaSans",
});

export const metadata = {
  title: "Prithvi Portfolio",
  description: "Welcome to Prithvi portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={firaSans.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
