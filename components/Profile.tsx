import { IoLogOutOutline } from "react-icons/io5";

const Profile = () => {
  return (
    <section className="flex items-center gap-4">
      <div className="flex gap-2 items-center">
        <div className="w-8 h-8 bg-red-500/10 text-red-500 text-sm font-semibold rounded-full flex justify-center items-center">
          J
        </div>
        <p>John Doe</p>
      </div>
      <IoLogOutOutline className="text-2xl text-neutral-500 hover:text-red-500 cursor-pointer transition-colors duration-300" />
    </section>
  );
};

export default Profile;
