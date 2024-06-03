import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";

const Flexvid = () => {
  // Access translation function
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
      }, 2000);
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
    <div className="w-full m-auto">
      {/* Video section with background image */}
      <div className="bg-[url('./flexvid/bg.png')] bg-cover w-[100%] lg:flex-row flex flex-col items-center justify-center py-[80px] max-md:py-[30px] px-[80px] max-laptop:px-0 gap-[4%]">
        {/* Content container */}
        <div className="max-w-[2000px] w-full mx-auto flex flex-row-reverse gap-[60px] justify-between items-center px-[40px] max-lg:p-[40px] max-md:p-[25px]">
          {/* Text content */}
          <div className="w-full text-light400 flex flex-col">
            {/* Headline */}
            <h1 className="text-left text-lg font-[Outfit-Bold] leading-[60px] max-md:text-sm max-md:leading-8 max-md:text-center">
              {t("Flexvid.HEADLINE")}
            </h1>
            {/* Description */}
            <p className="text-left text-sm max-laptop:text-mf font-[Outfit-Regular] max-laptop:w-[436px] max-md:w-auto max-md:text-center max-md:text-mf mt-[8px]">
              {t("Flexvid.DESCRIPTION")}
            </p>
          </div>
          {/* Video (hidden on smaller screens) */}
          <div className="w-full lg:flex hidden relative video-container">
            <video
              ref={videoRef}
              className="object-cover m-auto rounded-[10px]"
              autoPlay
              muted
            >
              {/* Video source */}
              <source
                className="w-full h-full"
                src="./flexvid/vid.mp4"
                type="video/mp4"
              />
            </video>
            {/* Play/Pause button */}
            {showControls && (
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                onClick={handlePlayPause}
              >
                {isPlaying ? (
                  <FaPauseCircle
                    size={100}
                    color="#fff"
                    className="bg-white rounded-[50%] bg-opacity-[0.7] opacity-[0.7]"
                  />
                ) : (
                  <FaPlayCircle
                    size={100}
                    color="#fff"
                    className="bg-white rounded-[50%] bg-opacity-[0.7] opacity-[0.7]"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flexvid;
