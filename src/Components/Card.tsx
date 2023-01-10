import { useNavigate } from "react-router-dom";

export const Card = ({
  cardItem: { image, img, title, text, icon },
}: {
  cardItem: {
    image: string;
    img: string;
    title: string;
    text: string;
    icon?: string;
  };
}) => {
  let navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/personal");
  };

  return (
    <div className="flex flex-row space-x-6 p-[28px] mt-[35px] hover:shadow-md border hover:border-hex hover:bg-blue-50 rounded w-[70%]">
      <div className="relative">
        <img src={image} alt="individual" />
        <img className="absolute top-3.5 left-3.5" src={img} alt="image" />
      </div>
      <div className=" flex flex-col">
        <h3 className="font-medium text-base text-black">{title}</h3>
        <p className="font-normal text-base text-grayish">{text}</p>
      </div>
      <div className="text-hex mt-6" onClick={handleNavigate}>
        {icon}
      </div>
    </div>
  );
};
