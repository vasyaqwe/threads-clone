"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icons } from "../ui/icons"
import { Button } from "../ui/button"
import { ReactElement } from "react"

export default function LeftAside() {
    const pathname = usePathname()

    const nav: { label: string; href: string; icon: ReactElement }[] = [
        { label: "Home", href: "/", icon: <Icons.home /> },
        { label: "Search", href: "/search", icon: <Icons.searchOutline /> },
        { label: "Activity", href: "/activity", icon: <Icons.heartOutline /> },
        { label: "New thread", href: "/new-thread", icon: <Icons.create /> },
        {
            label: "Communities",
            href: "/communities",
            icon: <Icons.community />,
        },
        { label: "Profile", href: "/profile", icon: <Icons.user /> },
    ]

    return (
        <aside
            className="sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto 
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
        </aside>
    )
}
