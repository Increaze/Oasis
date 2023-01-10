import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { ResidencyForm } from "../Components/ResidencyForm";
import { Sidebar } from "../Components/Sidebar";
// import PhoneInput from 'react-phone-number-input'

function ResidencyInfo() {
  let navigate = useNavigate();
  const handleBack=()=>{
    navigate("/personal")

  }
  return (
    <section className="h-screen w-screen flex overflow-hidden">
      <Sidebar />
      <main className="w-7/12 flex flex-col h-full overflow-hidden ">
        <div className="flex justify-between pl-12 pr-24 pt-12">
          <div className="flex gap-1 text-grayish">
            <IoIosArrowBack size={22} className="hover:text-green-500" onClick={handleBack}/>
            <p>Back</p>
          </div>
          <div className="flex flex-col justify-end text-grayish">
            <span className="flex justify-end font-medium text-sm">STEP 02/03</span>
            <p className="font-semibold text-base">Residency Info</p>
          </div>
        </div>
        <div className="pl-28 flex flex-col gap-y-2 pt-12">
          <h1 className="font-bold text-3xl">Complete Your Profile!</h1>
          <p className="max-w-sm font-normal text-lg pb-6 text-grayish">
            For the purpose of industry regulation, your details are required.
          </p>
        </div>
        <div className="pl-28">
          <ResidencyForm />
        </div>
      </main>
    </section>
  );
}
export default ResidencyInfo;
