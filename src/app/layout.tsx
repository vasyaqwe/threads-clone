import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { dark } from "@clerk/themes"
import { Navbar } from "@/components/layout/navbar"
import { BottomNavbar } from "@/components/layout/bottom-navbar"
import { LeftAside } from "@/components/layout/left-aside"
import { RightAside } from "@/components/layout/right-aside"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: dark,
            }}
        >
            <html
                lang="en"
                className="dark"
            >
                <body
                    className={`${inter.className} [--navbar-height:64px] lg:[--navbar-height:75px]`}
                >
                    <Navbar />
                    <div className="flex">
                        <LeftAside />
                        <main className="flex-1">{children}</main>
                        <RightAside />
                    </div>
                    <BottomNavbar />
                </body>
            </html>
        </ClerkProvider>
    )
}
