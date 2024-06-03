import { FaCheck } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
const BenefitItem = ({ t, text }) => (
  <div className="flex items-center flex-row gap-2">
    <div className="w-[25px] h-[25px] rounded-[50%] border-2 border-solid border-blue-700">
      <span className="flex items-center justify-center">
        <FaCheck color={"blue"} size={20} />
      </span>
    </div>
    <div className="di text-sm max-laptop:text-mf font-[Outfit-Bold] whitespace-nowrap">
      {" "}
      {t(`benefit.${text}`)}
    </div>
  </div>
);
const Flexbenifit = () => {
  const { t } = useTranslation();
  const benefitsArray1 = ["benefitsList", "benefitsList2", "benefitsList3"];
  const benefitsArray2 = ["benefitsList", "benefitsList2", "benefitsList3"];
  return (
    <div className=" w-[100%]  py-[80px] px-[80px] max-tab:px-[40px] max-md:px-[30px]">
      <div className="max-w-[2000px]  m-auto">
        {/* BENEFITS Optimal Performance for Your Business */}
        <h3 className="text-sm text-left max-tab:text-center font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
          {t("benefit.heading1")}
        </h3>
        <h1 className="text-lg text-left max-tab:text-center font-[Outfit-Bold]  max-md:text-sm max-md:text-center max-laptop:text-lf ">
          {t("benefit.heading3")}
        </h1>
        {/* BENEFITS Optimal Performance for Your Business */}

        {/* Benefits */}
        <div className=" flex flex-col">
          <div className=""></div>
          <div className=" w-[100%] flex  gap-[30px] mt-[0px] max-tab:mt-[30px]">
            <div className=" w-[40%] lg:flex hidden">
              <img src="/pagetwo/1.png" alt="" />
            </div>
            <div className=" flex flex-col items-start max-tab:items-center justify-center w-[40%] max-tab:w-full gap-12">
              <div className=" flex flex-row max-md:flex-col justify-between  gap-[30px]">
                <div className="flex flex-col gap-6">
                  {benefitsArray1.map((text, index) => (
                    <BenefitItem key={index} t={t} text={text} />
                  ))}
                </div>

                <div className="flex flex-col gap-6">
                  {benefitsArray2.map((text, index) => (
                    <BenefitItem key={index} t={t} text={text} />
                  ))}
                </div>
              </div>
              <div className="div flex items-start justify-start">
                <button className="text-sm max-laptop:text-mf bg-blue-700 py-[10px] px-[12px] rounded-[5px] text-light400 font-[Outfit-Bold] whitespace-nowrap">
                  {t("benefit.buttonText")}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* //Benefits */}
      </div>
    </div>
  );
};

export default Flexbenifit;
