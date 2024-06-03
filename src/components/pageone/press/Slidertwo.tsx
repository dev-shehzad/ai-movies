import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const Carousel = () => {
  const { t } = useTranslation();
  const sliderRef = useRef<Slider | null>(null);

  const CustomNextArrow = (props: any) => (
    <div
      className="slick-arrow custom-next-arrow absolute -right-16 top-[40%] "
      onClick={props.onClick}
    >
      {/* <FaAngleRight size={70}/> */}
      <img className="w-[40px]" src="/slidetwo/arrow.png" alt="" />
      {/* You can customize the content inside the arrow here */}
    </div>
  );

  const CustomPrevArrow = (props: any) => (
    <div className="slick-arrow custom-prev-arrow" onClick={props.onClick}>
      {/* <FaAngleLeft /> */}
      {/* You can customize the content inside the arrow here */}
    </div>
  );

  // const slideContents = [
  //   {
  //     id: 1,
  //     image: "/slidetwo/1.png",
  //     cont: " In dieser Episode trifft Antoine Leboyer Florian Scherl, Gründer von FAST AI Movies",
  //     blue: "EP 28 Learn from an entrepreneur: Florian Scherl, Founder at Fast AI Movies",
  //   },
  //   {
  //     id: 2,
  //     image: "/slidetwo/2.png",
  //     cont: " In der Mathestunde schnappt er seinen Laptop und geht…",
  //     blue: "Markteintritt mitten im Abi ",
  //   },
  //   {
  //     id: 3,
  //     image: "/slidetwo/3.png",
  //     cont: " In dieser Episode trifft Antoine Leboyer Florian Scherl, Gründer von FAST AI Movies",
  //     blue: "20 unter 20: Diese jungen Startup-Gründer stehen vor dem Durchbruch ",
  //   },
  //   {
  //     id: 4,
  //     image: "/slidetwo/1.png",
  //     cont: " In dieser Episode trifft Antoine Leboyer Florian Scherl, Gründer von FAST AI Movies",
  //     blue: "EP 28 Learn from an entrepreneur: Florian Scherl, Founder at Fast AI Movies",
  //   },
  //   // Add more slide content objects as needed
  // ];
  const slideContents = [
    {
      id: 1,
      image: "/slidetwo/1.png",
      cont: `${t("Carousel.Slide1.Content")}`,
      blue: `${t("Carousel.Slide1.BlueText")}`,
    },
    {
      id: 2,
      image: "/slidetwo/2.png",
      cont: `${t("Carousel.Slide2.Content")}`,
      blue: `${t("Carousel.Slide2.BlueText")}`,
    },
    {
      id: 3,
      image: "/slidetwo/3.png",
      cont: `${t("Carousel.Slide3.Content")}`,
      blue: `${t("Carousel.Slide3.BlueText")}`,
    },
    {
      id: 4,
      image: "/slidetwo/1.png",
      cont: `${t("Carousel.Slide4.Content")}`,
      blue: `${t("Carousel.Slide4.BlueText")}`,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    draggable: true,
    ref: sliderRef,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2500,
        },
      },
    ],
  };

  return (
    <div className="">
      <div className="mx-auto mt-[30px] space-x-4">
        <Slider {...settings}>
          {slideContents.map((content, index) => (
            <div key={index} className="flex p-2 !py-[60px] flex-row">
              <div className="bg-light400  px-[50px] !py-[60px] shadow-md rounded-[10px] text-2xl flex flex-col justify-center items-center gap-7">
                <div>
                  <img
                    src={content.image}
                    alt=""
                    className="w-[270px] mx-auto h-[94px] object-contain"
                  />
                </div>
                <div className="border-t max-tab:pb-8 border-solid border-grey ">
                  <p className="mt-[30px] h-[140px] text-sm font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start">
                    <span className="text-primary font-[Outfit-Regular]">
                      {content.blue}
                    </span>
                    {content.cont}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
