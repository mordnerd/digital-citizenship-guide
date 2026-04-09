import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Citizenship Interactive Guide",
  description:
    "An interactive mini-guide that teaches positive, responsible digital citizenship through real-world scenarios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="min-h-screen font-sans antialiased [text-rendering:optimizeLegibility]">
        <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-8 sm:px-6">
          {children}
          <footer className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-muted">
            Built by{" "}
            <span className="font-semibold text-ink">Mordecai Dada</span>.
          </footer>
        </div>
      </body>
    </html>
  );
}

