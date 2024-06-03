// Press.tsx

import { useTranslation } from 'react-i18next';

import Carousel from './Slidertwo';
import CustomButton from '../../CustomButton';

// Press component
const Press = () => {
  const { t } = useTranslation();

  // Rendering the Press component
  return (
    <div className="w-full bg-light100 py-14 px-[80px] max-tab:px-[40px] max-md:px-[30px]">
      <div className="max-w-[2000px] m-auto">
        {/* Press Title */}
        <h3 className="text-sm font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
          {t('Press.TITLE')}
        </h3>

        {/* Press Subtitle */}
        <h1 className="text-lg font-[Outfit-Bold] max-md:text-sm  max-md:text-center max-laptop:text-lf ">
          {t('Press.SUBTITLE')}
        </h1>

        {/* Carousel Component */}
        <div className="max-tab:px-[40px] max-md:px-0">
          <Carousel />
        </div>

        {/* More News Button */}
        <div className="flex justify-end mt-[30px]">
          <CustomButton type="filledBlue" title={t('Press.MORE_NEWS_BUTTON')} />
        </div>
      </div>
    </div>
  );
};

export default Press;
