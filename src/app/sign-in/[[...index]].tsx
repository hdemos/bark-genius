import { SignIn } from "@clerk/nextjs";

// export default function Page() {
//     return <SignIn />;
// }

const SignInPage = () => (
    <div className="w-full flex justify-center align-middle">
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
);
export default SignInPage