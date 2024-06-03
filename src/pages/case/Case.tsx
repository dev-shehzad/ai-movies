
import { GoArrowRight } from "react-icons/go";

const Case = () => {
  const box = [
    {
      id: 1,
      logo: "/casestudy/1.png",
      name: "Produktkommunikation",
      des: `consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut
      labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea`,
      userpic: "/casestudy/man1.png",
      username: "Adrian Weiß",
      userinfo: "Produkt Manager nexineer",
    },
    {
      id: 2,
      logo: "/casestudy/2.png",
      name: "Softwareschulung ",
      des: "Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea",
      userpic: "/casestudy/man2.png",
      username: "Christian Färber ",
      userinfo: "Digitalisierungsbeauftragter Neuburg-Schrobenhausen",
    },
    {
      id: 3,
      logo: "/casestudy/3.png",
      name: "Xxx",
      des: "Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea",
      userpic: "/casestudy/man3.png",
      username: "Andreas Lehnig",
      userinfo: "Head of Marketing & Communications bei Schattdecor SE",
    },
  ];
  return (
    <div className="w-[100%] mt-[50px] mb-[50px] px-[80px] max-laptop:px-[60px] max-md:px-[30px]">
      <div className="max-w-[2000px] mx-auto">
        <div className="text-sm font-[Outfit-Bold]  text-primary max-md:text-center max-laptop:text-mf">
          Case Studies
        </div>
        <div className="text-lg font-[Outfit-Bold]  max-md:text-sm max-md:text-center max-laptop:text-lf ">
          So optimieren unsere Kunden ihre Schulungsprozesse
        </div>

        <div className="w-[100%] flex justify-between  max-tab:flex-col lg:gap-8 gap-6 items-start mt-[60px]">
          {box.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-light100 w-[30%] max-tab:w-full h-fit rounded-[10px] shadow-md  lg:p-[40px] p-[20px]"
              >
                <div className="flex items-center object-cover lg:h-[142px] md:h-[122px] lg:w-[300px] md:w-[280px] w-[250px]">
                  <img src={item.logo} alt="" width="300px" />
                </div>
                <div className=" w-[90%] border-b-[1px] ml-2 border-b-gray-300 mb-[30px]"></div>
                <div className="text-sm  text-black font-bold font-[Outfit-Bold] max-md:text-left max-laptop:text-mf">
                  {item.name}
                </div>
                <div className="text-sm font-[Outfit-Regular] max-md:text-mf leading-7 max-laptop:text-[15px] max-laptop:leading-4 max-md:leading-5 max-md:text-start">
                  {item.des}
                </div>

                <div className="h-[31px] w-[full] lg:text-[25px] md:text-[18px] text-[13px] font-[Outfit-Bold] text-primary flex justify-end lg:pr-3 md:pr-1 pr-0 mt-[50px]">
                  Case Study ansehen
                  <div className="lg:pt-[10px] md:pt-[6px] pt-[5px] ">
                    <GoArrowRight className="text-sm" />
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

export default Case;
