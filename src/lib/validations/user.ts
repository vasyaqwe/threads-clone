import * as z from "zod"

export const userSchema = z.object({
    fullName: z.string().nonempty({ message: "Required" }),
    imageUrl: z.string().url().nonempty(),
    username: z
        .string()
        .min(3, {
            message: "Username must be at least 4 characters",
        })
        .max(14, {
            message: "Username must be no more than 14 characters",
        })
        .nonempty({ message: "Required" }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters",
    }),
    bio: z.string().nonempty({ message: "Required" }),
    threads: z.any(),
    onboarded: z.boolean().default(false),
    communities: z.any(),
})
