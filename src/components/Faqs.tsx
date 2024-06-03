import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Faq = () => {
  const { t } = useTranslation();

  // State to track the active question and arrow direction
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [arrowUp, setArrowUp] = useState(false);

  // Array containing FAQ data with questions and answers
  const faqData = [
    {
      id: 1,
      question: `${t("faq.faq1.question")}`,
      answer: `${t("faq.faq1.answer")}`,
    },
    {
      id: 2,
      question: `${t("faq.faq2.question")}`,
      answer: `${t("faq.faq2.answer")}`,
    },
    {
      id: 3,
      question: `${t("faq.faq3.question")}`,
      answer: `${t("faq.faq3.answer")}`,
    },
    {
      id: 4,
      question: `${t("faq.faq4.question")}`,
      answer: `${t("faq.faq4.answer")}`,
    },
    {
      id: 5,
      question: `${t("faq.faq5.question")}`,
      answer: `${t("faq.faq5.answer")}`,
    },
    // Add more question-answer pairs as needed
  ];

  const handleQuestionClick = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
    setArrowUp(!arrowUp);
  };

  return (
    <div className="w-full bg-light100 px-[80px] py-[80px] max-tab:px-[40px] max-md:px-[20px] ">
      <div className="max-w-[2000px] m-auto">
        <h3 className="text-lf font-[Outfit-Bold] max-md:text-center max-laptop:text-lf">
          {t("faq.faqHeading")}
        </h3>

        <div className="faq mt-7 flex flex-col md:flex-row">
          <div className="one w-[50%]  max-tab:w-full max-md:w-full rounded-[10px] bg-light400 shadow-md">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`question py-6 px-6 ${
                  activeQuestion === index ? "bg-light200" : ""
                } ${index === 0 ? "rounded-t-[10px]" : ""} ${
                  index === faqData.length - 1 ? "rounded-b-[10px]" : ""
                } cursor-pointer`}
                onClick={() => handleQuestionClick(index)}
              >
                <div className="flex items-center justify-between max-tab:items-start max-tab:justify-between">
                  <p className="font-[Outfit-Bold] text-primary text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf flex items-start justify-start max-md:text-start">
                    {faq.question}
                  </p>
                  <div className=" flex items-end justify-end">
                  {activeQuestion === index ? (
                    <AiOutlineUp className="text-primary cursor-pointer text-[20px] hidden max-tab:block mt-1" />
                  ) : (
                    <AiOutlineDown className="text-primary cursor-pointer text-[20px] hidden max-tab:block max-md:mt-1" />
                  )}
                  </div>
                </div>
                {activeQuestion === index && (
                  <p className="font-[Outfit-Regular]  hidden max-tab:block text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start pt-2">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="two w-[50%] max-tab:hidden p-10  ">
            {activeQuestion !== null && (
              <p className="tabans font-[Outfit-Regular] text-left text-sm max-tab:w-auto max-md:text-mf max-laptop:text-mf max-md:text-start">
                {faqData[activeQuestion].answer}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
