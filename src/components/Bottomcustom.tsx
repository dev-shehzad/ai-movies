import { useTranslation } from "react-i18next";

const Bottomcustom = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-light400 py-10 px-[80px] my-[90px] max-tab:px-[40px] max-md:px-[30px]">
      <div className="max-w-[2000px] mx-auto">
        {/* Section Heading */}
        <h3 className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
          {/* Comment: Add translation for the heading */}
          {/* {t("bottomcustom.actNowHeading")} */}
        </h3>

        {/* Main Heading */}
        <h1 className="text-lg font-[Outfit-Bold]  max-md:text-sm max-md:text-center max-laptop:text-lf max-md:leading-7">
          {/* Comment: Add translation for the main heading */}
          {t("bottomcustom.questionHeading")}
        </h1>

        {/* Description */}
        <p className="text-sm font-[Outfit-Regular]  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
          {/* Comment: Add translation for the description */}
          {t("bottomcustom.questionDescription")}
        </p>

        {/* Action Button */}
        <div className="button flex gap-8">
          <button className="text-light400 bg-primary text-sm max-laptop:text-mf font-bold border-[2px] border-solid border-primary py-[10px] px-[15px] rounded-[10px] mt-6 max-md:text-[14px] whitespace-nowrap max-md:mx-auto">
            {" "}
            {/* Comment: Add translation for the button text */}
            {t("bottomcustom.askQuestionButton")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bottomcustom;
