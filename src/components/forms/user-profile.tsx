"use client"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { userSchema } from "@/lib/validations/user"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Icons } from "../ui/icons"
import Image from "next/image"
import { useUploadThing } from "@/lib/uploadthing"
import { userProfileSchema } from "@/lib/validations/user-profile"
import { Textarea } from "../ui/textarea"

export function UserProfile() {
    const user = {}
    const { startUpload } = useUploadThing("imageUploader")

    const form = useForm<z.infer<typeof userProfileSchema>>({
        resolver: zodResolver(userProfileSchema),
        defaultValues: {
            image: undefined,
            fullName: "",
            bio: "",
            username: "",
        },
    })

    async function onSubmit(values: z.infer<typeof userProfileSchema>) {
        const imageUploaded = await startUpload(values.image)
        if (imageUploaded && imageUploaded[0]?.url) {
            // values.image = imageUploaded[0].url
        }
    }

    return (
        <div className="rounded-md bg-neutral-800 p-4 md:p-6">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid gap-4"
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="myawesomeusername"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="John Doe"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="bio"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bio</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Your bio"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Profile image</FormLabel>
                                    <div className="flex items-center gap-3">
                                        {!field.value ? (
                                            <Icons.profile />
                                        ) : (
                                            <Image
                                                className="h-[40px] w-fit min-w-[40px] rounded-full object-cover"
                                                width={40}
                                                height={40}
                                                alt={""}
                                                src={
                                                    field.value[0]
                                                        ? URL.createObjectURL(
                                                              field.value[0]
                                                          )
                                                        : ""
                                                }
                                            />
                                        )}
                                        <FormControl>
                                            <Input
                                                accept="image/*"
                                                onChange={(event) => {
                                                    const dataTransfer =
                                                        new DataTransfer()

                                                    Array.from(
                                                        event.target.files!
                                                    ).forEach((image) =>
                                                        dataTransfer.items.add(
                                                            image
                                                        )
                                                    )

                                                    const newFiles =
                                                        dataTransfer.files
                                                    field.onChange(newFiles)
                                                }}
                                                type="file"
                                            />
                                        </FormControl>
                                    </div>

                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />
                    <Button
                        className="mt-5 w-full"
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    )
}
