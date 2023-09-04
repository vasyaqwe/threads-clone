"use client"
import { nav } from "@/config"
import { Button } from "../ui/button"
import { usePathname } from "next/navigation"
import Link from "next/link"

export function BottomNavbar() {
    const pathname = usePathname()

    return (
        <nav className="xs:px-6 fixed bottom-0 w-full bg-neutral-900 px-3 py-3 md:hidden">
            <ul className="flex items-center justify-between ">
                {nav.map((item) => {
                    const isActive = pathname === item.href

                    return (
                        <li key={item.label}>
                            <Button
                                asChild
                                data-current={isActive ? "page" : undefined}
                                variant={"ghost"}
                                className={`xs:w-16 max-lg:h-10 max-lg:w-10 max-lg:rounded-lg max-lg:p-0 sm:w-20
                                     lg:flex lg:justify-start lg:gap-3 lg:py-6`}
                            >
                                <Link
                                    aria-current={isActive ? "page" : undefined}
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
    )
}
