import { useTranslation } from "react-i18next";

// Supporter component
const Supporter = () => {
  const { t } = useTranslation();

  // Data for supporters
  const data = [
    { id: 1, image: "pageone/supporter/9.png" },
    { id: 2, image: "pageone/supporter/2.png" },
    { id: 3, image: "pageone/supporter/6.png" },
    { id: 4, image: "pageone/supporter/4.png" },
    { id: 5, image: "pageone/supporter/5.png" },
    { id: 6, image: "pageone/supporter/6.png" },
    { id: 7, image: "pageone/supporter/7.png" },
    { id: 8, image: "pageone/supporter/8.png" },
    { id: 9, image: "pageone/supporter/9.png" },
    { id: 10, image: "pageone/supporter/10.png" },
    { id: 11, image: "pageone/supporter/11.png" },
    { id: 12, image: "pageone/supporter/12.png" },
  ];

  // Rendering the Supporter component
  return (
    <div className="w-full bg-light400 py-10 px-[80px] max-tab:px-[40px] max-md:px-[30px]">
      <div className="max-w-[2000px] mx-auto">
        <h3 className="text-sm  font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
          {t("Supporter.TITLE")}
        </h3>
        <h1 className="text-lg font-[Outfit-Bold] max-md:text-sm max-md:text-center max-laptop:text-lf">
          {t("Supporter.SUBTITLE")}
        </h1>
        <div className="grid grid-cols-6 gap-[20px] mt-[30px] max-tab:grid-cols-4 max-md:grid-cols-2">
          {data.map((item) => (
            <div key={item.id} className="col-span-1 p-[30px]">
              <img src={item.image} alt={`Supporter ${item.id}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supporter;
