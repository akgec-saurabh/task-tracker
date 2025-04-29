import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ProjectProvider } from "@/store/create-project";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Task Tracker App",
  description: "Task Tracker App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ProjectProvider>{children}</ProjectProvider>
      </body>
    </html>
  );
}
