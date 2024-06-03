import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXingSquare } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-[2000px] mx-auto  w-[100%] flex flex-col lg:px-[80px] px-[20px] pt-[50px] pb-[50px]">
      {/* Section Title for "Get in Touch" */}
      <div className="lg:text-sm text-xs font-[Outfit-Bold] text-primary">
        {t("contact.getInTouch")}
      </div>
      
      {/* Section Subtitle for "Send us an Email" */}
      <div className="xl:text-lg lg:text-md text-m2d text font-[Outfit-Bold] ">
        {t("contact.sendUsEmail")}
      </div>
      
      {/* Form Input Fields */}
      <div className="w-[100%] flex lg:flex-row md:flex-row flex-col   pb-3 ">
        {/* Left Side of Form: Input Fields */}
        <div className=" lg:w-[50%] md:w-[60%] w-[100%] flex flex-col !gap-[20px]">
          <input
            type="text*"
            className=" bg-light200 bg-opacity-[0.6]   w-full py-3 px-6 rounded-[10px] placeholder:text-dark100 lg:text-sm text-xs font-[Outfit-Regular] text-primary"
            placeholder={t("contact.namePlaceholder")}
          />
          <input
            type="text*"
            className=" bg-light200 bg-opacity-[0.6] w-full py-3 px-6 rounded-[10px] placeholder:text-dark100 lg:text-sm text-xs font-[Outfit-Regular] text-primary"
            placeholder={t("contact.emailPlaceholder")}
          />
          <input
            type="text*"
            className=" bg-light200 bg-opacity-[0.6] w-full py-3 px-6 rounded-[10px] placeholder:text-dark100 lg:text-sm text-xs font-[Outfit-Regular] text-primary"
            placeholder={t("contact.phonePlaceholder")}
          />
          <input
            type="text*"
            className=" bg-light200 bg-opacity-[0.6] w-full py-3 px-6 rounded-[10px] placeholder:text-dark100 lg:text-sm text-xs font-[Outfit-Regular] text-primary"
            placeholder={t("contact.companyPlaceholder")}
          />
          <div className="relative">
    <input
      type="text*"
      className="bg-light200 h-[200px]  bg-opacity-[0.6] w-full py-3 px-6 rounded-[10px] placeholder:text-dark100 lg:text-sm text-xs font-[Outfit-Regular] text-primary"
      placeholder=""
    />
  <div className="absolute left-6 top-3">
    <span className=" lg:text-sm text-xs font-[Outfit-Regular] ">
      {t("contact.messagePlaceholder")}
    </span>
  </div>
</div>
        </div>
        {/* <div className=" hidden lg:w-[50%]  max-md:block md:w-[60%] w-[100%] !gap-[5px] lg:p-8 py-4  pb-3">
          <label className="flex  space-x-2 rounded-lg"></label>
          <div className="text-xs font-[Outfit-Regular] text-dark100  mt-[10px] leading-7">
            {" "}
            <input
              type="checkbox"
              className="form-checkbox mr-[8px]  mb-[5px]  h-5 w-5 text-blue-500 rounded-lg"
            />
            <span className="text-gray-700 rounded-lg"></span>
            {t("contact.privacyPolicy")}
          </div>
        </div> */}
        {/* Middle Section for Checkbox (Hidden on small screens) */}
        <div className=" hidden lg:w-[50%]  max-md:block md:w-[60%] w-[100%] !gap-[5px] lg:p-8 py-4  pb-3">
          {/* Checkbox for Privacy Policy Agreement */}
          <label className="flex  space-x-2 rounded-lg"></label>
          <div className="text-xs font-[Outfit-Regular] text-dark100  mt-[10px] leading-7">
            {" "}
            <input
              type="checkbox"
              className="form-checkbox mr-[8px]  mb-[5px]  h-5 w-5 text-primary rounded-lg"
            />
            <span className="text-gray-700 rounded-lg"></span>
            {t("contact.privacyPolicy")}
          </div>
        </div>
        
        {/* Right Side of Form: Submit Button (Hidden on small screens) */}
        <div className="lg:w-[50%] md:w-[50%] hidden w-full max-md:flex justify-end mt-4 ">
          <button
            type="submit"
            className="text-light400 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:text-sm text-xs font-[Outfit-Bold] "
          >
            {t("contact.submitButton")}
          </button>
        </div>
        
        {/* Additional Information Section */}
        <div className="lg:w-[50%] max-md:mt-[30px] md:w-[50%] w-full lg:pl-[50px] gap-3 md:pl-[60px]  flex flex-col">
          {/* Address Information */}
          <div className="flex flex-col pt-2">
            <div className="lg:text-sm text-xs font-[Outfit-Bold] text-primary">
              {t("contact.addressHeading")}
            </div>
            {/* ... (address details) */}
          </div>

          {/* Email Information */}
          <div className="flex flex-col pt-2">
            <div className="lg:text-sm text-xs font-[Outfit-Bold] text-primary">
              {t("contact.mailHeading")}
            </div>
            {/* ... (email details) */}
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col pt-2">
            <div className="lg:text-sm text-xs font-[Outfit-Bold] text-primary">
              {t("contact.socialHeading")}
            </div>
            {/* Social Media Icons with their respective links */}
            <div className="flex gap-[10px] bg-primary w-fit p-2 rounded-md mt-1">
              <div className="bg-light400 rounded-sm p-[4px]">
                <FaFacebookF className="text-primary text-[18px]" />
              </div>
              <div className="bg-light400 rounded-sm p-[4px]">
                <FaLinkedinIn className="text-primary text-[18px]" />
              </div>
              <div className="bg-light400 rounded-sm p-[4px]">
                <FaXingSquare className="text-primary text-[18px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkbox and Submit Button (Hidden on large screens) */}
      <div className="lg:w-[50%]  max-md:hidden md:w-[60%] w-[100%] flex !gap-[20px] lg:p-8 p-4  pb-3">
        {/* Checkbox for Privacy Policy Agreement */}
        <label className="flex  space-x-2 rounded-lg">
          <input
            type="checkbox"
            className="form-checkbox h-7 w-7 text-primary rounded-lg"
          />
          <span className="text-gray-700 rounded-lg"></span>
        </label>
        {/* Privacy Policy Text */}
        <div className="text-xs font-[Outfit-Regular] text-primary">
          {t("contact.privacyPolicy")}
        </div>
      </div>
      
      {/* Submit Button (Hidden on large screens) */}
      <div className="lg:w-[50%]  md:w-[50%] w-full flex max-md:hidden justify-end mt-4 ">
        <button
          type="submit"
          className="text-light400 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:text-sm text-xs font-[Outfit-Bold] "
        >
          {t("contact.submitButton")}
        </button>
      </div>
    </div>
  );
};

export default Contact;
