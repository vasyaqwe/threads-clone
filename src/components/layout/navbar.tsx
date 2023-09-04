import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Icons } from "../ui/icons"
import { Button } from "../ui/button"

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-neutral-900 px-4 py-2">
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
                        <SignOutButton>
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
