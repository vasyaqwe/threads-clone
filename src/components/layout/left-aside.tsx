"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icons } from "../ui/icons"
import { Button } from "../ui/button"
import { SignOutButton, SignedIn } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { nav } from "@/config"

export function LeftAside() {
    const pathname = usePathname()
    const router = useRouter()

    return (
        <aside
            className="sticky left-0 top-0 flex h-[calc(100vh-var(--navbar-height))] flex-col justify-between 
      bg-neutral-900 px-5 pb-5 pt-12 max-md:hidden"
        >
            <nav>
                <ul className="flex flex-col items-start gap-4 lg:gap-5">
                    {nav.map((item) => {
                        const isActive = pathname === item.href

                        return (
                            <li
                                key={item.label}
                                className="w-full"
                            >
                                <Button
                                    asChild
                                    data-current={isActive ? "page" : undefined}
                                    variant={"ghost"}
                                    className={`max-lg:h-12 max-lg:w-12 max-lg:rounded-lg max-lg:p-0
                                     lg:flex lg:justify-start lg:gap-3 lg:py-6`}
                                >
                                    <Link
                                        aria-current={
                                            isActive ? "page" : undefined
                                        }
                                        href={item.href}
                                    >
                                        {item.icon}
                                        <span className="hidden lg:inline-block">
                                            {item.label}
                                        </span>
                                    </Link>
                                </Button>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <SignedIn>
                <SignOutButton signOutCallback={() => router.push("/sign-in")}>
                    <Button
                        variant={"ghost"}
                        className={`max-lg:h-12 max-lg:w-12 max-lg:rounded-lg max-lg:p-0
                                    lg:flex lg:justify-start lg:gap-3 lg:py-6`}
                    >
                        <Icons.logout />
                        <span className="hidden lg:inline-block">Logout</span>
                    </Button>
                </SignOutButton>
            </SignedIn>
        </aside>
    )
}
