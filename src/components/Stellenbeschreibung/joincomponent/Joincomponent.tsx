import { FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

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

const Joincomponent = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-light100 py-10 px-[80px] max-tab:px-[40px] max-md:px-[30px]  border-b-[2px] ">
      <div>
        <div className="w-full mx-auto max-w-[2000px]">
          <div className=" bg-cover w-[100%] lg:flex-row  lg:items-center flex flex-col items-center justify-center py-[80px] max-md:py-[30px]   gap-[4%]">
            <div className="max-w-[2000px] w-full mx-auto flex  gap-[60px] justify-between items-center  max-lg:p-[40px] max-md:p-[0px]">
              <div className="flex flex-col gap-6">
                <h3 className="text-sm text-primary font-[Outfit-Bold] max-laptop:text-mf max-md:text-center">
                  {t("JoinComponent.title")}
                </h3>
                <h1 className="  font-[Outfit-Bold] text-left text-lg leading-[60px] max-laptop:text-lf max-md:text-sm max-md:leading-8 max-md:text-center max-laptop:font-[700] max-laptop:leading-10">
                  {t("JoinComponent.subtitle")}
                </h1>
                <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                  {t("JoinComponent.content")}
                  <br />
                  <a className="text-primary" href="#">
                    jobs@fast-ai-movies.de!
                  </a>
                </p>

                <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                  {" "}
                  {t("JoinComponent.supervisedBy")}
                </p>
                <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                  {" "}
                  {t("JoinComponent.lookingForward")}{" "}
                  <a className="text-primary" href="@">
                    {t("JoinComponent.websiteLink")}
                  </a>
                </p>
                <div className="btn flex gap-[20px] max-md:flex-col">
                  <button className="font-[Outfit-Bold] bg-primary text-sm font-bold text-light400 px-4 py-3 rounded-[12px] whitespace-nowrap max-laptop:text-mf">
                    {t("JoinComponent.applyButton")}
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
    </div>
  );
};

export default Joincomponent;
