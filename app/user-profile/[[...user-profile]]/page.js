import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
    <div className='flex justify-center items-center'>
        <UserProfile path="/user-profile" routing="path" />
    </div>
);

export default UserProfilePage;