// Actnow.tsx

import { useTranslation } from 'react-i18next';

// Actnow component
const Actnow = () => {
  const { t } = useTranslation();

  // Rendering the Actnow component
  return (
    <div className="w-full bg-light400 py-10 lg:pt-16 pt-16  my-[90px] px-[80px] max-tab:px-[40px] max-md:px-[30px] border-t-[2px] border-light300 border-opacity-[0.5]">
      <div className="max-w-[2000px] mx-auto">
        {/* Actnow Title */}
        <h3 className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
          {t('Actnow.TITLE')}
        </h3>

        {/* Actnow Subtitle */}
        <h1 className="text-lg font-[Outfit-Bold]  max-md:text-sm max-md:text-center max-laptop:text-lf max-md:leading-7">
          {t('Actnow.SUBTITLE')}
        </h1>

        {/* Actnow Description */}
        <p className="text-sm font-[Outfit-Regular]  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
          {t('Actnow.DESCRIPTION')}
        </p>

        {/* Actnow Buttons */}
        <div className="button flex gap-8">
          <button className="text-light400 bg-primary text-sm max-laptop:text-mf font-bold border-[2px] border-solid border-primary py-[10px] px-[15px] rounded-[10px] mt-6 max-md:text-[14px] whitespace-nowrap max-md:mx-auto">
            {t('Actnow.CONTACT_BUTTON')}
          </button>

          <button className="text-primary text-sm max-laptop:text-mf font-bold border-[2px] border-solid border-primary py-[10px] px-[15px] rounded-[10px] mt-6 max-md:text-[14px] whitespace-nowrap max-md:mx-auto">
            {t('Actnow.FAQ_BUTTON')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Actnow;
