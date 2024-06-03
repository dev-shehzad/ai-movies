// Webapp.jsx
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Schrit = () => {
  const { t } = useTranslation();
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      title: `${t("Schrit.Step1Title")}`,
      description: `${t("Schrit.Step1Description")}`,
      color: "primary",
      videoUrl: "./flexvid/vid.mp4",
    },
    {
      title: `${t("Schrit.Step2Title")}`,
      description: `${t("Schrit.Step2Description")}`,
      color: "light200",
      videoUrl: "./flexvid/vid.mp4",
    },
    {
      title: `${t("Schrit.Step3Title")}`,
      description: `${t("Schrit.Step3Description")}`,
      color: "light200",
      videoUrl: "./flexvid/vid.mp4",
    },
    {
      title: `${t("Schrit.Step4Title")}`,
      description: `${t("Schrit.Step4Description")}`,
      color: "light200",
      videoUrl: "./flexvid/vid.mp4",
    },
    {
      title: `${t("Schrit.Step5Title")}`,
      description: `${t("Schrit.Step5Description")}`,
      color: "light200",
      videoUrl: "./flexvid/vid.mp4",
    },
  ];

  // const steps = [
  //   {
  //     number: 1,
  //     title: "Corporate Design konfigurieren",
  //     description:
  //       "Wählen Sie ihre Farben und Schriftarten aus und laden Sie Ihr Logo hoch.",
  //     videoSrc: "./flexvid/vid.mp4", // Video source for step 1
  //   },
  //   {
  //     number: 2,
  //     title: "Sie können vorhande Produktblätter, Compliance Vorschriften,",
  //     description:
  //       "Zudem können Sie dort auch Ihre Prozessbeschreibungen und Stichpunkte eingeben. ",
  //     videoSrc: "./flexvid/vid.mp4", // Video source for step 2
  //   },
  //   {
  //     number: 3,
  //     title: "Weitere Einstellungen konfigurieren",
  //     description:
  //       "Wählen Sie Ihre bevorzugten Audio Einstellungen, Exportformate, Features sowie Ihr bevorzugtes Template aus",
  //     videoSrc: "./flexvid/vid.mp4", // Video source for step 3
  //   },
  //   {
  //     number: 4,
  //     title: "Video generieren",
  //     description:
  //       "Das Video wird im Nachgang von unserer KI-Software automatisiert generiert. Nach Fertigstellungen bekommen Sie einen Download Link per Mail zugesendet",
  //     videoSrc: "./flexvid/vid.mp4", // Video source for step 4
  //   },
  //   {
  //     number: 5,
  //     title: "Video up-to-date halten",
  //     description:
  //       "Sie können im Nachgang per Editor einfach das E-Learning aktualiseren. Ändern Sie lediglich entsprechende Textpassagen ",
  //     videoSrc: "./flexvid/vid.mp4", // Video source for step 5
  //   },
  // ];

  const handleStepClick = (index) => {
    setSelectedStep(index);
  };

  return (
    <div className="w-full  mt-[90px]  ">
      <div className="webapp max-w-[2000px] m-auto  max-md:px-0">
        <h3 className="px-[80px] max-laptop:px-[60px] max-md:px-[30px] text-sm font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
          {" "}
          {t("Webapp.TopHeading")}
        </h3>
        <h1 className="px-[80px] max-laptop:px-[60px] max-md:px-[30px] text-lg font-[Outfit-Bold] max-md:text-sm max-md:text-center max-laptop:text-lf ">
          {" "}
          {t("Webapp.SubHeading")}
        </h1>
        <div className="w-full bg-light100 mt-[50px] px-[80px] max-laptop:px-[60px] max-md:px-[30px]">
          <div className="webapp max-w-[2000px] m-auto px-[60px] max-md:px-0">
            <div className="greyblock mt-[20px] w-full flex max-tab:flex-col max-tab:items-center max-md:py-6 gap-[20px] py-[40px] max-md:p-0 rounded-[10px]">
              <div className="left w-[40%] max-tab:w-full flex justify-start items-start gap-2">
                <div className="iconbox flex flex-col justify-start items-center w-[80px] gap-2 -ml-[38px] max-md:ml-2">
                  {steps.map((step, index) => (
                    <React.Fragment key={index}>
                      <div
                        className={`ico w-[79px] h-[79px] max-laptop:w-[60px] max-laptop:h-[60px] rounded-[50%] bg-${
                          index === selectedStep ? "primary" : step.color
                        } text-light400 flex items-center justify-center text-lg p-4 font-bold`}
                        onClick={() => handleStepClick(index)}
                        style={{ opacity: selectedStep === index ? 1 : 0.5 }}
                      >
                        <FaCheck />
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={`line w-[2px] ${
                            index === selectedStep
                              ? "h-[180px] max-md:h-[85px] max-laptop:h-[80px]"
                              : "h-[46px] max-laptop:h-[30px]"
                          } bg-${
                            index === selectedStep ? "primary" : step.color
                          }`}
                        ></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <div className="desc p-4 pt-0 flex items-start justify-start flex-col gap-14 max-md:gap-10 max-laptop:gap-[50px]">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="first"
                      onClick={() => handleStepClick(index)}
                      style={{ opacity: selectedStep === index ? 1 : 0.5 }}
                    >
                      <h3
                        className={`text-sm font-[Outfit-Bold] text-${step.color} max-md:text-mf max-laptop:text-mf`}
                      >
                        SCHRITT {index + 1}
                      </h3>
                      <h4
                        className={`text-sm font-[Outfit-Bold] max-md:text-mf max-laptop:text-mf max-laptop:leading-[25px]`}
                      >
                        {step.title}
                      </h4>
                      {selectedStep === index && (
                        <p className="text-sm font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5">
                          {step.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="right w-[55%] full flex flex-col items-end max-md:items-center">
                <div className="vid max-tab:hidden">
                  <video
                    className="w-[100%] h-[600px] max-laptop:h-[400px] object-cover rounded-[10px]"
                    src={steps[selectedStep].videoUrl}
                    muted
                    autoPlay
                    loop
                  ></video>
                </div>
                <div className="button ">
                  <button className="text-primary text-sm font-[Outfit-Bold] max-laptop:text-mf font-bold border-[2px] border-solid border-primary py-[10px] px-[15px] rounded-[10px] mt-6 max-md:text-[14px] whitespace-nowrap max-md:mx-auto">
                    {t("Schrit.CreateDemoVideo")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schrit;
