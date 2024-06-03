import { useTranslation } from 'react-i18next';

// Dataprivacy component
const Dataprivacy = () => {
  // Translation hook
  const { t } = useTranslation();

  // Rendering the Dataprivacy component
  return (
    <div className="w-full mt-[40px]  bg-light100 py-10 px-[80px] max-tab:px-[40px] max-md:px-[30px]">
      <div className="max-w-[2000px] m-auto">
        {/* Title */}
        <h3 className="text-sm  font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
          {t('Dataprivacy.TITLE')}
        </h3>

        {/* Subtitle */}
        <h1 className="text-lg font-bold  max-md:text-sm  max-md:text-center max-laptop:text-lf ">
          {t('Dataprivacy.SUBTITLE')}
        </h1>

        {/* Features */}
        <div className="w-[70%] max-md:w-full mx-auto flex max-md:flex-col justify-around gap-6 mt-[30px]">
          {/* Feature 1 */}
          <div className="three text-center w-[30%] max-md:w-full max-md:items-start flex flex-col items-center justify-center">
            <h1 className="text-sm text-primary text-center font-bold font-[Outfit-Bold] max-md:text-left max-laptop:text-mf flex items-center gap-2 max-tab:leading-5">
              {t('Dataprivacy.SECURE_TRANSMISSION')}
            </h1>
            <p className="text-sm font-[Outfit-Regular]  max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
              {t('Dataprivacy.SECURE_TRANSMISSION_DESC')}
            </p>
          </div>

          {/* Feature 2 */}
          <div className="three text-center w-[30%] max-md:w-full max-md:items-start flex flex-col items-center justify-center">
            <h1 className="text-sm text-primary font-bold font-[Outfit-Bold] max-md:text-left max-laptop:text-mf flex items-center gap-2">
              {t('Dataprivacy.VIDEO_STORAGE_LOCATION')}
            </h1>
            <p className="text-sm font-[Outfit-Regular]  text-center max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
              {t('Dataprivacy.VIDEO_STORAGE_LOCATION_DESC')}
            </p>
          </div>
        </div>

        {/* Images */}
        <div className="images mt-[30px] 2xl:px-[160px] xl:px-[140px] lg:px-[120px] md:px-[80px] px-[0px]  items-center justify-center w-[100%] mx-auto  flex max-md:hidden">
          {/* Image set 1 */}
          <div className="one flex w-[15%] flex-col  justify-center items-center">
            <img
              className="opacity-0 w-[5%]  transform rotate-180"
              src="pageone/dataprivacy/line.png"
              alt=""
            />

            <img className="" src="pageone/dataprivacy/1.png" alt="" />
            <img
              className="w-[8%] -mt-3 max-tab:-mt-1   max-laptop:-mt-2"
              src="pageone/dataprivacy/line.png"
              alt=""
            />
          </div>
          {/* Connecting line */}
          <img
            src="pageone/dataprivacy/Linie.svg"
            alt=""
            className="h-[15px] -ml-3 max-laptop:-ml-2 max-tab:-ml-1 w-[8%] -mr-2"
          />

          {/* Image set 2 */}
          <div className="two flex w-[15%] flex-col items-center">
            <img
              className=" w-[8%] -mb-2 max-laptop:-mb-1 transform rotate-180"
              src="pageone/dataprivacy/line.png"
              alt=""
            />
            <img className="" src="pageone/dataprivacy/2.png" alt="" />
            <img
              className="opacity-0 w-[8%] -mt-[10px]"
              src="pageone/dataprivacy/line.png"
              alt=""
            />
          </div>
          {/* Connecting line */}
          <img
            src="pageone/dataprivacy/Linie.svg"
            alt=""
            className="-ml-2 max-tab:-ml-1 h-[15px] -mr-2 w-[8%]"
          />

          {/* Image set 3 */}
          <div className="three flex w-[15%] flex-col items-center">
            <img
              className="opacity-0 w-[8%] -mt-3  transform rotate-180"
              src="pageone/dataprivacy/line.png"
              alt=""
            />

            <img className="" src="pageone/dataprivacy/3.png" alt="" />
            <img
              className=" w-[8%] -mt-3 max-tab:-mt-1 max-laptop:-mt-2"
              src="pageone/dataprivacy/line.png"
              alt=""
            />
          </div>
          {/* Connecting line */}
          <img
            src="pageone/dataprivacy/Linie.svg"
            alt=""
            className="-ml-2 max-tab:-ml-1 h-[15px] w-[8%] -mr-2"
          />

          {/* Image set 4 */}
          <div className="four w-[15%] flex flex-col items-center">
            <img
              className="w-[8%] -mb-0  transform rotate-180"
              src="pageone/dataprivacy/line.png"
              alt=""
            />

            <img className="-mt-[5px]" src="pageone/dataprivacy/4.png" alt="" />
            <img
              className="opacity-0 w-[8%] -mt-3 max-laptop:-mt-2"
              src="pageone/dataprivacy/line.png"
              alt=""
            />
          </div>
          {/* Connecting line */}
          <img
            src="pageone/dataprivacy/Linie.svg"
            alt=""
            className="-ml-2 max-tab:-ml-1 h-[15px] w-[8%] -mr-2"
          />

          {/* Image set 5 */}
          <div className="five w-[15%] flex flex-col items-center">
            <img
              className="opacity-0 w-[8%]  transform rotate-180"
              src="pageone/dataprivacy/line.png"
              alt=""
            />

            <img className="" src="pageone/dataprivacy/5.png" alt="" />
            <img
              className="w-[8%] -mt-3 max-tab:-mt-1 max-laptop:-mt-2"
              src="pageone/dataprivacy/line.png"
              alt=""
            />
          </div>
        </div>

        {/* Descriptions */}
        <div className="w-full flex items-center justify-center">
          <div className="w-[100%] flex max-md:flex-col justify-between items-center mt-[30px] max-md:gap-4">
            {/* Description 1 */}
            <div className="one w-[30%] max-md:w-full flex flex-col items-center justify-center max-md:items-start">
              <h1 className="text-sm  text-primary  text-center font-bold font-[Outfit-Bold] max-md:text-left max-laptop:text-mf flex items-center  gap-2">
                {t('Dataprivacy.DATA_ENTRY')}
              </h1>
              <p className="text-sm font-[Outfit-Regular]  text-center max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
                {t('Dataprivacy.DATA_ENTRY_DESC')}
              </p>
            </div>

            {/* Description 2 */}
            <div className="two w-[30%] max-md:w-full max-md:items-start flex flex-col items-center justify-center">
              <h1 className="text-sm text-primary text-center font-bold font-[Outfit-Bold] max-md:text-left max-laptop:text-mf flex items-center gap-2">
                {t('Dataprivacy.INTERNAL_PROCESSING')}
              </h1>
              <p className="text-sm font-[Outfit-Regular]  text-center max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
                {t('Dataprivacy.INTERNAL_PROCESSING_DESC')}
              </p>
            </div>

            {/* Description 3 */}
            <div className="three text-center w-[30%] max-md:w-full max-md:items-start flex flex-col items-center justify-center">
              <h1 className="text-sm text-primary text-center font-bold font-[Outfit-Bold] max-md:text-left max-laptop:text-mf flex items-center gap-2">
                {t('Dataprivacy.SECURE_DISPLAY')}
              </h1>
              <p className="text-sm font-[Outfit-Regular] text-center max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start mt-[10px]">
                {t('Dataprivacy.SECURE_DISPLAY_DESC')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dataprivacy;
