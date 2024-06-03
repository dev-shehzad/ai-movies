import { FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const Jobs = () => {
  const { t } = useTranslation();
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <></>, // Hide next arrow
    prevArrow: <></>, // Hide previous arrow
    centerMode: true, // Center the active slide
    centerPadding: "0", // No padding for center mode
    dotsClass: "slick-dots custom-dots", // Custom class for dots
  };


  const jobStudiesData = [
    {
      id: 1,
      projectStudyTitle: `${t("jobspage.projectStudyTitle")}`,
      complianceLegalMarketSegment: t("jobspage.complianceLegalMarketSegment"),
    },
    {
      id: 2,
      projectStudyTitle: `${t("jobspage.projectStudyTitle")}`,
      complianceLegalMarketSegment: t("jobspage.complianceLegalMarketSegment"),
    },
    {
      id: 3,
      projectStudyTitle: `${t("jobspage.projectStudyTitle")}`,
      complianceLegalMarketSegment: t("jobspage.complianceLegalMarketSegment"),
    },
    {
      id: 4,
      projectStudyTitle: `${t("jobspage.projectStudyTitle")}`,
      complianceLegalMarketSegment: t("jobspage.complianceLegalMarketSegment"),
    },
    
  ];

  return (
    <div className="w-[100%] mb-[80px] flex flex-col">
      <div>
        <div className="w-full m-auto">
          <div className="bg-[url('./flexvid/bg.png')] bg-cover w-[100%] lg:flex-row lg:items-center flex flex-col items-center justify-center py-[80px] max-md:py-[30px] px-[80px] max-tab:px-[40px] max-laptop:px-[80px] max-md:px-[30px] gap-[4%]">
            <div className="max-w-[2000px] w-full mx-auto flex gap-[60px] justify-between items-center px-[40px] max-lg:p-[40px] max-md:p-[0px]">
              <div className=" text-light400 flex flex-col gap-6">
                <h3 className="text-sm font-[Outfit-Bold] max-laptop:text-mf max-md:text-center">
                  {t("jobspage.joinUsHeading")}
                </h3>
                {/* Hero Main Heading */}
                <h1 className="font-[Outfit-Bold] text-left text-lg   leading-[60px] max-laptop:text-lf max-md:text-sm max-md:leading-8 max-md:text-center max-laptop:font-[700] max-laptop:leading-10">
                  {t("jobspage.joinUsTitle")}
                </h1>
                <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                  {t("jobspage.joinUsDescription")}
                </p>
                <div className="btn flex gap-[20px] max-md:flex-col">
                  <button className="font-[Outfit-Bold] text-primary text-sm font-bold bg-light400 px-4 py-3 rounded-[12px] whitespace-nowrap max-laptop:text-mf">
                    {t("jobspage.applyNowButton")}
                  </button>
                </div>
              </div>
            </div>
            {/* Slider for the image portion */}
            <Slider
              {...sliderSettings}
              className="w-[50%] max-tab:w-full max-tab:px-[30px] max-md:px-0 max-md:mt-7 lg:flex lg:items-center "
            >
              {/* Add your image slides as needed */}
              <div>
                <img
                  className="object-cover rounded-[10px] w-[800px]   mx-auto"
                  src="/12.png"
                  alt="Slide 1"
                />
              </div>
              <div>
                <img
                  className="object-cover rounded-[10px] w-[800px] mx-auto"
                  src="/12.png"
                  alt="Slide 2"
                />
              </div>
              <div>
                <img
                  className="object-cover rounded-[10px] w-[800px] mx-auto"
                  src="/12.png"
                  alt="Slide 2"
                />
              </div>

              {/* Add more image slides as needed */}
            </Slider>
          </div>
        </div>
      </div>
      <div className="max-w-[2000px] mx-auto  w-[100%] flex flex-col lg:px-[80px] px-[20px] pt-[50px]">
      <div className="w-[100%] flex items-center lg:gap-6 md:gap-4 gap-3 flex-col lg:mt-[50px] md:mt-[30px] mt-[20px]">
      {jobStudiesData.map((item) => (
        <div
          key={item.id}
          className="w-[93%] lg:h-[140px] md:h-[80px] h-60px bg-light100 rounded-[5px] flex lg:px-[50px] md:px-[20px] px-[10px] py-[10px] justify-between shadow-md items-center"
        >
          <div>
            <div className="font-[Outfit-Bold]  text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
              {item.projectStudyTitle}
            </div>
            <div className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
              {item.complianceLegalMarketSegment}
            </div>
          </div>
          <div className="text-[40px] text-light200">
            <FaAngleRight />
          </div>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default Jobs;
