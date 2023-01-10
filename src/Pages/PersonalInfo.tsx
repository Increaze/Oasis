import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../Components/LoginForm";
import { Sidebar } from "../Components/Sidebar";

function PersonalInfo() {
  let navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
    console.log("Clicked", navigate);
  };

  return (
    <section className="h-screen w-screen flex overflow-hidden">
      <Sidebar />
      <main className="w-7/12 flex flex-col h-full overflow-hidden ">
        <div className="flex justify-between pl-12 pr-24 pt-12">
          <div className="flex gap-1 text-grayish">
            <IoIosArrowBack
              size={22}
              onClick={handleBack}
              className="hover:text-green-500"
            />
            <p>Back</p>
          </div>
          <div className="flex flex-col justify-end text-grayish">
            <span className="flex justify-end font-medium text-sm">
              STEP 01/03
            </span>
            <p className="font-semibold text-base">Personal Info</p>
          </div>
        </div>
        <div className="pl-28 flex flex-col pt-[65px] gap-y-2">
          <h1 className="font-bold text-3xl">Register Individual Account!</h1>
          <p className="max-w-sm font-normal text-lg pb-6 text-grayish">
            For the purpose of industry regulation, your details are required.
          </p>
        </div>
        <div className="pl-28">
          <LoginForm />
        </div>
      </main>
    </section>
    // </>
  );
}

export default PersonalInfo;
