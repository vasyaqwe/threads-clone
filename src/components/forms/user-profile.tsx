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

export function UserProfile() {
    const user = {}

    const form = useForm<z.infer<typeof userSchema>>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            image: undefined,
            fullName: "",
            bio: "",
            username: "",
        },
    })

    function onSubmit(values: z.infer<typeof userSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div className="rounded-md bg-neutral-800 p-4 md:p-6">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
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
                                <FormDescription>
                                    Choose a unique username.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field: { onChange, value }, ...field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Profile image</FormLabel>
                                    <div className="flex items-center gap-3">
                                        {!value ? (
                                            <Icons.profile />
                                        ) : (
                                            <Image
                                                className="h-[40px] w-fit min-w-[40px] rounded-full object-cover"
                                                width={40}
                                                height={40}
                                                alt={
                                                    field.formState
                                                        .defaultValues
                                                        ?.fullName ?? ""
                                                }
                                                src={URL.createObjectURL(
                                                    value[0]
                                                )}
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
                                                    onChange(newFiles)
                                                }}
                                                type="file"
                                                {...field}
                                            />
                                        </FormControl>
                                    </div>

                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />
                    <Button
                        className="w-full"
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    )
}
