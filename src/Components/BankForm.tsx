import Footer from "./Footer";
import { Navigate, useNavigate } from 'react-router-dom';
import * as React from 'react';


function BankForm() {
  let navigate = useNavigate();
  const handleClickAction=()=>{
    navigate("/completed")
    console.log(".......", navigate)
    
}
   
  return (
    <form>
      <div className="flex flex-col items-start gap-y-16 text-grayish">
        <div className="flex flex-col gap-1.5">
          <label className="" htmlFor="Your fullname" aria-required>
            Bank verification number (BVN)
          </label>
          <div className="border hover:border-hex rounded  mr-40 pl-8 py-4 pr-8 flex w-full hover:shadow-sm">
              <input
                className="border-0 focus-within:outline-none flex-1 h-full w-full"
              />
            </div>
        </div>

        <div className="flex flex-col gap-3">
          <button className="bg-hex text-white px-[140px] py-3 border rounded-md font-medium text-base" onClick={handleClickAction}>
            Save & Continue
          </button>
          <Footer />
        </div>
      </div>
    </form>
  );
}


export default BankForm;
