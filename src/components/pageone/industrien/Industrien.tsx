import { useTranslation } from 'react-i18next';
import { FaArrowRightLong } from 'react-icons/fa6';

// Industrien component
const Industrien = () => {
  // Translation hook
  const { t } = useTranslation();

  // Data for industries
  const industriesData = [
    {
      id: 1,
      title: `${t('Industrien.Maschinenbau.Title')}`,
      imageSrc: 'pageone/industrien/1.png',
      description: `${t('Industrien.Maschinenbau.Description')}`,
    },
    {
      id: 2,
      title: `${t('Industrien.ÖffentlicheVerwaltung.Title')}`,
      imageSrc: 'pageone/industrien/2.png',
      description: `${t('Industrien.ÖffentlicheVerwaltung.Description')}`,
    },
    {
      id: 3,
      title: `${t('Industrien.FinanceInsurance.Title')}`,
      imageSrc: 'pageone/industrien/3.png',
      description: `${t('Industrien.FinanceInsurance.Description')}`,
    },
    {
      id: 4,
      title: `${t('Industrien.Unternehmensberatungen.Title')}`,
      imageSrc: 'pageone/industrien/4.png',
      description: `${t('Industrien.Unternehmensberatungen.Description')}`,
    },
  ];

  // Rendering the Industrien component
  return (
    <div className="w-full bg-light100 py-10 px-[80px] max-tab:px-[40px] max-md:px-[30px]">
      <div className="max-w-[2000px] m-auto">
        {/* Title */}
        <h1 className="text-sm  font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
          {t('Industrien.INDUSTRIEN_TITLE')}
        </h1>

        {/* Industries grid */}
        <div className="flexitems mt-8   grid grid-cols-4 max-md:grid-cols-1 max-tab:grid-cols-2 gap-[50px] items-start max-tab:mt-[20px] max-md:flex-col max-md:gap-[40px]">
          {industriesData.map((industry, index) => (
            // Single industry item
            <div
              key={industry.id}
              className="item w-[100%] max-md:w-full max-md:items-center flex flex-col gap-[30px]"
            >
              {/* Industry image */}
              <img
                className="w-[50%] max-md:w-[80%]"
                src={industry.imageSrc}
                alt={industry.title}
              />

              {/* Industry details */}
              <div className="flex flex-col gap-2">
                {/* Industry title */}
                <h1 className="text-sm  font-[Outfit-Bold] max-md:text-left max-laptop:text-mf">
                  {industry.title}
                </h1>

                {/* Industry description */}
                <p className="text-sm font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start">
                  {industry.description}
                </p>

                {/* Case study button (visible for the first two items) */}
                {index < 2 && (
                  <button className="text-sm text-primary  font-[Outfit-Bold] max-md:text-left max-laptop:text-mf mt-[30px] whitespace-nowrap flex items-center justify-start gap-2 py-[15px] rounded-[10px] max-md:text-[14px] ">
                    Case Study Ansehen <FaArrowRightLong />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industrien;
