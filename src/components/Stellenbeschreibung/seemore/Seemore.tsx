import { FaAngleRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Seemore = () => {
  const { t } = useTranslation();

  return (
    <div className="my-[80px]">
         <div className="max-w-[2000px] mx-auto  w-[100%] flex flex-col lg:px-[80px] px-[20px] pt-[50px]">
          <h3 className="text-sm text-primary font-bold font-[Outfit-Bold] max-md:text-center max-laptop:text-mf">
          {t("SeeMore.title")}
          </h3>
         <h1 className="text-lg font-[Outfit-Bold]  max-md:text-sm max-md:text-center max-laptop:text-lf">
         {t("SeeMore.subtitle")}

          </h1>
        <div className="w-[100%] flex items-center lg:gap-6 md:gap-4 gap-3 flex-col lg:mt-[50px] md:mt-[30px] mt-[20px]">
          <div className="w-[100%] lg:h-[140px] md:h-[80px] h-60px bg-light100  rounded-[5px] flex lg:px-[50px] md:px-[20px] px-[10px] py-[10px] justify-between shadow-md  items-center">
            <div>
              <div className="font-[Outfit-Bold] text-left text-sm  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
              {t("SeeMore.jobList1.title")}

              </div>
              <div className="font-[Outfit-Regular] text-left text-sm  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
              {t("SeeMore.jobList1.subtitle")}

              </div>
            </div>
            <div className="text-[40px]   text-light200">
              <FaAngleRight />
            </div>
          </div>

          <div className="w-[100%] lg:h-[140px] md:h-[80px] h-60px bg-light100  rounded-[5px] flex lg:px-[50px] md:px-[20px] px-[10px] py-[10px] justify-between shadow-md  items-center">
            <div>
              <div className="font-[Outfit-Bold] text-left text-sm  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start ">
              {t("SeeMore.jobList2.title")}

              </div>
              <div className="font-[Outfit-Regular] text-left text-sm  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
              {t("SeeMore.jobList2.subtitle")}

              </div>
            </div>
            <div className="text-[40px]   text-light200">
              <FaAngleRight />
            </div>
          </div>

          <div className="w-[100%] lg:h-[140px] md:h-[80px] h-60px bg-light100  rounded-[5px] flex lg:px-[50px] md:px-[20px] px-[10px] py-[10px] justify-between shadow-md  items-center">
            <div>
              <div className="font-[Outfit-Bold] text-left text-sm  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start ">
              {t("SeeMore.jobList3.title")}

              </div>
              <div className="font-[Outfit-Regular] text-left text-sm  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
              {t("SeeMore.jobList3.subtitle")}

              </div>
            </div>
            <div className="text-[40px] text-light200">
              <FaAngleRight />
            </div>
          </div>

          <div className="w-[100%] lg:h-[140px] md:h-[80px] h-60px bg-light100  rounded-[5px] flex lg:px-[50px] md:px-[20px] px-[10px] py-[10px] justify-between shadow-md  items-center">
            <div>
              <div className="font-[Outfit-Bold] text-left text-sm  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
              {t("SeeMore.jobList4.title")}

              </div>
              <div className="font-[Outfit-Regular] text-left text-sm  max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
              {t("SeeMore.jobList4.subtitle")}

              </div>
            </div>
            <div className="text-[40px] font-[900] text-light200">
              <FaAngleRight />
            </div>
          </div>
        </div>
      </div>
      <div className="btn px-[80px] max-tab:p-[40px] max-md:px-[25px]  w-full  flex justify-end  gap-[20px] max-md:flex-col mt-[30px] max-md:mt-[0px]">
                  <button className="float-right font-[Outfit-Bold] bg-primary text-sm font-bold text-light400 px-4 py-3 rounded-[12px] whitespace-nowrap max-laptop:text-mf">
                  {t("SeeMore.applyButton")}

                  </button>
                </div>
    </div>
  )
}

export default Seemore