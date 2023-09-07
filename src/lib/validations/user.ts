import * as z from "zod"

export const userSchema = z.object({
    fullName: z.string().nonempty({ message: "Required" }),
    image: z.custom<FileList>((val) => val instanceof FileList, "Required"),
    username: z
        .string()
        .min(3, {
            message: "Username must be at least 4 characters",
        })
        .max(14, {
            message: "Username must be no more than 14 characters",
        })
        .nonempty({ message: "Required" }),
    bio: z.string(),
})
