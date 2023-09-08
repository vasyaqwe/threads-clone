import mongoose, { Schema, model } from "mongoose"
import * as z from "zod"
import { userSchema as zodSchema } from "../validations/user"

export type UserType = z.infer<typeof zodSchema>

const userSchema = new Schema<UserType>({
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    imageUrl: String,
    password: String,
    threads: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Thread",
        },
    ],
    onboarded: {
        type: Boolean,
        default: false,
    },
    communities: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Community",
        },
    ],
    bio: String,
})

const User = mongoose.models.User || model("User", userSchema)

export default User
