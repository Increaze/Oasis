import { redirect, useNavigate } from 'react-router-dom'
import PersonalInfo from '../Pages/PersonalInfo';


export const Card = ({
  cardItem: { image, title, text, icon },
}: {
  cardItem: { image: string; title: string; text: string; icon?: string };
}) => {


 let navigate = useNavigate()
 const handleNavigate =()=>{
  navigate("/personal")

 }
 
  return (
    
    
    <div className="flex flex-row space-x-6 p-[28px]  mt-[35px] hover:shadow-md border hover:border-hex rounded w-[70%]">
      <div className="relative">
        <img src={image} alt="individual" />
        {/* <img className="" src="/assets/user.svg" alt="user" /> */}
      </div>
        <div className=" flex flex-col">
          <h3 className="font-medium text-base text-black">{title}</h3>
          <p className="font-normal text-base text-grayish">{text}</p>
        </div>
        <div className="text-hex mt-6" onClick={handleNavigate}>{icon}</div>
      </div>
    

    
  );
};
