import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/styles/style.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Providers from "@/components/providers";
import Container from "@/components/container";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Calordle",
  description: "A Daily Calorie Counting Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable}`}>
      <body>
        <Providers>
          <Container>
            <Header />
            {children}
            <Footer />
          </Container>
        </Providers>
      </body>
    </html>
  );
}
