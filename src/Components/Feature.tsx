import { BsArrowRightShort } from "react-icons/bs";
import { Card } from "./Card";
import { useNavigate } from "react-router-dom";

export default function Feature() {
  const card = (image: any, title: string, text: string, icon?: any) => ({
    image,
    title,
    text,
    icon,
  });

  const handleClick=() =>{
    let navigate = useNavigate();
    navigate ("/src/Pages/Completed.tsx")
    console.log("you was called", navigate);
    
  }

  const data = [
    card(
      "/assets/individual-logo.svg",
      "Individual",
      "Personal account to manage all you activities.",
      <BsArrowRightShort
        size={30}
        onClick={handleClick}
      />
    ),
    card(
      "/assets/business-logo.svg",
      "Business",
      "Own or belong to a company, this is for you."
    ),
  ];
  return (
    <div>
      {data.map((item) => (
        <Card cardItem={item} />
      ))}
    </div>
  );
}
