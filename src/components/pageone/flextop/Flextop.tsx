// Importing translation hook from i18next
import { useTranslation } from "react-i18next";
import  { useRef, useState, useEffect } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
// Flextop component
const Flextop = () => {
  // Translation hook
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = () => {
      // Show controls on mouse move
      setShowControls(true);

      // Clear previous timeout
      clearTimeout(timeoutId);

      // Set a timeout to hide controls after a certain time
      timeoutId = setTimeout(() => {
        setShowControls(false);
      }, 1000);
    };

    // Attach event listener to the video container
    const videoContainer = document.querySelector(".video-container");
    videoContainer.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove event listener
    return () => {
      videoContainer.removeEventListener("mousemove", handleMouseMove);
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

  return (
    <div>
      <div className="w-full m-auto">
        {/* Top section with background image */}
        <div className="bg-[url('/bg.png')] bg-cover w-[100%] lg:flex-row flex flex-col items-center justify-center py-[80px] max-md:py-[30px] px-[80px] max-tab:px-[40px] max-laptop:px-[80px] max-md:px-[30px] gap-[4%]">
          {/* Container for content with max-width */}
          <div className="max-w-[2000px] w-full mx-auto flex gap-[60px] justify-between items-center px-[40px] max-lg:p-[40px] max-tab:flex-col max-md:p-[0px]">
            {/* Left content section */}
            <div className="w-full text-light400 flex flex-col gap-6">
              {/* Heading 1 */}
              <h3 className="text-sm font-[Outfit-Regular] max-laptop:text-mf max-md:text-center">
                {t("flextop.heading1")}
              </h3>
              {/* Heading 2 */}
              <h1 className="font-[Outfit-Bold] text-left text-lg  leading-[60px] max-laptop:text-lf max-md:text-sm max-md:leading-8 max-md:text-center max-laptop:font-[700] max-laptop:leading-10">
                {t("flextop.heading2")}
              </h1>
              {/* Paragraph */}
              <p className="font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                {t("flextop.paragraph")}
              </p>
              {/* Buttons */}
              <div className="btn flex gap-[20px] max-md:flex-col">
                <button className="font-[Outfit-Regular] text-primary text-sm font-bold bg-light400 px-4 py-3 rounded-[12px] whitespace-nowrap max-laptop:text-mf">
                  {t("flextop.button1")}
                </button>
                <button className="font-[Outfit-Regular] text-light400 text-sm bg-transperent px-4 py-3 border border-white rounded-[12px] whitespace-nowrap max-laptop:text-mf">
                  {t("flextop.button2")}
                </button>
              </div>
            </div>
            {/* Right content section with  video */}
            <div className="w-full lg:flex relative video-container">
              <video
                ref={videoRef}
                autoPlay
                muted
                className="object-cover  m-auto"
              >
                {/* Video source */}
                <source
                  className="w-full h-full object-cover"
                  src="./flexvid/vid.mp4"
                  type="video/mp4"
                />
              </video>
              {/* Play/Pause button */}
            {showControls && (
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer "
                onClick={handlePlayPause}
              >
                {isPlaying ? (
                  <FaPlayCircle
                    color="#fff"
                    className=" text-[100px] max-tab:text-[50px] bg-white  rounded-[50%] bg-opacity-[0.7] opacity-[0.7]"
                  />
                  ) : (
                    <FaPauseCircle
                      color="#fff"
                      className="bg-white text-[100px] max-tab:text-[50px]  rounded-[50%] bg-opacity-[0.7] opacity-[0.7]"
                    />
                    )}
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flextop;
