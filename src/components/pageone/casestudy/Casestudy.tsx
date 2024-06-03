import React from "react";
import { GoArrowRight } from "react-icons/go";

const Casestudy = () => {
  const box = [
    {
      id: 1,
      logo: "pageone/casestudy/1.png",
      name: "Produktkommunikation",
      des: "„Durch Schulungsvideos kann das Training der Mitarbeiter*innen skalierbar durchgeführt werden. Produkte in der Digitalisierung unterliegen einem schnellen ändernden Entwicklungszyklus, dass führt zu einem kontinuierlichen Schulungsbedarf. Durch das automatische Generieren von animierten Schulungsvideos ist es uns möglich, schnell und einfach Lerninhalte zu erstellen.“",
      userpic: "pageone/casestudy/man1.png",
      username: "Adrian Weiß",
      userinfo: "Produkt Manager nexineer",
    },
    {
      id: 2,
      logo: "pageone/casestudy/2.png",
      name: "Softwareschulung ",
      des: "“In der Einführung von KIUnterstützung für Schulungsvideos sehen wir großes Potential um unseren Mitarbeitenden die immer komplexeren Fachanwendungen und Prozessabläufe zu erklären. Wir sind stolz darauf, die Vorreiterrolle in der Digitalisierung zu übernehmen und anderen Landkreisen zu zeigen, wie sie von dieser Technologie profitieren können.“",
      userpic: "pageone/casestudy/man2.png",
      username: "Christian Färber ",
      userinfo: "Digitalisierungsbeauftragter Neuburg-Schrobenhausen",
    },
    {
      id: 3,
      logo: "pageone/casestudy/3.png",
      name: "Xxx",
      des: "Mit Hilfe von FAST AI Movies konnten wir unsere Mitarbeiter aus 17 verschiedenen Standorten und 6 Repräsentanzen weltweit effizient und einheitlich schulen und fit für unseren Messeauftritt machen.",
      userpic: "pageone/casestudy/man3.png",
      username: "Andreas Lehnig",
      userinfo: "Head of Marketing & Communications bei Schattdecor SE",
    },
  ];
  return (
    <div className="w-[100%] mt-[90px] px-[80px] max-laptop:px-[60px] max-md:px-[30px] ">
      <div className="max-w-[2000px] mx-auto">
        <h3 className="text-sm font-bold font-[Outfit-Bold] text-primary max-md:text-center max-laptop:text-mf">
          STATEMENTS
        </h3>
        <h1 className="text-lg font-[Outfit-Bold]  max-md:text-sm max-md:text-center max-laptop:text-lf ">
          Das sagen unsere Kunden
        </h1>

        <div className="w-[100%] flex justify-between  max-tab:flex-col lg:gap-8 gap-6 items-start mt-[60px]">
          {box.map((item) => {
            return (
              <div
                key={item.id}
                className="  bg-light100 w-[30%] max-tab:w-full h-fit rounded-[10px] shadow-lg lg:p-4 p-2"
              >
                <div className="flex m-6 items-center object-cover lg:h-[142px] md:h-[122px] lg:w-[300px] md:w-[280px] w-[250px]">
                  <img src={item.logo} alt="" width="300px" />
                </div>
                <div className=" w-[90%] border-b-[1px] ml-2 border-b-gray-300 mb-[30px]"></div>
                <div className="text-sm  text-primary font-bold font-[Outfit-Bold] max-md:text-left max-laptop:text-mf">
                  {item.name}
                </div>
                <div className="text-sm max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start">
                  {item.des}
                </div>

                <div className="flex gap-[20px] mt-[30px]">
                  <img
                    className="w-[80px] h-[80px]"
                    src={item.userpic}
                    alt=""
                  />
                  <div className="flex flex-col items-start justify-center">
                    <h3 className="text-sm  text-primary font-[Outfit-Bold] max-md:text-left max-laptop:text-mf">
                      {item.username}{" "}
                    </h3>
                    <p className="text-sm max-md:text-mf font-[Outfit-Regular] leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start">
                      {item.userinfo}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Casestudy;
