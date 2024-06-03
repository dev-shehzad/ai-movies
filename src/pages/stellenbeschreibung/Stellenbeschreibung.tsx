import Joincomponent from "../../components/Stellenbeschreibung/joincomponent/Joincomponent";
import { useTranslation } from "react-i18next";
import { FaAngleRight } from "react-icons/fa6";

const Stellenbeschreibung = () => {
  const { t } = useTranslation();
  // WHY FAST AI MOVIES?
  const jobSections = [
    {
      title: `${t("JobDescription.section2.items1.title")}`,
      description: `${t("JobDescription.section2.items1.description")}`,
      imageSrc: "/startup.svg",
    },
    {
      title: `${t("JobDescription.section2.items2.title")}`,
      description: `${t("JobDescription.section2.items2.description")}`,
      imageSrc: "/impact.svg",
    },
    {
      title: `${t("JobDescription.section2.items3.title")}`,
      description: `${t("JobDescription.section2.items3.description")}`,
      imageSrc: "/ki.svg",
    },
  ];

  const renderSection = (section: Section) => (
    <div
      className="flex py-[20px] max-md:py-[0px] items-center gap-[30px] max-md:gap-[15px]"
      key={section.title}
    >
      <div className="iconline w-[160px] h-[160px] max-laptop:w-[140px] max-laptop:h-[140px] max-md:w-[120px] max-md:h-[120px] bg-light400 rounded-[50%] flex items-center justify-center shadow-md">
        <img
          className="w-[80px] h-[80px] max-laptop:w-[65px] max-laptop:h-[65px] max-md:w-[50px] max-md:h-[50px]"
          src={section.imageSrc}
          alt=""
        />
      </div>
      <div className="textcont">
        <h3 className="font-[Outfit-Bold] text-sm font-bold max-laptop:text-mf">
          {section.title}
        </h3>
        <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
          {section.description}
        </p>
      </div>
    </div>
  );
  // WHY FAST AI MOVIES?

  // Roles
  const RolsSections = [
    {
      title: `${t("JobDescription.section3.title")}`,
      points: [
        `${t("JobDescription.section3.points11")}`,
        `${t("JobDescription.section3.points12")}`,
        `${t("JobDescription.section3.points13")}`,
        `${t("JobDescription.section3.points14")}`,
        `${t("JobDescription.section3.points15")}`,
      ],
    },
    {
      title: `${t("JobDescription.section4.title")}`,
      points: [
        `${t("JobDescription.section4.points1")}`,
        `${t("JobDescription.section4.points2")}`,
        `${t("JobDescription.section4.points3")}`,
        `${t("JobDescription.section4.points4")}`,
        `${t("JobDescription.section4.points5")}`,
      ],
    },
    {
      title: `${t("JobDescription.section5.title")}`,
      points: [
        `${t("JobDescription.section5.points6")}`,
        `${t("JobDescription.section5.points7")}`,
        `${t("JobDescription.section5.points8")}`,
        `${t("JobDescription.section5.points9")}`,
        `${t("JobDescription.section5.points10")}`,
      ],
    },
  ];

  const renderList = (text) => (
    <li className="list-item-red flex" key={text}>
      <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
        {text}
      </p>
    </li>
  );

  const renderSec = (section) => (
    <div
      className="w-[100%] p-8 shadow-md bg-light100 rounded-[10px] flex flex-col gap-[30px]"
      key={section.title}
    >
      <h3 className="text-sm font-bold font-[Outfit-Regular] max-md:text-center max-laptop:text-mf text-primary">
        {section.title}
      </h3>
      <ul>{section.points.map(renderList)}</ul>
    </div>
  );
  // Roles

  //See More
  const jobListItems = [
    {
      title: `${t("SeeMore.jobList1.title")}`,
      subtitle: `${t("SeeMore.jobList1.subtitle")}`,
    },
    {
      title: `${t("SeeMore.jobList2.title")}`,
      subtitle: `${t("SeeMore.jobList2.subtitle")}`,
    },
    {
      title: `${t("SeeMore.jobList3.title")}`,
      subtitle: `${t("SeeMore.jobList3.subtitle")}`,
    },
    {
      title: `${t("SeeMore.jobList4.title")}`,
      subtitle: `${t("SeeMore.jobList4.subtitle")}`,
    },
  ];
  //See More
  return (
    <div className="">
      <div className=" w-full max-w-[2000px] mx-auto mt-[10px] max-tab:mt-[40px]  p-[80px] max-md:p-[30px] max-tab:p-[40px]">
        {/* Project Study in Business Development */}
        <div className=" ">
          <h1 className="text-lg font-[Outfit-Bold]  max-md:text-sm max-md:text-center max-laptop:text-lf">
            {t("JobDescription.section1.title")}
          </h1>
          <h3 className="text-sm font-bold font-[Outfit-Regular] max-md:text-center max-laptop:text-mf">
            {t("JobDescription.section1.subtitle")}
          </h3>
          <div className=" font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start mt-[50px]">
            {t("JobDescription.section1.description")}
          </div>
        </div>
        {/* //Project Study in Business Development */}
      </div>

      {/* WHY FAST AI MOVIES Headings? */}
      <div className=" w-[100%]  flex   justify-center bg-light100  ">
        <div className=" w-[100%] max-w-[2000px] mx-auto  p-[80px] max-md:p-[30px] max-tab:p-[40px]">
          <div className=" flex  flex-col gap-[20px] mt-[50px]">
            <h3 className=" text-sm font-bold font-[Outfit-Bold] max-md:text-center max-laptop:text-mf text-primary">
              {t("JobDescription.section2.title")}
            </h3>
            {/* <Whymoviesfast/> */}
            <div className="w-[100%] flex justify-center">
              <div className="w-[100%]  max-w-[2000px]">
                <div className="w-[100%] pb-[50px] flex flex-col gap-[20px]">
                  <div className="lg:gap-[2%]  justify-between flex-wrap flex lg:flex-row flex-col w-[100%] max-md:justify-start mt-[50px] max-tab:mt-[20px] max-tab:flex-row max-tab:justify-start max-md:items-center gap-[30px]">
                    {jobSections.map(renderSection)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //WHY FAST AI MOVIES? */}

      <div className=" w-[100%] flex  justify-center ">
        {/* Role */}
        <div className="w-[100%] flex max-md:flex-col justify-center flex-wrap p-[80px] max-md:p-[30px] max-tab:p-[40px] max-w-[2000px]">
          <div className="w-[100%] p-[30px] max-md:p-[0px] max-tab:p-[40px] max-w-[2000px]">
            <div className="w-[100%] flex max-md:flex-col gap-[30px]">
              {RolsSections.slice(0, 2).map(renderSec)}
            </div>
          </div>
          <div className="w-[100%] px-[30px] max-tab:px-[40px] max-md:px-0 max-w-[2000px]">
            <div className="w-[100%] max-md:py-[30px] flex flex-col gap-[30px]">
              {RolsSections.slice(2).map(renderSec)}
            </div>
          </div>
        </div>
        {/* <Role/> */}
        {/* Role */}
      </div>
      {/* Join Us */}
      <Joincomponent />
      {/* Join Us */}

      {/* See More */}
      <div className="my-[80px]">
        <div className="max-w-[2000px] mx-auto  w-[100%] flex flex-col lg:px-[80px] px-[20px] pt-[50px]">
          <h3 className="text-sm text-primary font-bold font-[Outfit-Bold] max-md:text-center max-laptop:text-mf">
            {t("SeeMore.title")}
          </h3>
          <h1 className="text-lg font-[Outfit-Bold]  max-md:text-sm max-md:text-center max-laptop:text-lf">
            {t("SeeMore.subtitle")}
          </h1>
          <div className="w-[100%] flex items-center lg:gap-6 md:gap-4 gap-3 flex-col lg:mt-[50px] md:mt-[30px] mt-[20px]">
            {jobListItems.map((item, index) => (
              <div
                key={index}
                className="w-[100%] lg:h-[140px] md:h-[80px] h-60px bg-light100 rounded-[5px] flex lg:px-[50px] md:px-[20px] px-[10px] py-[10px] justify-between shadow-md items-center"
              >
                <div>
                  <div className="font-[Outfit-Bold] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                    {item.title}
                  </div>
                  <div className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                    {item.subtitle}
                  </div>
                </div>
                <div className="text-[40px]   text-light200">
                  <FaAngleRight />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="btn px-[80px] max-tab:p-[40px] max-md:px-[25px]  w-full  flex justify-end  gap-[20px] max-md:flex-col mt-[30px] max-md:mt-[0px]">
          <button className="float-right font-[Outfit-Bold] bg-primary text-sm font-bold text-light400 px-4 py-3 rounded-[12px] whitespace-nowrap max-laptop:text-mf">
            {t("SeeMore.applyButton")}
          </button>
        </div>
      </div>
      {/* See More */}
    </div>
  );
};

export default Stellenbeschreibung;
