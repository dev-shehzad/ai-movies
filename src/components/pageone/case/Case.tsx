// Case.tsx

import { wrap } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";

// Case component
const Case: React.FC = () => {
  // Translation hook
  const { t } = useTranslation();

  // Data for case study boxes
  const box = [
    {
      id: 1,
      logo: "/pageone/casestudy/1.png",
      name: `${t("Case.Box1.Name")}`,
      des: `${t("Case.Box1.Des")}`,
      userpic: "/pageone/casestudy/man1.png",
      username: `${t("Case.Box1.Username")}`,
      userinfo: `${t("Case.Box1.Userinfo")}`,
    },
    {
      id: 2,
      logo: "/pageone/casestudy/2.png",
      name: `${t("Case.Box2.Name")}`,
      des: `${t("Case.Box2.Des")}`,
      userpic: "/pageone/casestudy/man2.png",
      username: `${t("Case.Box2.Username")}`,
      userinfo: `${t("Case.Box2.Userinfo")}`,
      userdone: `${t("Case.Box2.userdone")}`,
      done: `${t("Case.Box2.done")}`,
    },
    {
      id: 3,
      logo: "/pageone/casestudy/3.png",
      name: `${t("Case.Box3.Name")}`,
      des: `${t("Case.Box3.Des")}`,
      userpic: "/pageone/casestudy/man3.png",
      username: `${t("Case.Box3.Username")}`,
      userinfo: `${t("Case.Box3.Userinfo")}`,
    },
  ];

  // Rendering the Case component
  return (
    <div className="w-[100%] mt-[90px] px-[80px] py-[80px] max-laptop:px-[60px] max-md:px-[30px] border-t border-solid border-black border-opacity-[0.2]">
      <div className="max-w-[2000px] mx-auto">
        {/* Case Title */}
        <h3 className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
          {t("Case.TITLE")}
        </h3>

        {/* Case Subtitle */}
        <h1 className="text-lg font-[Outfit-Bold]  max-md:text-sm max-md:text-center max-laptop:text-lf ">
          {t("Case.SUBTITLE")}
        </h1>

        {/* Case Study Boxes */}
        <div className="w-[100%]  flex   justify-between   max-tab:flex-col lg:gap-8 gap-6 items-stretch mt-[60px]">
          {box.map((item) => (
            <div
              key={item.id}
              className="bg-light100  py-7 flex flex-col w-[32%] max-tab:w-full rounded-[10px]  shadow-lg lg:p-4 p-2"
            >
              {/* Logo */}
              <div className="flex m-6 items-center  object-cover ">
                <img src={item.logo} alt="" width="300px" />
              </div>

              {/* Border Line */}
              <div className=" w-[90%] border-b-[1px] ml-2 border-b-gray-300 mb-[30px]"></div>

              {/* Name */}
              <div className="text-sm  text-primary font-bold font-[Outfit-Bold] max-md:text-left max-laptop:text-mf">
                {item.name}
              </div>

              {/* Description */}
              <div className="text-sm max-md:text-mf leading-7 font-[Outfit-Regular] max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start">
                {item.des}
              </div>

              {/* User Info */}
              <div className="user py-4 flex   gap-[20px] mt-auto">
                <img className="w-[80px] h-[80px]" src={item.userpic} alt="" />

                {/* User Details */}
                <div className="flex  flex-col items-start justify-center">
                  {/* User Name */}
                  <h3 className="text-sm  text-primary font-[Outfit-Bold] max-md:text-left max-laptop:text-mf">
                    {item.username}
                  </h3>

                  {/* User Info */}
                  <p className="text-sm break-words whitespace-pre-wrap max-md:text-mf font-[Outfit-Regular] leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start">
                    <div className="flex flex-wrap gap-0">
                     <p>{item.userdone}</p> 
                     <p className=""> {item.done}</p>
                    </div>
                    {item.userinfo}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Case;
