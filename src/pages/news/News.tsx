import { PiNoteDuotone } from "react-icons/pi";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FaPhotoVideo, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();

  // Refs for scrolling to specific sections
  const newsSectionRef = useRef(null);
  const podcastSectionRef = useRef(null);
  const videoSectionRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  // Data for news articles
  const news = [
    {
      id: 1,
      video: "/stell/card1.png",
      name: `${t("news.news1.name")}`,
      p: `${t("news.news1.p")}`,
    },
    {
      id: 2,
      video: "/stell/card2.png",
      name: `${t("news.news2.name")}`,
      p: `${t("news.news2.p")}`,
    },
    {
      id: 3,
      video: "/stell/card3.png",
      name: `${t("news.news3.name")}`,
      p: `${t("news.news3.p")}`,
    },
    {
      id: 4,
      video: "/stell/card1.png",
      name: `${t("news.news4.name")}`,
      p: `${t("news.news4.p")}`,
    },
    {
      id: 5,
      video: "/stell/card2.png",
      name: `${t("news.news5.name")}`,
      p: `${t("news.news5.p")}`,
    },
    {
      id: 6,
      video: "/stell/card3.png",
      name: `${t("news.news6.name")}`,
      p: `${t("news.news6.p")}`,
    },
    {
      id: 7,
      video: "/stell/card1.png",
      name: `${t("news.news7.name")}`,
      p: `${t("news.news7.p")}`,
    },
    {
      id: 8,
      video: "/stell/card2.png",
      name: `${t("news.news8.name")}`,
      p: `${t("news.news8.p")}`,
    },
    {
      id: 9,
      video: "/stell/card3.png",
      name: `${t("news.news9.name")}`,
      p: `${t("news.news9.p")}`,
    },
    {
      id: 10,
      video: "/stell/card1.png",
      name: `${t("news.news10.name")}`,
      p: `${t("news.news10.p")}`,
    },
    {
      id: 11,
      video: "/stell/card2.png",
      name: `${t("news.news11.name")}`,
      p: `${t("news.news11.p")}`,
    },
    {
      id: 12,
      video: "/stell/card3.png",
      name: `${t("news.news12.name")}`,
      p: `${t("news.news12.p")}`,
    },
  ];
  // Data for video section
  const videoSectionData = [
    {
      imgSrc: "/stell/card1.png",
      founderTextKey: `${t("news.contentfounder")}`, // Using template literals
      watchVidTextKey: `${t("news.watchvid")}`, // Using template literals
    },
    {
      imgSrc: "/stell/card1.png",
      founderTextKey: `${t("news.last")}`, // Using template literals
      watchVidTextKey: `${t("news.watchvid")}`, // Using template literals
    },
  ];
  // Data for information section
  const infoSectionData = [
    {
      titleKey: `${t("news.address")}`, // Using template literals
      descKey: `${t("news.epdesc")}`, // Using template literals
      watchVidTextKey: `${t("news.watchvid")}`, // Using template literals
    },
    {
      titleKey: `${t("news.founderinfo")}`, // Using template literals
      descKey: `${t("news.founderjourney")}`, // Using template literals
      watchVidTextKey: `${t("news.watchvid")}`, // Using template literals
    },
  ];

  return (
    <div className="max-w-[2000px] mx-auto my-[40px] w-[100%] flex flex-col lg:px-[80px] px-[20px] pt-[50px]">
      <div className="lg:text-sm text-xs font-[Outfit-Bold] text-primary">
        News
      </div>

      <div className="xl:text-lg lg:text-md text-m2d text font-[Outfit-Bold] ">
        {t("news.title")}
      </div>
      {/* Buttons line */}
      <div className="flex items-center justify-between my-7">
        {/* buttons */}
        <button
          onClick={() => scrollToSection(newsSectionRef)}
          className="artikle-button w-[120px] h-[120px] rounded-[50%] border-[2px] border-primary border-solid flex items-center justify-center text-[80px]"
        >
          <PiNoteDuotone />
        </button>
        <div className="podcast-button flex-1 h-[2px] bg-primary"></div>
        <button
          onClick={() => scrollToSection(podcastSectionRef)}
          className="one w-[120px] h-[120px] rounded-[50%] border-[2px] border-primary border-solid flex items-center justify-center text-[80px]"
        >
          {" "}
          <MdOutlineKeyboardVoice />
        </button>
        <div className="line flex-1 h-[2px] bg-primary"></div>
        <button
          onClick={() => scrollToSection(videoSectionRef)}
          className="video-button w-[120px] h-[120px] rounded-[50%] border-[2px] border-primary border-solid flex items-center justify-center text-[80px]"
        >
          <FaPhotoVideo />
        </button>
        {/* buttons */}
      </div>
      {/* //Buttons line */}

      {/* Articles */}
      <div className="w-[100%] flex gap-[20px] bg-light100 lg:my-[30px] md:my-[20px] my-[10px] rounded-l-3xl mr-[30px] items-center">
        <div className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] outline-primary outline rounded-full bg-white justify-center flex items-center">
          <div className="text-5xl ">
            <PiNoteDuotone />{" "}
          </div>
        </div>
        <div
          ref={newsSectionRef}
          className="lg:text-sm text-xs font-[Outfit-Bold]  text-primary"
        >
          {t("news.articles")}
        </div>
      </div>
      {news.map((item) => {
        return (
          <div key={item.id} className="w-[100%] flex-col">
            <div className="w-[100%] md:flex-row flex flex-col   lg:p-4 md:p-3 p-1 gap-[20px] ">
              <div className="xl:min-w-[450px] xl:max-w-[450px] lg:min-w-[390px] lg:max-w-[390px]  h-[auto] md:min-w-[270px]  w-[100%]  rounded-[15px] ">
                <img src={item.video} />
              </div>
              <div className="flex flex-col gap-[20px] lg:p-[20px] md:p[8px] p-[5px] md:w-[auto] w-[100%]  h-[auto] ">
                <div className="lg:text-sm text-xs font-[Outfit-Bold]  text-[black]">
                  {item.name}
                </div>
                <div className="lg:text-sm text-xs font-[Outfit-Regular] xl:pr-[50px]  text-[black]">
                  {item.p}
                </div>
                <div className="lg:text-sm text-xs font-[Outfit-Bold]  text-primary flex items-center gap-[20px]">
                  {t("news.articleless")}

                  <div className="lg:pt-[5.5px] md:pt-[6px] pt-[4px] ">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Articles */}

      {/* Podcasts */}
      <div className="w-[100%] flex gap-[20px] bg-light100 lg:my-[30px] md:my-[20px] my-[10px] rounded-l-3xl mr-[30px] items-center">
        <div className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] outline-primary outline rounded-full bg-white justify-center flex items-center">
          <div className="text-3xl ">
            <MdOutlineKeyboardVoice />{" "}
          </div>
        </div>
        <div
          ref={podcastSectionRef}
          className="lg:text-sm text-xs font-[Outfit-Bold]  text-primary"
        >
          {`${t("news.podcast")}`}
        </div>
      </div>

      <div className="lg:flex-row md:flex-row flex-col h-auto pb-2 flex gap-[40px]">
        {infoSectionData.map((section, index) => (
          <div
            className="flex flex-col xl:w-[450px] lg:w-[300px] md:w-[250px] w-[100%] lg:pl-8 md:pl-6 pl-3 gap-[20px]"
            key={index}
          >
            <div className="lg:text-sm text-xs font-[Outfit-Bold] text-[black] flex items-center gap-[20px]">
              {`${t(section.titleKey)}`}
            </div>
            <div className="lg:text-sm text-xs font-[Outfit-Regular] text-[black] flex items-center gap-[20px]">
              {`${t(section.descKey)}`}
            </div>
            <div className="lg:text-sm text-xs font-[Outfit-Bold] text-primary flex items-center gap-[20px]">
              {`${t(section.watchVidTextKey)}`}
              <div className="lg:pt-[5.5px] md:pt-[6px] pt-[4px] ">
                <FaArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* //Podcasts */}

      {/* End videos */}
      <div className="w-[100%] flex gap-[20px] bg-light100 lg:my-[30px] md:my-[20px] my-[10px] rounded-l-3xl mr-[30px] items-center">
        <div className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] outline-primary outline rounded-full bg-white justify-center flex items-center">
          <div ref={videoSectionRef} className="text-3xl">
            <FaPhotoVideo />{" "}
          </div>
        </div>
        <div className="lg:text-sm text-xs font-[Outfit-Bold]  text-primary">
          Video
        </div>
      </div>
      <div className="vidsection">
        {videoSectionData.map((video, index) => (
          <div className="flex lg:pl-[40px] md:p-4 p-3" key={index}>
            <div className="xl:min-w-[450px] xl:max-w-[450px] lg:min-w-[390px] lg:max-w-[390px] h-[auto] md:min-w-[270px] w-[100%] rounded-[15px]">
              <img src={video.imgSrc} alt={`Video ${index + 1}`} />
            </div>
            <div className="flex flex-col lg:pl-8 pl-4 lg:pt-5 pt-4 gap-[20px]">
              <div className="lg:text-sm text-xs font-[Outfit-Bold] text-[black] flex items-center gap-[20px]">
                {t(video.founderTextKey)}
              </div>
              <div className="lg:text-sm text-xs font-[Outfit-Bold] text-primary flex items-center gap-[20px]">
                {t(video.watchVidTextKey)}
                <div className="lg:pt-[10px] md:pt-[6px] pt-[4px] ">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* //End videos */}
    </div>
  );
};

export default News;
