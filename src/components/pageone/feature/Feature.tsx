// Feature.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';

// Interface for FeatureItem
interface FeatureItem {
  id: number;
  titleKey: string;
  imageSrc: string;
  descriptionKey: string;
}

// Feature component
const Feature: React.FC = () => {
  // Translation hook
  const { t } = useTranslation();

  // Features data
  const featuresData: FeatureItem[] = [
    {
      id: 1,
      titleKey: `${t('features.feature1Title')}`,
      imageSrc: '/pageone/feature/1.png',
      descriptionKey: `${t('features.feature1Description')}`,
    },
    {
      id: 2,
      titleKey: `${t('features.feature2Title')}`,
      imageSrc: '/pageone/feature/2.png',
      descriptionKey: `${t('features.feature2Description')}`,
    },
    {
      id: 3,
      titleKey: `${t('features.feature3Title')}`,
      imageSrc: '/pageone/feature/3.png',
      descriptionKey: `${t('features.feature3Description')}`,
    },
    {
      id: 4,
      titleKey: `${t('features.feature4Title')}`,
      imageSrc: '/pageone/feature/4.png',
      descriptionKey: `${t('features.feature4Description')}`,
    },
  ];

  // Rendering the Feature component
  return (
    <div className="w-full bg-light400 py-20 px-[80px] max-tab:px-[40px] max-md:px-[30px] ">
      <div style={{overflowWrap:'break-word'}} className="max-w-[2000px] m-auto ">
        {/* Section Title */}
        <h3 className="text-sm  font-bold font-[Outfit-Bold]  text-primary max-md:text-center max-laptop:text-mf">
          {t('features.sectionTitle')}
        </h3>

        {/* Ideal Features Title */}
        <h1   className="text-lg  flex  flex-wrap  font-[Outfit-Bold] text-wrap break-words  max-md:text-sm max-md:text-center max-laptop:text-lf ">
          {t('features.idealFeaturesTitle')}
        </h1>

        {/* Features Grid */}
        <div className="flexitems mt-[30px] grid grid-cols-4 max-md:grid-cols-1 max-tab:grid-cols-2 gap-[50px] items-start max-tab:mt-[20px] max-md:flex-col max-md:gap-[40px]">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="item w-[100%] whitespace-pre-wrap max-md:w-full max-md:items-center flex flex-col gap-[30px]"
            >
              {/* Feature Image */}
              <img
                className="w-[50%]  max-md:w-[80%]"
                src={feature.imageSrc}
                alt=""
              />

              {/* Feature Details */}
              <div className="flex flex-col gap-2">
                {/* Feature Title */}
                <h1 className="text-sm text-primary font-bold text-wrap font-[Outfit-Bold] max-md:text-left max-laptop:text-mf whitespace-nowrap">
                  {feature.titleKey}
                </h1>

                {/* Feature Description */}
                <p className="text-sm max-md:text-mf leading-7 font-[Outfit-Regular] max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start">
                  {feature.descriptionKey}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="max-tab:flex justify-center items-center">
          <button className="float-right font-[Outfit-Bold]  text-primary text-sm max-laptop:text-mf font-bold border-[2px] border-solid border-primary py-[10px] px-[15px] rounded-[10px] mt-6 max-md:text-[14px] whitespace-nowrap max-md:mx-auto">
            {t('features.buttonTitle')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
