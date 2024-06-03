interface CustomButtonProps {
  type: "filledBlue" | "filledWhite" | "outlinedBlue" | "outlinedWhite";
  title: string;
}
const CustomButton: React.FC<CustomButtonProps> = ({ type, title }) => {
  let classes = "";
  if (type === "filledBlue") {
    classes = "bg-primary text-light400 [font-family:Outfit-Bold,sans-serif]";
  } else if (type === "filledWhite") {
    classes = "bg-light400 [font-family:Outfit-Bold,sans-serif]";
  } else if (type === "outlinedBlue") {
    classes =
      "bg-transparent border-[3px] border-white [font-family:Outfit-Regular]";
  } else if (type === "outlinedWhite") {
    classes = "bg-light400 border-[3px] border-primary [font-family:Outfit-Bold]";
  }

  return (
    <div
      className={`rounded-[10px] px-[24px] py-[8px] lg:text-sm text-xs w-fit h-fit ${classes}`}
    >
      {title}
    </div>
  );
};

export default CustomButton;
