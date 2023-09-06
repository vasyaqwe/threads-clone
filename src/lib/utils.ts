import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"
import { extendedTheme } from "./extended-theme"

const customTwMerge = extendTailwindMerge({
    classGroups: {
        "font-size": Object.keys(extendedTheme.fontSize).map(
            (key) => `text-${key}`
        ),
    },
})

export const cn = (...inputs: ClassValue[]) => {
    return customTwMerge(clsx(inputs))
}
