import { useForm } from "react-hook-form";
import Footer from "./Footer";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

export const ResidencyForm = () => {
  // const { control, handleSubmit } = useForm();
  const [value, setValue] = useState();

  let navigate = useNavigate();
  const handleContinue = () => {
    navigate("/verification");
  };

  return (
    <>
      <form>
        <div className="flex flex-col items-start gap-y-4 text-grayish">
          {/* <PhoneInputWithCountry
            name="phoneInputWithCountrySelect"
            control={control}
            rules={{ required: true }}
          /> */}

          {/* <div className="flex flex-col gap-1"> */}

          <div className="">
            {/* <label className="" htmlFor="Phone number" aria-required>
              Phone number
            </label> */}
            <PhoneInput
              className=""
              international
              defaultCountry="RU"
              value={value}
              onChange={() => {
                return setValue;
              }}
            />
          </div>

          {/* <input
              className="shadow appearance-none border rounded w-full pl-[30px] pr-48 py-4
              text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-200"
              type="text"
              placeholder=""
            /> */}
          {/* </div> */}
          <div className="flex flex-col gap-1 bg-white">
            <label className="text-left" htmlFor="Your fullname" aria-required>
              Your address
            </label>
            <div className="border hover:border-hex rounded mr-48 pl-8 h-[56px] flex w-full bg-white">
              <input
                placeholder="Please enter address"
                className="border-none focus:outline-none flex-1 h-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-left" htmlFor="Your fullname" aria-required>
              Country of Residence
            </label>
            <div className="border hover:border-hex rounded mr-48 pl-8 h-[56px] flex w-full">
              <input
                className="border-none focus:outline-none flex-1 h-full w-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-8">
            <button
              className="bg-hex text-white px-[140px] py-3 border rounded-md font-medium text-base"
              onClick={handleContinue}
            >
              Save & Continue
            </button>
            <Footer />
          </div>
        </div>
      </form>
    </>
  );
};
