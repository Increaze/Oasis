import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/residency");
  };
  return (
    <form>
      <div className="flex flex-col items-start gap-y-3 text-grayish ">
        <div className="flex flex-col gap-y-1 hover:shadow">
          <label className="" htmlFor="Your fullname" aria-required>
            Your Full name <span className="text-grayish">*</span>
          </label>
          <div className="border focus-within:border-hex rounded-[5px] mr-48 pl-8 h-[56px] flex w-full">
            <input
              placeholder="Invictus Innocent"
              className="border-none focus:outline-none  flex-1 h-full w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-1 hover:shadow">
          <label htmlFor="Your fullname" aria-required>
            Email Address <span className="text-grayish">*</span>
          </label>
          <div className="border focus-within:border-hex rounded mr-48 pl-8 h-[56px] flex w-full">
            <input
              placeholder="Enter email address"
              className="focus:outline-none  flex-1 h-full w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-1 hover:shadow">
          <label htmlFor="Password" aria-required>
            Create Password <span className="text-grayish">*</span>
          </label>
          <div className="border  focus-within:border-hex rounded mr-48 pl-8 h-[56px] flex w-full">
            <input
              type="password"
              className="border-none focus:outline-none  flex-1 h-full w-full"
            />
          </div>
        </div>

        <div className="flex flex-row gap-x-2 ">
          <input type="checkbox" />
          <span>I agree to terms & conditions</span>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <button
            className="bg-blue-500 text-white px-[120px] py-3 border shadow focus:shadow-outline rounded w-full"
            onClick={handleClick}
          >
            Register Account
          </button>

          <p className="text-center">Or</p>
          <button className="px-[120px] py-3 border shadow focus:shadow-outline rounded-md text-black ">
            Register with Google
          </button>
        </div>
      </div>
    </form>
  );
};
