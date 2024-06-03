import { useTranslation } from "react-i18next";

const Features = () => {
  // Accessing translation function
  const { t } = useTranslation();
  // Data for features
  const featuresData = [
    {
      id: 1,
      image: "/pagetwo/features/1.svg",
      title: `${t("feature.feature1.title")}`,
      description: `${t("feature.feature1.description")}`,
    },
    {
      id: 2,
      image: "/pagetwo/features/2.svg",
      title: `${t("feature.feature2.title")}`,
      description: `${t("feature.feature2.description")}`,
    },
    {
      id: 3,
      image: "/pagetwo/features/3.svg",
      title: `${t("feature.feature3.title")}`,
      description: `${t("feature.feature3.description")}`,
    },
    {
      id: 4,
      image: "/pagetwo/features/4.svg",
      title: `${t("feature.feature4.title")}`,
      description: `${t("feature.feature4.description")}`,
    },
    {
      id: 5,
      image: "/pagetwo/features/5.svg",
      title: `${t("feature.feature5.title")}`,
      description: `${t("feature.feature5.description")}`,
    },
    {
      id: 6,
      image: "/pagetwo/features/6.svg",
      title: `${t("feature.feature6.title")}`,
      description: `${t("feature.feature6.description")}`,
    },
    {
      id: 7,
      image: "/pagetwo/features/7.svg",
      title: `${t("feature.feature7.title")}`,
      description: `${t("feature.feature7.description")}`,
    },
    {
      id: 8,
      image: "/pagetwo/features/8.svg",
      title: `${t("feature.feature8.title")}`,
      description: `${t("feature.feature8.description")}`,
    },
    {
      id: 9,
      image: "/pagetwo/features/9.svg",
      title: `${t("feature.feature9.title")}`,
      description: `${t("feature.feature9.description")}`,
    },
    {
      id: 10,
      image: "/pagetwo/features/10.svg",
      title: `${t("feature.feature10.title")}`,
      description: `${t("feature.feature10.description")}`,
    },
    {
      id: 11,
      image: "/pagetwo/features/11.svg",
      title: `${t("feature.feature11.title")}`,
      description: `${t("feature.feature11.description")}`,
    },
    {
      id: 12,
      image: "/pagetwo/features/12.svg",
      title: `${t("feature.feature12.title")}`,
      description: `${t("feature.feature12.description")}`,
    },
  ];
  return (
    <div className="w-full mt-[60px] bg-light100 p-[80px] max-md:p-[30px] max-tab:p-[40px]">
      <div className="max-w-[2000px] mx-auto flex flex-col items-center w-[100%]">
        <div className="w-[95%]">
          <div className="flex flex-col mt-[20px]">
            <h3 className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
              {" "}
              {t("feature.heading1")}
            </h3>
            <h1 className="text-lg font-[Outfit-Bold]  max-md:text-sm max-md:text-center max-laptop:text-lf">
              {" "}
              {t("feature.heading3")}
            </h1>
          </div>
          <div className="mt-[20px] max-md:mt-[0px]">
            <div className="flex flex-wrap justify-center  gap-[80px]">
              {featuresData.map((feature) => (
                <div
                  key={feature.id}
                  className="relative flex flex-col items-center justify-center transition group"
                >
                  <div className="text-dark100 w-[300px] h-[300px] text-4xl opacity-100 transition duration-300 group-hover:opacity-0 flex justify-center items-center">
                    <div className="text-[80px] w-[120px] h-[120px] border-2 border-solid border-primary flex items-center justify-center rounded-[50%]">
                      <img
                        src={feature.image}
                        alt=""
                        className="w-[50px] h-[50px]"
                      />
                      {/* {feature.image} */}
                    </div>
                  </div>
                  <div className="text-light400 text-center font-[Outfit-Regular] opacity-0 group-hover:opacity-100 absolute bottom-0 w-[300px] p-[30px] bg-primary transition duration-300 flex items-center justify-center">
                    {feature.description}
                  </div>
                  <div className="text-primary text-sm font-[Outfit-Bold] text-center opacity-100 group-hover:opacity-0 absolute bottom-[20px] w-full transition duration-300 whitespace-nowrap max-laptop:text-mf p-2">
                    {feature.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
