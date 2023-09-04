import { Icons } from "@/components/ui/icons"
import { ReactElement } from "react"

export const nav: { label: string; href: string; icon: ReactElement }[] = [
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
