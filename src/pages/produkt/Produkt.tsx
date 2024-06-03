// Produkt.tsx
import { useTranslation } from "react-i18next";
import Flexvid from "../../components/pagetwo/flexvid/Flexvid";
import Features from "../../components/pagetwo/features/Features";
import Flexbenifit from "../../components/pagetwo/flexbenifit/Flexbenifit";
import Numcircles from "../../components/pagetwo/numcircles/Numcircles";
import Actnow from "../../components/pagetwo/actnow/Actnow";
import Schrit from "../../components/pageone/schrit/Schrit";

// Produkt component
const Produkt = () => {
  const { t } = useTranslation();

  // Rendering the Produkt component
  return (
    <div className="w-full">
      {/* Flexvid component */}
      <Flexvid />

      {/* Webapp Headings */}
      <h3 className="px-[140px] max-laptop:px-[60px] max-md:px-[30px] text-sm font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf mt-[60px]">
        {t("Webapp.TopHeading")}
      </h3>
      <h1 className="px-[140px] max-laptop:px-[60px] max-md:px-[30px] text-lg font-[Outfit-Bold] max-md:text-sm max-md:text-center max-laptop:text-lf ">
        {t("Webapp.SubHeading")}
      </h1>

      {/* Schrit component */}
      <Schrit />

      {/* Features component */}
      <Features />

      {/* Flexbenifit component */}
      <Flexbenifit />

      {/* Numcircles component */}
      <Numcircles />

      {/* Actnow component */}
      <Actnow />
    </div>
  );
};

export default Produkt;
