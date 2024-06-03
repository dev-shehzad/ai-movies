import Topstory from "../../components/Uber/Topstory";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  // const about = [
  //   {
  //     id: 1,
  //     profile: "/uben/person1.png",
  //     name: "FLORIAN SCHERL",
  //     profession: "Gründer und Geschäftsführer",
  //   },
  //   {
  //     id: 2,
  //     profile: "/uben/person2.png",
  //     name: "OLIVER GROßKLOß",
  //     profession: "Fullstack Developer ",
  //   },
  //   {
  //     id: 3,
  //     profile: "/uben/person3.png",
  //     name: "PHILIPP GABRIEL",
  //     profession: "Product Manager",
  //   },
  //   {
  //     id: 4,
  //     profile: "/uben/person4.png",
  //     name: "ARNAV SINGH",
  //   },
  //   {
  //     id: 5,
  //     profile: "/uben/person5.png",
  //     name: "DEJAN TODOROV",
  //   },
  // ];
  const about = [
    {
      id: 1,
      profile: "/uben/person1.png",
      name: `${t("about.about1.name")}`,
      profession: `${t("about.about1.profession")}`,
    },
    {
      id: 2,
      profile: "/uben/person2.png",
      name: `${t("about.about2.name")}`,
      profession: `${t("about.about2.profession")}`,
    },
    {
      id: 3,
      profile: "/uben/person3.png",
      name: `${t("about.about3.name")}`,
      profession: `${t("about.about3.profession")}`,
    },
    {
      id: 4,
      profile: "/uben/person4.png",
      name: `${t("about.about4.name")}`,
    },
    {
      id: 5,
      profile: "/uben/person5.png",
      name: `${t("about.about5.name")}`,
    },
  ];
  const advisorsData = [
    {
      imgSrc: "/uben/person6.png",
      altText: "Advisor 1",
      title: `${t("about.adv1")}`, // Use the translation key directly
    },
    {
      imgSrc: "/uben/person7.png",
      altText: "Advisor 2",
      title: `${t("about.adv2")}`, // Use the translation key directly
    },
    {
      imgSrc: "/uben/person8.png",
      altText: "Advisor 3",
      title: `${t("about.adv3")}`, // Use the translation key directly
    },
  ];

  return (
    <div>
      <div>
        <Topstory />
      </div>

      <div className="max-w-[2000px] mx-auto  w-[100%] flex flex-col lg:px-[80px] px-[20px] pt-[50px]">
        <div className="lg:text-sm text-xs font-[Outfit-Bold] text-primary">
          {t("about.title")}
        </div>
        <div className="xl:text-lg lg:text-md text-m2d text font-[Outfit-Bold] mb-[50px] ">
          {t("about.subtitle")}
        </div>
        <div className="lg:text-sm bg-light200 lg:w-[90%] w-[100%] p-[50px] text-xs font-[Outfit-Bold] text-light400">
          {t("about.content")}
        </div>
        <div className="flex flex-wrap w-[full] justify-center gap-6 mt-[80px]">
          {about.map((item) => {
            return (
              <div key={item.id} className=" text-center">
                <div className=" h-[250px] w-[250px] rounded-full">
                  <div className=" object-cover">
                    <img src={item.profile} alt="" />
                  </div>
                </div>
                <div className="lg:text-sm text-xs font-[Outfit-Bold] text-primary">
                  {item.name}
                </div>
                <div className="lg:text-sm text-xs font-[Outfit-Bold] text-dark100">
                  {item.profession}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full bg-light100">
        <div className="max-w-[2000px] mx-auto w-[100%] flex flex-col lg:px-[80px] px-[20px] py-[50px] pt-[50px] mt-[50px]">
          <div className="xl:text-lg lg:text-md text-m2d text font-[Outfit-Bold] mb-[50px]">
            Advisors
          </div>
          <div className="flex lg:flex-row md:flex-row flex-col w-full justify-center items-center gap-11">
            {advisorsData.map((advisor, index) => (
              <div className="text-center" key={index}>
                <div className="h-[250px] w-[250px] rounded-full object-cover">
                  <img src={advisor.imgSrc} alt={advisor.altText} />
                </div>
                <div className="lg:text-sm text-xs font-[Outfit-Bold] text-primary">
                  {t(advisor.title)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" max-w-[2000px] mx-auto mb-[50px] lg:p-[80px] md:p-[30px] p-[20px]">
        <div className="lg:text-sm text-xs font-[Outfit-Bold] text-primary">
          {t("about.join")}
        </div>
        <div className="xl:text-lg lg:text-md text-m2d text font-[Outfit-Bold] ">
          {t("about.job")}
        </div>
        <div className="lg:text-sm text-xs font-[Outfit-Bold] text-dark100">
          {t("about.description2")}
        </div>
        <button className="text-light400 bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5">
          {t("about.buttonText")}
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
