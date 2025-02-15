import { Almarai } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["400", "700", "800"],
});

export const metadata = {
  title: "One Heart Team",
  description: "Official site for the One Heart Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${almarai.className} vsc-initialized`}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <NavBar />
            {children}
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
