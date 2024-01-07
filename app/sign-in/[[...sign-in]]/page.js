import { SignIn } from "@clerk/nextjs";


export const metadata = {
  title: 'Sign in | nextjs notes app',
}
export default function Page() {
  return (
    <div className="flex justify-center py-24">
      <SignIn afterSignInUrl='/' />
    </div>
  );
}