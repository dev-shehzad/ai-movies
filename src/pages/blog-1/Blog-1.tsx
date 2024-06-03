import CustomButton from "../../components/CustomButton";
import { useTranslation } from "react-i18next";

// Blog 2 Component
export default function Home() {
  const { t } = useTranslation();

  return (
    <div className=" ">
      {/* Image Section */}
      <img className="w-[100%]  object-cover" src="/blog2/girl.png" alt="pic" />
      {/* Main Content Section */}
      <div className="max-w-[2000px] m-auto  px-[60px] max-tab:px-[40px] max-md:px-[28px]">
        <div className=" flex justify-center w-[100%]">
          <div className="w-[100%] flex flex-col justify-center my-[40px]">
            <div className="lg:text-sm text-xs font-[Outfit-Bold] text-primary">
              {t("cont1.title")}
            </div>
            <div className="xl:text-lg lg:text-md text-m2d text font-[Outfit-Bold]">
              {t("rewardSystem.heading")}
            </div>
          </div>
        </div>
        {/* Main Text Section */}
        <div className="w-[100%] flex justify-center">
          <div className="w-[100%] ">
            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100">
              {t("learningIntroduction.intro")}
            </p>
            <p className="lg:text-sm text-xs font-[Outfit-Bold] text-dark100 mt-[30px]">
              {t("Selbsmotivation")}
            </p>
            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("learningIntro.cont")}
            </p>
            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text2")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text3")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Bold] text-dark100 mt-[30px]">
              {t("Zeitmanacement:")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text4")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text5")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text6")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text7")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text8")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text9")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Bold] text-dark100 mt-[30px]">
              {t("Aktives Lernen:")}
            </p>

            <p className=" lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text10")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text11")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text12")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text13")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text14")}
            </p>

            <p className=" lg:text-sm text-xs font-[Outfit-Bold] text-dark100 mt-[30px]">
              {t("rewardSystem.p4")}
            </p>

            <p className=" lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text15")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text16")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text17")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text18")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text19")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text20")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Bold] text-dark100 mt-[30px]">
              {t("rewardSystem.Selbstdisziplin")}
            </p>

            <p className=" lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text21")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text22")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text23")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text24")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text25")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text26")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Regular] text-dark100 mb-[30px]">
              {t("rewardSystem.text27")}
            </p>

            <p className="lg:text-sm text-xs font-[Outfit-Bold] text-dark100 my-[30px]">
              {t("rewardSystem.text28")}
            </p>

            <CustomButton
              type="filledBlue"
              title="Demovideo kostenlos erstellen"
            />
          </div>
        </div>
      </div>
      <div className=" bg-light200  mt-[30px] flex justify-center">
        <div className="   my-8 max-w-[2000px] w-full mx-auto px-[60px] max-tab:px-[40px] max-md:px-[28px]">
          <div className="  ">
            {" "}
            <input
              className=" py-[12px] border-none rounded-lg pl-5 font-normal lg:text-sm text-xs font-[Outfit-Bold] text-dark100 placeholder:text-dark100"
              placeholder="E-mail-Adresse*"
              type=" placeholder"
            />
          </div>
          <p className=" lg:text-sm text-xs font-[Outfit-Regular] text-light400 my-[20px]">
            {t("rewardSystem.text29")}
          </p>
          <button className=" bg-light400 rounded-lg h-[50px] lg:text-sm text-xs font-[Outfit-Bold] text-primary flex flex-row-reverse items-center px-[20px] font-bold my-3">
            {t("Abonnieren")}
            <img className="h-[25px] w-[25px]" src="blog2/right.svg" alt="" />
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
