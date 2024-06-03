import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
// Schrit component
const Schrit = () => {
  // Accessing translation function and managing active step state
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    let timeoutId;
    const videoContainer = videoRef.current;
  
    const handleMouseMove = () => {
      setShowControls(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setShowControls(false);
      }, 2000);
    };
  
    videoContainer.addEventListener("mousemove", handleMouseMove);
  
    // Add more event listeners as needed, for example:
    // videoContainer.addEventListener("play", () => setShowControls(true));
    // videoContainer.addEventListener("pause", () => setShowControls(true));
  
    return () => {
      videoContainer.removeEventListener("mousemove", handleMouseMove);
      // Remove other event listeners if added
    };
  }, []);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
    setIsPlaying(!isPlaying);

    // Show controls when play/pause button is clicked
    setShowControls(true);
  };

  // Array of steps with details
  const steps = [
    {
      schrit: "Schrit1",
      title: `${t("Schrit.Step1Title")}`,
      description: `${t("Schrit.Step1Description")}`,
      color: "primary",
      videoUrl: "./flexvid/vid.mp4",
    },
    {
      schrit: "Schrit2",
      title: `${t("Schrit.Step2Title")}`,
      description: `${t("Schrit.Step2Description")}`,
      color: "primary",
      videoUrl: "./flexvid/vid.mp4",
    },
    {
      schrit: "Schrit3",
      title: `${t("Schrit.Step3Title")}`,
      description: `${t("Schrit.Step3Description")}`,
      color: "primary",
      videoUrl: "./flexvid/vid.mp4",
    },
    {
      schrit: "Schrit4",
      title: `${t("Schrit.Step4Title")}`,
      description: `${t("Schrit.Step4Description")}`,
      color: "primary",
      videoUrl: "./flexvid/vid.mp4",
    },
    {
      schrit: "Schrit5",
      title: `${t("Schrit.Step5Title")}`,
      description: `${t("Schrit.Step5Description")}`,
      color: "primary",
      videoUrl: "./flexvid/vid.mp4",
    },
  ];

  // Function to handle step click
  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  // Rendering the Schrit component
  return (
    <div className="w-full  mt-[50px] px-[80px] max-laptop:px-[60px] max-md:px-[30px]">
      <div className="webapp pl-[80px]  max-tab:pl-[10px] max-md:pl-[30px] max-w-[2000px] m-auto px-[60px] max-tab:px-0 max-md:px-0">
        <div className="greyblock bg-light100  mt-[20px] w-full flex max-tab:flex-col max-tab:items-center max-md:py-6 gap-[20px] py-[40px] max-md:p-0 rounded-[10px]">
          <div className="left w-[40%] max-tab:w-full flex justify-start items-start gap-2">
            <div className="eft flex flex-col -ml-[34px] gap-[10px]  items-start">
              {/* Loop through each step */}
              {steps.map((step, index) => (
                <div
                  className={`one ${
                    index === activeStep ? "active" : "inactive"
                  } schritt${index + 1}`}
                  key={index}
                  onClick={() => handleStepClick(index)}
                >
                  <div className="box flex">
                    {/* Step icon and lines */}
                    <div className="flex flex-col gap-[10px] justify-start items-center">
                      <div
                        className={`icon bg-${
                          step.color
                        } w-[70px] h-[70px] rounded-[50%] flex items-center justify-center text-white ${
                          index === activeStep ? "opacity-100" : "opacity-50"
                        }`}
                      >
                        <FaCheck size={40} />
                      </div>
                      {index !== steps.length - 1 && (
                        <div
                          className={`line w-[2px] min-h-[50px] flex-1 bg-${
                            step.color
                          } ${
                            index === activeStep ? "opacity-100" : "opacity-50"
                          }`}
                        ></div>
                      )}
                    </div>
                    {/* Step title, description, and content */}
                    <div className="ml-7 max-md:ml-4 pb-[30px]">
                      <h3
                        className={`text-sm font-[Outfit-Bold] max-md:text-mf max-laptop:text-mf text-primary ${
                          index === activeStep ? "opacity-100" : "opacity-50"
                        }`}
                      >
                        {step.schrit}
                      </h3>
                      <h3
                        className={`text-sm font-[Outfit-Bold] max-md:text-mf max-laptop:text-mf ${
                          index === activeStep ? "opacity-100" : "opacity-50"
                        }`}
                      >
                        {step.title}
                      </h3>
                      {index === activeStep && (
                        <p
                          className={`text-sm font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 ${
                            index === activeStep ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Video and button on the right */}
          <div className="right w-[55%]  h-full flex flex-col items-end max-md:items-center">
            <div className=" relative max-tab:hidden video-container">
              <video
                className="w-[100%]   h-[600px] max-laptop:h-[400px] object-cover rounded-[10px] shadow-md"
                src={steps[activeStep].videoUrl}
                ref={videoRef}
                muted
                autoPlay
                loop
              ></video>
               {showControls && (
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                onClick={handlePlayPause}
              >
                {isPlaying ? (
                  <FaPauseCircle
                    color="#fff"
                    className="bg-white text-[100px] max-tab:text-[50px]  rounded-[50%] bg-opacity-[0.7] opacity-[0.7]"
                  />
                ) : (
                  <FaPlayCircle
                    color="#fff"
                    className=" text-[100px] max-tab:text-[50px] bg-white  rounded-[50%] bg-opacity-[0.7] opacity-[0.7]"
                  />
                )}
              </div>
            )}
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
  );
};

// Exporting the Schrit component
export default Schrit;
