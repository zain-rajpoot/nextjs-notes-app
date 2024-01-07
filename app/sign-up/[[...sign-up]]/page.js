import { SignUp } from "@clerk/nextjs";

export const metadata = {
  title: 'Sign up | nextjs notes app',
}
export default function Page() {
  return (
    <div className="flex justify-center py-24">
      <SignUp />
    </div>
  );
}