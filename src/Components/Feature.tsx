import { BsArrowRightShort } from "react-icons/bs";
import { Card } from "./Card";
import { BiUser } from "react-icons/bi" 

export default function Feature() {
  const card = (image: any, img:any, title: string, text: string, icon?: any) => ({
    image,
    img,
    title,
    text,
    icon,
  });


  const data = [
    card(
      "/assets/individual-logo.svg",
     "/assets/user.svg",
      "Individual",
      "Personal account to manage all you activities.",
      <BsArrowRightShort
        size={30}
      />
    ),
    card(
      "/assets/business-logo.svg",
      "/assets/briefcase.svg",
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
