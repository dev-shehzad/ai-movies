import React from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

interface SlideInItemProps {
  delay: number;
  direction: "left" | "right"; // Assuming direction can only be 'left' or 'right'
  children: React.ReactNode;
}

const SlideInItem: React.FC<SlideInItemProps> = ({
  delay,
  direction,
  children,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const wrapperStyle = {
    transitionDelay: `${delay}ms`,
  };

  const transformClass = `transform transition-transform ease-out duration-1000 ${
    inView
      ? "translate-x-0 opacity-100"
      : direction === "left"
      ? "-translate-x-full opacity-0"
      : "translate-x-full opacity-0"
  }`;

  return (
    <div ref={ref} style={wrapperStyle} className={transformClass}>
      {children}
    </div>
  );
};


const Topstory = () => {
  const { t } = useTranslation();
  const topStories = [
    { title: t("about.topstory.1"), description: t("about.topstory.1des") },
    { title: t("about.topstory.2"), description: t("about.topstory.2des") },
    // Add more top stories as needed
  ];
  return (
    <div className="relative w-full m-auto">
      <div className="overflow-hidden bg-light100 w-full lg:flex-row flex flex-col  items-center justify-center py-[80px] max-md:py-[30px] px-[80px] max-tab:px-[40px] max-laptop:px-[80px] max-md:px-[30px] gap-[4%] relative">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/bgin.png"
            alt=""
            className="w-[75%] object-cover absolute -top-[220px] -left-[390px]"
          />
        </div>

        {/* Content */}
        <div className="max-w-[2000px] w-full mx-auto flex gap-[20px] max-tab:justify-center max-tab:gap-[60px] max-md:gap-[0px] max-tab:flex-col  items-start px-[40px] max-lg:p-[40px] max-md:p-[10px] relative z-20">
          <div className="w-[50%] max-tab:w-full flex-col  ">
            <h3 className="text-sm text-primary font-[Outfit-Bold] max-laptop:text-mf max-md:text-center">
              {t("about.topstory.title")}
            </h3>
            <h1 className="font-[Outfit-Bold] text-left text-lg   leading-[60px] max-laptop:text-lf max-md:text-sm max-md:leading-8 max-md:text-center max-laptop:font-[700] max-laptop:leading-10">
              {t("about.topstory.heading")}
            </h1>
            <p className="font-[Outfit-Regular]  text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
              {t("about.topstory.desc")}
            </p>
          </div>

          <div className="two flex w-[70%] max-tab:w-full max-md:p-8 ">
            <div className="w-full   ">
              <div className="imgline max-tab:-ml-[40px] flex flex-col gap-3 max-md:gap-[30px] items-center justify-center">
                <div className="flex h-fit gap-[40px] max-md:flex-col">
                  <div className="circle max-md:hidden max-md:w-[50px] max-md:h-[50px] max-laptop:w-[70px] max-laptop:h-[70px] w-[100px] h-[100px]  bg-primary rounded-[50%]"></div>
                </div>
                <div className="flex gap-[70px] max-md:flex-col max-md:gap-[30px] max-md:break-words ">
                  <div className="first w-[300px] max-md:w-auto opacity-0 max-md:hidden">
                    <h3 className="text-sm font-[Outfit-Bold] text-primary max-md:text-mf max-laptop:text-mf">
                      {t("about.topstory.1")}
                    </h3>
                    <p className="text-sm  font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5">
                      {t("about.topstory.1des")}
                    </p>
                  </div>
                  <div className="greyline max-md:hidden max-laptop:w-[10px] w-[20px] h-auto  bg-light300 opacity-[0.3]"></div>
                  <SlideInItem direction="right" delay={0}>
                    <div className="first w-[300px] max-md:w-auto -mt-[120px] max-md:mt-auto max-laptop:-mt-[80px]">
                      <h3 className="text-sm font-[Outfit-Bold] text-primary max-md:text-mf max-laptop:text-mf">
                        {t("about.topstory.1")}
                      </h3>
                      <p className="text-sm  font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5">
                        {t("about.topstory.1des")}
                      </p>
                    </div>
                  </SlideInItem>
                </div>

                <div className="circle max-md:hidden max-md:w-[50px] max-md:h-[50px] max-laptop:w-[70px] max-laptop:h-[70px] w-[100px] h-[100px] bg-primary rounded-[50%]"></div>

                <div className="flex gap-[70px] max-md:flex-col max-md:gap-[30px] ">
                  <SlideInItem direction="left" delay={0}>
                    <div className="first w-[300px] max-md:w-auto text-right max-md:text-start -mt-[120px] max-md:mt-auto max-laptop:-mt-[80px]">
                      <h3 className="text-sm font-[Outfit-Bold] text-primary max-md:text-mf max-laptop:text-mf">
                        {t("about.topstory.2")}
                      </h3>
                      <p className="text-sm  font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5">
                        {t("about.topstory.2des")}
                      </p>
                    </div>
                  </SlideInItem>
                  <div className="greyline max-md:hidden max-laptop:w-[10px] w-[20px] h-auto bg-light300 opacity-[0.3]"></div>
                  <div className="first w-[300px] max-md:w-auto  opacity-0 max-md:hidden">
                    <h3 className="text-sm font-[Outfit-Bold] text-primary max-md:text-mf max-laptop:text-mf">
                      {t("about.topstory.1")}
                    </h3>
                    <p className="text-sm  font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5">
                      {t("about.topstory.1des")}
                    </p>
                  </div>
                </div>

                <div className="circle max-md:hidden max-md:w-[50px] max-md:h-[50px] max-laptop:w-[70px] max-laptop:h-[70px] w-[100px] h-[100px] bg-primary rounded-[50%]"></div>

                <div className="flex gap-[70px] max-md:flex-col max-md:gap-[30px] ">
                  <div className="first w-[300px] max-md:w-auto  opacity-0 max-md:hidden">
                    <h3 className="text-sm font-[Outfit-Bold] text-primary max-md:text-mf max-laptop:text-mf">
                      {t("about.topstory.2")}
                    </h3>
                    <p className="text-sm  font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5">
                      {t("about.topstory.1des")}
                    </p>
                  </div>
                  <div className="greyline max-md:hidden max-laptop:w-[10px] w-[20px] h-auto bg-light300 opacity-[0.3]"></div>

                  <SlideInItem direction="right" delay={0}>
                    <div className="first w-[300px] max-md:w-auto -mt-[120px] max-md:mt-auto max-laptop:-mt-[80px] ">
                      <h3 className="text-sm font-[Outfit-Bold] text-primary max-md:text-mf max-laptop:text-mf">
                        {t("about.topstory.3")}
                      </h3>
                      <p className="text-sm  font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5">
                        {t("about.topstory.3des")}
                      </p>
                    </div>
                  </SlideInItem>
                </div>

                <div className="circle max-md:hidden max-md:w-[50px] max-md:h-[50px] max-laptop:w-[70px] max-laptop:h-[70px] w-[100px] h-[100px] bg-primary rounded-[50%]"></div>

                <div className="flex text-end max-md:text-start gap-[70px] max-md:flex-col max-md:gap-[30px] ">
                  <SlideInItem direction="left" delay={0}>
                    <div className="first w-[300px] max-md:w-auto -mt-[120px] max-md:mt-auto max-laptop:-mt-[80px] ">
                      <h3 className="text-sm font-[Outfit-Bold] text-primary max-md:text-mf max-laptop:text-mf">
                        {t("about.topstory.4")}
                      </h3>
                      <p className="text-sm  font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5">
                        {t("about.topstory.4des")}
                      </p>
                    </div>
                  </SlideInItem>
                  <div className="greyline max-md:hidden max-laptop:w-[10px] w-[20px] h-auto bg-light300 opacity-[0.3]"></div>
                  <div className="first w-[300px] max-md:w-auto  opacity-0 max-md:hidden">
                    <h3 className="text-sm font-[Outfit-Bold] text-primary max-md:text-mf max-laptop:text-mf">
                      {t("about.topstory.4")}
                    </h3>
                    <p className="text-sm  font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5">
                      {t("about.topstory.4des")}
                    </p>
                  </div>
                </div>

                <div className="circle max-md:hidden max-md:w-[50px] max-md:h-[50px] max-laptop:w-[70px] max-laptop:h-[70px] w-[100px] h-[100px] bg-primary rounded-[50%]"></div>

                <div className="flex gap-[70px] max-md:flex-col max-md:gap-[30px] ">
                  <div className="first w-[300px] max-md:w-auto  opacity-0 max-md:hidden">
                    <h3 className="text-sm font-[Outfit-Bold] text-primary max-md:text-mf max-laptop:text-mf">
                      {t("about.topstory.4")}
                    </h3>
                    <p className="text-sm  font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5">
                      {t("about.topstory.4des")}
                    </p>
                  </div>
                  <div className="greyline max-md:hidden max-laptop:w-[10px] w-[20px] h-auto bg-light300 opacity-[0.3]"></div>
                  <SlideInItem direction="right" delay={0}>
                    {" "}
                    <div className="first w-[300px] max-md:w-auto -mt-[120px] max-md:mt-auto max-laptop:-mt-[80px] ">
                      <h3 className="text-sm font-[Outfit-Bold] text-primary max-md:text-mf max-laptop:text-mf">
                        {t("about.topstory.5")}
                      </h3>
                      <p className="text-sm  font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5">
                        {t("about.topstory.5des")}
                      </p>
                    </div>
                  </SlideInItem>
                </div>

                <div className="circle max-md:hidden max-md:w-[50px] max-md:h-[50px] max-laptop:w-[70px] max-laptop:h-[70px] w-[100px] h-[100px] bg-primary rounded-[50%]"></div>

                <div className="flex gap-[70px] max-md:flex-col max-md:gap-[30px] ">
                  <SlideInItem direction="left" delay={0}>
                    <div className="first text-end max-md:text-start w-[300px] max-md:w-auto -mt-[120px] max-md:mt-auto max-laptop:-mt-[80px] ">
                      <h3 className="text-sm font-[Outfit-Bold] text-primary max-md:text-mf max-laptop:text-mf">
                        {t("about.topstory.7")}
                      </h3>
                      <p className="text-sm  font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5">
                        {t("about.topstory.7des")}
                      </p>
                    </div>
                  </SlideInItem>
                  <div className="greyline max-md:hidden max-laptop:w-[10px] w-[20px] h-auto bg-light300 opacity-[0.3]"></div>
                  <div className="first w-[300px] max-md:w-auto  opacity-0 max-md:hidden">
                    <h3 className="text-sm font-[Outfit-Bold] text-primary max-md:text-mf max-laptop:text-mf">
                      {t("about.topstory.7")}
                    </h3>
                    <p className="text-sm  font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5">
                      {t("about.topstory.7des")}
                    </p>
                  </div>
                </div>

                <div className="circle max-md:hidden max-md:w-[50px] max-md:h-[50px] max-laptop:w-[70px] max-laptop:h-[70px] w-[100px] h-[100px] bg-primary rounded-[50%]"></div>

                <div className="flex gap-[70px] max-md:flex-col max-md:gap-[30px] ">
                  <div className="first w-[300px] max-md:w-auto  opacity-0 max-md:hidden">
                    <h3 className="text-sm font-[Outfit-Bold] text-primary max-md:text-mf max-laptop:text-mf">
                      {t("about.topstory.8")}
                    </h3>
                    <p className="text-sm  font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5">
                      {t("about.topstory.8des")}
                    </p>
                  </div>
                  <div className="greyline max-md:hidden max-laptop:w-[10px] w-[20px] h-auto bg-light300 opacity-[0.3]"></div>
                  <SlideInItem direction="right" delay={0}>
                    <div className="first w-[300px] max-md:w-auto -mt-[120px] max-md:mt-auto max-laptop:-mt-[80px] ">
                      <h3 className="text-sm font-[Outfit-Bold] text-primary max-md:text-mf max-laptop:text-mf">
                        {t("about.topstory.8")}
                      </h3>
                      <p className="text-sm  font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5">
                        {t("about.topstory.8des")}
                      </p>
                    </div>
                  </SlideInItem>
                </div>

                <div className="circle max-md:hidden max-md:w-[50px] max-md:h-[50px] max-laptop:w-[70px] max-laptop:h-[70px] w-[100px] h-[100px] bg-primary rounded-[50%]"></div>

                <div className="flex gap-[70px] max-md:flex-col max-md:gap-[30px] ">
                  <SlideInItem direction="left" delay={0}>
                    <div className="first text-end max-md:text-start w-[300px] break-words text-wrap max-md:w-auto -mt-[120px] max-md:mt-auto max-laptop:-mt-[80px]">
                      <h3 className="text-sm font-[Outfit-Bold] text-primary max-md:text-mf max-laptop:text-mf">
                        {t("about.topstory.9")}
                      </h3>
                      <p className="font-[Outfit-Regular] text-end  text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf  max-md:text-start whitespace-normal   ">
                        {t("about.topstory.9des")}
                      </p>
                    </div>
                  </SlideInItem>
                  <div className="greyline max-md:hidden max-laptop:w-[10px] w-[20px] h-auto bg-light300 opacity-[0]"></div>
                  <div className="first w-[300px] max-md:w-auto  opacity-0 max-md:hidden">
                    <h3 className="text-sm font-[Outfit-Bold] text-primary max-md:text-mf max-laptop:text-mf">
                      {t("about.topstory.9")}
                    </h3>
                    <p className="text-sm   font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5">
                      {t("about.topstory.9des")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topstory;
