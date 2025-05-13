import ScrollAnimations from "@/components/animations/ScrollAnimations";
// import CustomCursor from "@/components/cursor/CustomCursor";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Jabal Builders",
    description: "Jabal Builders is a construction company that builds beautiful homes and commercial spaces.",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {/* <CustomCursor /> */}
                <ScrollAnimations />
                <main className={`flex-grow overflow-x-hidden`}>
                    {children}
                </main>
                <Toaster />
            </body>
        </html>
    );
}