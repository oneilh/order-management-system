import { IoLockClosedOutline } from "react-icons/io5";
const page = () => {
  return (
    <div className="flex flex-col gap-8 border rounded-lg w-fit p-8 mx-auto my-12">
      <div className="flex gap-4 items-center">
        <div className="bg-gray-300 p-2 rounded-lg">
          <IoLockClosedOutline className="text-2xl" />
        </div>
        <section className="flex flex-col gap-0.5">
          <h2 className="font-bold">Admin Access</h2>
          <p>Please enter your details to sign in</p>
        </section>
      </div>
      <section className=" flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm">Email</label>
          <input
            type="email"
            name="email"
            id=""
            className="input input-neutral rounded-md border p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm">Password</label>
          <input
            type="password"
            name="password"
            id=""
            className="input input-neutral border rounded-md p-2"
          />
        </div>
      </section>
        <div className="btn btn-neutral text-lg text-white text-center rounded-lg p-2 cursor-pointer">Login</div>
    </div>
  );
};

export default page;
