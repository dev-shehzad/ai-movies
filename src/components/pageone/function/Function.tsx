// Importing necessary dependencies
import { FaCheck } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

// Function component
const Function = () => {
  // Accessing translation function
  const { t } = useTranslation();

  // Rendering the Function component
  return (
    <div className="w-full px-[80px] max-tab:px-[40px] py-4 max-md:px-[30px]">
      <div className="container w-[95%] max-w-[2000px] m-auto flex max-tab:flex-col max-tab:justify-center max-tab:items-center">
        <div className="leftimg w-[50%] max-tab:w-full object-cover px-[15px]">
          <img className="object-cover" src="pageone/function/function2.png" alt="func" />
        </div>

        <div className="rightcont w-[50%] max-tab:w-full flex items-center max-tab:justify-center px-[15px] max-tab:py-10">
          <div className="flex flex-col gap-5">
            {/* Title for how it works */}
            <p className="text-sm font-bold font-[Outfit-Regular] text-primary max-md:text-center max-laptop:text-mf max-md:leading-[0]">
              {t('function.howItWorks')}
            </p>

            {/* Heading for quick, simple, effective */}
            <h1 className="text-left text-lg font-[Outfit-Bold] leading-[60px] max-laptop:text-lf max-md:text-sm max-md:leading-8 max-md:text-center max-laptop:font-[700] max-laptop:leading-10">
              {t('function.quickSimpleEffective')}
            </h1>

            {/* Description of the function */}
            <p className="text-left text-sm font-[Outfit-Regular] max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-justify">
              {t('function.description')}
            </p>

            {/* Tick items with checkmark icons */}
            <div className="tick flex flex-col max-md:flex-col justify-center max-tab:flex-wrap max-md:gap-5 text-sm text-greyb max-laptop:text-mf">
              <p className="flex items-center gap-4 whitespace-nowrap">
                <FaCheck className="text-primary font-[Outfit-Regular]" />
                {t('function.tick1')}
              </p>
              <p className="flex items-center gap-4 whitespace-nowrap font-[Outfit-Regular]">
                <FaCheck className="text-primary font-[Outfit-Regular]" />
                {t('function.tick2')}
              </p>
              <p className="flex items-center gap-4 whitespace-nowrap font-[Outfit-Regular]">
                <FaCheck className="text-primary" />
                {t('function.tick3')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the Function component
export default Function;
