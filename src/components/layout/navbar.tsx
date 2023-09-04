"use client"
import { OrganizationSwitcher } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { SignedIn, SignOutButton } from "@clerk/nextjs"
import { Button } from "../ui/button"
import { Icons } from "../ui/icons"
import { useRouter } from "next/navigation"

export function Navbar() {
    const router = useRouter()

    return (
        <nav className="z-[2] flex h-[var(--navbar-height)] w-full items-center justify-between bg-neutral-900 px-4 ">
            <Link
                href={"/"}
                className="flex items-center gap-3 text-700 font-bold"
            >
                <Image
                    src={"/logo.svg"}
                    width={30}
                    height={30}
                    alt="Threads"
                />
                Threads
            </Link>
            <div>
                <div className="md:hidden">
                    <SignedIn>
                        <SignOutButton
                            signOutCallback={() => router.push("/sign-in")}
                        >
                            <Button
                                variant={"ghost"}
                                size={"icon"}
                            >
                                <Icons.logout />
                            </Button>
                        </SignOutButton>
                    </SignedIn>
                </div>

                <OrganizationSwitcher
                    appearance={{
                        elements: {
                            organizationSwitcherTrigger: "py-2 px-4",
                        },
                    }}
                />
            </div>
        </nav>
    )
}
