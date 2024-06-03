import { FaRegCircleCheck } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

// Benefits component
const Benefits = () => {
  // Translation hook
  const { t } = useTranslation();

  // Data for benefits
  const benefitsData = [
    {
      id: 1,
      title: `${t("Benefits.Benefit1.Title")}`,
      description: `${t("Benefits.Benefit1.Description")}`,
    },
    {
      id: 2,
      title: `${t("Benefits.Benefit2.Title")}`,
      description: `${t("Benefits.Benefit2.Description")}`,
    },
    {
      id: 3,
      title: `${t("Benefits.Benefit3.Title")}`,
      description: `${t("Benefits.Benefit3.Description")}`,
    },
    {
      id: 4,
      title: `${t("Benefits.Benefit4.Title")}`,
      description: `${t("Benefits.Benefit4.Description")}`,
    },
    {
      id: 5,
      title: `${t("Benefits.Benefit5.Title")}`,
      description: `${t("Benefits.Benefit5.Description")}`,
    },
    {
      id: 6,
      title: `${t("Benefits.Benefit6.Title")}`,
      description: `${t("Benefits.Benefit6.Description")}`,
    },
  ];

  // Rendering the Benefits component
  return (
    <div className="w-full bg-light400 py-10 px-[80px] max-tab:px-[40px] max-md:px-[15px]">
      <div className="max-w-[2000px] mx-auto">
        {/* Subtitle */}
        <h3 className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
          {t("Benefits.BENEFITS_SUBTITLE")}
        </h3>

        {/* Title */}
        <h1 className="text-lg font-[Outfit-Bold]  max-md:text-sm max-md:text-center max-laptop:text-lf ">
          {t("Benefits.BENEFITS_TITLE")}
        </h1>

        {/* Benefits grid */}
        <div className="p-[40px] max-tab:p-[20px] max-md:p-[20px] shadow-lg rounded-[10px] border-[2px] border-solid border-light300 border-opacity-[0.1] mt-[40px]">
          <div className="griditems w-full grid grid-cols-3 max-tab:grid-cols-2 max-md:grid-cols-1 gap-[80px] mt-[30px]">
            {benefitsData.map((benefit, index) => (
              // Single benefit item
              <div key={index}>
                {/* Benefit title with check icon */}
                <h1 className="text-sm  font-bold font-[Outfit-Bold] max-md:text-left max-laptop:text-mf flex items-center gap-2">
                  <FaRegCircleCheck className="text-primary text-sm" />
                  {benefit.title}
                </h1>

                {/* Benefit description */}
                <p className="text-sm max-md:text-mf font-[Outfit-Regular] leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Button to create a free demo video */}
          <div className="max-md:flex items-center justify-center">
            <button className="text-secondary bg-primary text-sm font-[Outfit-Bold]  mt-[30px] px-4 py-3 rounded-[12px] whitespace-nowrap max-laptop:text-mf max-md:mx-auto">
              Demovideo kostenlos erstellen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
