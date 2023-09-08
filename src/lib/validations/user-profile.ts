import * as z from "zod"
import { userSchema } from "./user"

export const userProfileSchema = z.object({
    fullName: userSchema.shape.fullName,
    image: z.custom<File[]>((val) => val instanceof FileList, "Required"),
    username: userSchema.shape.username,
    bio: userSchema.shape.bio,
})
