import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/lib/utils/appContext";

export const metadata: Metadata = {
  title: "Escape Anywhere",
  description: "Escape games using chatGPT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex justify-center h-screen bg-black text-white font-NanumMyeongjo">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
