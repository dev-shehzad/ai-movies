import Topstory from "../../components/Uber/Topstory";

const Uber = () => {
  const about = [
    {
      id: 1,
      profile: "/uben/person1.png",
      name: "FLORIAN SCHERL",
      profession: "Gründer und Geschäftsführer",
    },
    {
      id: 2,
      profile: "/uben/person2.png",
      name: "OLIVER GROßKLOß",
      profession: "Fullstack Developer ",
    },
    {
      id: 3,
      profile: "/uben/person1.png",
      name: "PHILIPP GABRIEL",
      profession: "Product Manager",
    },
    {
      id: 4,
      profile: "/uben/person2.png",
      name: "ARNAV SINGH",
    },
    {
      id: 5,
      profile: "/uben/person1.png",
      name: "DEJAN TODOROV",
    },
  ];
  return (
    <div>
      <div>
        <Topstory />
      </div>

      <div className="max-w-[2000px] mx-auto  w-[100%] flex flex-col lg:px-[80px] px-[20px] pt-[50px]">
        <div className="lg:text-sm text-xs font-[Outfit-Bold] text-primary">
          ABOUT US
        </div>
        <div className="xl:text-lg lg:text-md text-m2d text font-[Outfit-Bold] mb-[50px] ">
          Das Team
        </div>
        <div className="lg:text-sm bg-light200 lg:w-[90%] w-[100%] p-[50px] text-xs font-[Outfit-Bold] text-light400">
          Unser engagiertes Team, angeführt von den Co-Foundern Florian Scherl,
          Philipp Gabriel und Oliver Großkloß, vereint die Leidenschaft für
          Innovation und das gemeinsame Ziel, durch den Einsatz von Künstlicher
          Intelligenz Mitarbeiterschulungen effizienter und interaktiver zu
          gestalten.
        </div>
        <div className="flex flex-wrap w-[full] justify-center gap-6 mt-[80px]">
          {about.map((item) => {
            return (
              <div key={item.id} className=" text-center">
                <div className="lg:h-[350px] lg:w-[350px] md:h-[300px] md:w-[300px] h-[250px] w-[250px] rounded-full">
                  <div className=" object-cover">
                    <img src={item.profile} alt="" />
                  </div>
                </div>
                <div className="lg:text-sm text-xs font-[Outfit-Bold] text-primary">
                  {item.name}
                </div>
                <div className="lg:text-sm text-xs font-[Outfit-Bold] text-dark100">
                  {item.profession}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="max-w-[2000px] mx-auto  w-[100%] flex flex-col lg:px-[80px] px-[20px] py-[50px] pt-[50px] bg-light100 mt-[50px]">
        <div className="xl:text-lg lg:text-md text-m2d text font-[Outfit-Bold] mb-[50px]">
          Advisors
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col w-full justify-center items-center gap-6">
          <div className=" text-center">
            <div className="lg:h-[350px] lg:w-[350px] md:h-[300px] md:w-[300px] h-[250px] w-[250px] rounded-full  object-cover">
              <img src="/uben/person1.png" alt="" />
            </div>
            <div className="lg:text-sm text-xs font-[Outfit-Bold] text-primary">
              GEORG KLUMPNER
            </div>
          </div>

          <div className=" text-center">
            <div className="lg:h-[350px] lg:w-[350px] md:h-[300px] md:w-[300px] h-[250px] w-[250px] rounded-full  object-cover">
              <img src="/uben/person2.png" alt="" />
            </div>
            <div className="lg:text-[25px] md:text-[20px] text-[18px] font-bold text-primary">
              JOHANNES TIEMEYER
            </div>
          </div>

          <div className=" text-center">
            <div className="lg:h-[350px] lg:w-[350px] md:h-[300px] md:w-[300px] h-[250px] w-[250px] rounded-full  object-cover">
              <img src="/uben/person1.png" alt="" />
            </div>
            <div className="lg:text-[25px] md:text-[20px] text-[18px] font-bold text-primary">
              JOHANNES TIEMEYER
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:p-[40px] md:p-[30px] p-[20px]">
        <div className="lg:text-sm text-xs font-[Outfit-Bold] text-primary">
          JOIN US
        </div>
        <div className="xl:text-lg lg:text-md text-m2d text font-[Outfit-Bold] ">
          Auf der Suche nach dem passenden Job?
        </div>
        <div className="lg:text-sm text-xs font-[Outfit-Bold] text-black">
          Jetzt Teil eines dynamischen und wachsenden Startups werden!
        </div>
        <button className="text-light400 bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5">
          Stellenanzeigen entdecken
        </button>
      </div>
    </div>
  );
};

export default Uber;
