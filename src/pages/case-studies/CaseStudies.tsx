import { useTranslation } from "react-i18next";

import { GoArrowRight } from "react-icons/go";

const CaseStudies = () => {
  const { t } = useTranslation();
  // Data for case study boxes
  const box = [
    {
      id: 1,
      logo: "/casestudy/1.png",
      name: `${t("caseStudies.box1.name")}`,
      des: `${t("caseStudies.box1.des")}`,
      username: `${t("caseStudies.box1.username")}`,
      userinfo: `${t("caseStudies.box1.userinfo")}`,
      userpic: "/casestudy/man1.png",
    },
    {
      id: 2,
      logo: "/casestudy/2.png",
      name: `${t("caseStudies.box2.name")}`,
      des: `${t("caseStudies.box2.des")}`,
      username: `${t("caseStudies.box2.username")}`,
      userinfo: `${t("caseStudies.box2.userinfo")}`,
      userpic: "/casestudy/man2.png",
    },
    {
      id: 3,
      logo: "/casestudy/3.png",
      name: `${t("caseStudies.box3.name")}`,
      des: `${t("caseStudies.box3.des")}`,
      username: `${t("caseStudies.box3.username")}`,
      userinfo: `${t("caseStudies.box3.userinfo")}`,
      userpic: "/casestudy/man3.png",
    },
  ];
  return (
    <div className="w-[100%] mt-[50px] mb-[80px] px-[80px] max-laptop:px-[60px] max-md:px-[30px]">
      <div className="max-w-[2000px] mx-auto">
        <div className="text-sm font-[Outfit-Bold]  text-primary max-md:text-center max-laptop:text-mf">
          {t("caseStudies.title")}
        </div>
        <div className="text-lg font-[Outfit-Bold]  max-md:text-sm max-md:text-center max-laptop:text-lf ">
          {t("caseStudies.subtitle")}
        </div>
        {/* Subtitle for Case Studies */}
        <div className="w-[100%] flex justify-between  max-tab:flex-col lg:gap-8 gap-6 items-stretch mt-[60px]">
          {box.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-light100 relative w-[30%] max-tab:w-full rounded-[10px] shadow-md  lg:p-[40px] p-[20px]"
              >
                <div className="flex items-center object-cover ">
                  <img src={item.logo} alt="" width="300px" />
                </div>
                <div className=" w-[90%] border-b-[1px] ml-2 border-b-gray-300 mb-[30px]"></div>
                <div className="text-sm  text-dark100 font-bold font-[Outfit-Bold] max-md:text-left max-laptop:text-mf">
                  {item.name}
                </div>
                <div className="text-sm pb-[80px] font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start">
                  {item.des}
                </div>

                <div className="whitespace-nowrap absolute pb-7 bottom-6 right-4 h-[31px] w-[full] xl:text-[25px] lg:text-[20px] md:text-[15px] text-[16px] font-[Outfit-Bold] text-primary flex items-center justify-end lg:pr-3 md:pr-1 pr-0 ">
                  {t("caseStudies.button")}
                  <div className=" ">
                    <GoArrowRight className="text-sm ml-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
