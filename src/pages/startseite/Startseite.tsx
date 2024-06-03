// Importing components for Startseite (Homepage)

// Top section of the homepage
import Flextop from "../../components/pageone/flextop/Flextop";

// Image slider component
import ImageSlider from "../../components/slider/slider";

// Functionality section of the homepage
import Function from "../../components/pageone/function/Function";

// Step-by-step guide section of the homepage
import Schrit from "../../components/pageone/schrit/Schrit";

// Showcase section of the homepage
import Wecase from "../../components/pageone/wecase/Wecase";

// Industries section of the homepage
import Industrien from "../../components/pageone/industrien/Industrien";

// Benefits section of the homepage
import Benifits from "../../components/pageone/benifits/Benifits";

// Data privacy section of the homepage
import Dataprivacy from "../../components/pageone/dataprivacy/Dataprivacy";

// Feature section of the homepage
import Feature from "../../components/pageone/feature/Feature";

// Case study section of the homepage
import Casestudy from "../../components/pageone/case/Case";

// Press section of the homepage
import Press from "../../components/pageone/press/Press";

// Supporter section of the homepage
import Supporter from "../../components/pageone/supporter/Supporter";

// Call to action section of the homepage
import Actnow from "../../components/pagetwo/actnow/Actnow";

// Translation hook from i18next
import { useTranslation } from "react-i18next";

// Homepage component
const Startseite = () => {
  // Translation hook
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="max-w-[2000px] m-auto "></div>

      {/* Top section of the homepage */}
      <Flextop />

      <div className="w-full m-auto bg-light100 py-14 flex flex-col gap-6 px-[80px] max-tab:px-[40px] max-md:px-[30px]">
        {/* Introduction paragraph */}
        <p className="text-center font-[Outfit-Regular] text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf text-greyb">
          {t("startseite.intro")}
        </p>

        {/* Image slider component */}
        <ImageSlider />

        {/* Tick points section */}
        <div className="tick flex font-[Outfit-Regular] max-md:flex-col justify-center max-tab:flex-wrap gap-10 max-md:gap-5 text-sm text-greyb max-laptop:text-mf">
          <p>{t("startseite.tick1")}</p>
          <p>{t("startseite.tick2")}</p>
          <p>{t("startseite.tick3")}</p>
        </div>
      </div>

      {/* Function, Step-by-step guide, Showcase, Industries, Benefits, Data privacy, Feature, Case study, Press, Supporter, Call to action sections */}
      <div>
        <Function />
        <Schrit />
        <Wecase />
        <Industrien />
        <Benifits />
        <Dataprivacy />
        <Feature />
        <Casestudy />
        <Press />
        <Supporter />
        <Actnow />
      </div>
    </div>
  );
};

export default Startseite;
