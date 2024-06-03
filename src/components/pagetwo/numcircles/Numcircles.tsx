import React from "react";
import { useTranslation } from "react-i18next";
// Component for rendering a circle with a number
const CircleWithNumber = ({ number }) => (
  <div className="flex flex-col max-tab:mt-6 text-center max-xtab:hidden">
    <div className="bg-light400 w-[180px] h-[180px] rounded-full border-2 border-solid border-blue-700 flex items-center justify-center relative">
      <span className="text-primary text-[60px]">{number}</span>
    </div>
  </div>
);
// Component for rendering a line between circles
const LineBetweenCircles = () => (
  <div className="flex-grow h-[2px] max-xtab:hidden  bg-primary mt-[0%]" />
);

const NumCircles = () => {
  const data = [1, 2, 3, 4, 5];
  const { t } = useTranslation();
  return (
    <div className="bg-light100 p-[80px] max-md:p-[30px] max-tab:p-[40px]">
      <div className="max-w-[2000px] mx-auto text-start">
        <div className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
          {t("numcircles.heading1")}
        </div>
        <div className="text-lg font-bold max-md:text-sm max-md:text-center max-laptop:text-lf">
          {t("numcircles.heading2")}
        </div>
      </div>
      <div className="lg:flex lg:flex-row  justify-center items-center lg:mt-[70px] max-w-[2000px] mx-auto">
        {data.map((number, index) => (
          <React.Fragment key={index}>
            <CircleWithNumber number={number} />
            {index < data.length - 1 && <LineBetweenCircles />}
          </React.Fragment>
        ))}
      </div>
      <div className="flex mt-4 justify-between  items-start max-w-[2000px] mx-auto max-tab:flex-col max-tab:gap-7">
        <div className="one w-[14%] max-tab:w-full flex flex-col  justify-center text-start">
          <h3 className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
            {" "}
            {t("numcircles.title1")}
          </h3>
          <p className="text-sm font-[Outfit-Regular]  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px] max-tab:mt-0">
            {t("numcircles.description1")}
          </p>
        </div>
        <div className="two w-[14%] max-tab:w-full flex flex-col  justify-center text-start">
          <h3 className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
            {" "}
            {t("numcircles.title2")}{" "}
          </h3>
          <p className="text-sm font-[Outfit-Regular]  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px] max-tab:mt-0">
            {t("numcircles.description2")}
          </p>
        </div>
        <div className="three w-[14%] max-tab:w-full flex flex-col  justify-center text-start">
          <h3 className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
            {" "}
            {t("numcircles.title3")}{" "}
          </h3>
          <p className="text-sm font-[Outfit-Regular]  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px] max-tab:mt-0">
            {" "}
            {t("numcircles.description3")}
          </p>
        </div>
        <div className="four w-[14%] max-tab:w-full flex flex-col  justify-center text-start">
          <h3 className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
            {" "}
            {t("numcircles.title4")}
          </h3>
          <p className="text-sm font-[Outfit-Regular]  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px] max-tab:mt-0">
            {t("numcircles.description4")}
          </p>
        </div>
        <div className="five w-[14%] max-tab:w-full flex flex-col  justify-center text-start">
          <h3 className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
            {" "}
            {t("numcircles.title5")}{" "}
          </h3>
          <p className="text-sm font-[Outfit-Regular]  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px] max-tab:mt-0">
            {t("numcircles.description5")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NumCircles;
