import { UserProfile } from "@/components/forms/user-profile"

export default function Page() {
    return (
        <section className="mx-auto mt-20 max-w-md">
            <h1 className="text-size-800 font-bold">Onboarding</h1>
            <p className="mb-5 mt-3">
                Complete your profile to start using Threads
            </p>
            <UserProfile />
        </section>
    )
}
