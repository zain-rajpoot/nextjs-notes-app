import { SignUp } from "@clerk/nextjs";

export const metadata = {
  title: 'Nextjs Notes App',
}
export default function Page() {
  return (
    <div className="flex justify-center py-24">
      <SignUp />
    </div>
  );
}