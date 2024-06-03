import { PiNoteDuotone } from "react-icons/pi";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Untersiete = () => {
  const news = [
    {
      id: 1,
      video: "/news1.mp4",
      name: "Die Zakunft gehort ihm: Das interview mit dem 19-jahrigen AI-Startup-Grunder Florian Scherl",
      p: "Florian Scherl telt in diesem video seine Erfahrungen erzahlt, wie er zur Grundung seines AL-Startups kam. Dieses Interview ist ein Muss fur alle Technologie begeisterten,  kunstlichen Imtelligenz erfarhren mochten.",
    },
    {
      id: 2,
      video: "/news2.mp4",
      name: "Revolution of AI Video Generation with FAST AI Movies| AI E-Lab Success Stories",
      p: "Florian Scherl, ein 19-jahriger Grunder und CEO von Fast AI Movies, spricht uber seine Startup-Reise als junger und erfolgreicher Unternehmer mit Launrenz Sommerlad von Europas fuhrender Studenteninitiative TUM.ai.",
    },
    {
      id: 3,
      video: "/news3.mp4",
      name: "AI meets EdTecH - Welche Rolle spielt Kunstliche Intelligenz in der Bildungsbranche?",
      p: "Zusammen mit Founders Foundation richtete KI.NRW am 15.Mai 2023 das erste KI Meetup NRW aus. Mit fuhrenden Expert*innen aus der EdTech-Branche ging es bie dem Netzwerk-Event,  fur Lehrende und Lernende ergeben konnen.",
    },
    {
      id: 1,
      video: "/news1.mp4",
      name: "Die Zakunft gehort ihm: Das interview mit dem 19-jahrigen AI-Startup-Grunder Florian Scherl",
      p: "Florian Scherl telt in diesem video seine Erfahrungen erzahlt, wie er zur Grundung seines AL-Startups kam. Dieses Interview ist ein Muss fur alle Technologie begeisterten, welt der kunstlichen  erfarhren mochten.",
    },
    {
      id: 2,
      video: "/news2.mp4",
      name: "Revolution of AI Video Generation with FAST AI Movies| AI E-Lab Success Stories",
      p: "Florian Scherl, ein 19-jahriger Grunder und CEO von Fast AI Movies, spricht uber seine Startup-Reise als junger und erfolgreicher Unternehmer mit Launrenz Sommerlad von Europas fuhrender Studenteninitiative TUM.ai.",
    },
    {
      id: 3,
      video: "/news3.mp4",
      name: "AI meets EdTecH - Welche Rolle spielt Kunstliche Intelligenz in der Bildungsbranche?",
      p: "Zusammen mit Founders Foundation richtete KI.NRW am 15.Mai 2023 das erste KI Meetup NRW aus. Mit fuhrenden Expert*innen aus der EdTech-Branche ging es bie dem Netzwerk-Event,  und welche Chance  ergeben konnen.",
    },
    {
      id: 1,
      video: "/news1.mp4",
      name: "Die Zakunft gehort ihm: Das interview mit dem 19-jahrigen AI-Startup-Grunder Florian Scherl",
      p: "Florian Scherl telt in diesem video seine Erfahrungen erzahlt, wie er zur Grundung seines AL-Startups kam. Dieses Interview ist ein Muss fur alle Technologie begeisterten,  kunstlichen Imtelligenz erfarhren mochten.",
    },
    {
      id: 2,
      video: "/news2.mp4",
      name: "Revolution of AI Video Generation with FAST AI Movies| AI E-Lab Success Stories",
      p: "Florian Scherl, ein 19-jahriger Grunder und CEO von Fast AI Movies, spricht uber seine Startup-Reise als junger und erfolgreicher Unternehmer mit Launrenz Sommerlad von Europas fuhrender Studenteninitiative TUM.ai.",
    },
    {
      id: 3,
      video: "/news3.mp4",
      name: "AI meets EdTecH - Welche Rolle spielt Kunstliche Intelligenz in der Bildungsbranche?",
      p: "Zusammen mit Founders Foundation richtete KI.NRW am 15.Mai 2023 das erste KI Meetup NRW aus. Mit fuhrenden Expert*innen aus der EdTech-Branche ging es bie dem Netzwerk-Event,  fur Lehrende und Lernende ergeben konnen.",
    },
    {
      id: 1,
      video: "/news1.mp4",
      name: "Die Zakunft gehort ihm: Das interview mit dem 19-jahrigen AI-Startup-Grunder Florian Scherl",
      p: "Florian Scherl telt in diesem video seine Erfahrungen erzahlt, wie er zur Grundung seines AL-Startups kam. Dieses Interview ist ein Muss fur alle Technologie begeisterten,  kunstlichen Imtelligenz erfarhren mochten.",
    },
    {
      id: 2,
      video: "/news2.mp4",
      name: "Revolution of AI Video Generation with FAST AI Movies| AI E-Lab Success Stories",
      p: "Florian Scherl, ein 19-jahriger Grunder und CEO von Fast AI Movies, spricht uber seine Startup-Reise als junger und erfolgreicher Unternehmer mit Launrenz Sommerlad von Europas fuhrender Studenteninitiative TUM.ai.",
    },
    {
      id: 3,
      video: "/news3.mp4",
      name: "AI meets EdTecH - Welche Rolle spielt Kunstliche Intelligenz in der Bildungsbranche?",
      p: "Zusammen mit Founders Foundation richtete KI.NRW am 15.Mai 2023 das erste KI Meetup NRW aus. Mit fuhrenden Expert*innen aus der EdTech-Branche ging es bie dem Netzwerk-Event,  welche Chance sich daduranch  ergeben konnen.",
    },
  ];

  return (
    <div className=" w-[100%] flex flex-col lg:p-[40px] p-[22px]">
      <h1 className="lg:text-2xl text-primary md:text-xs text-[10px]">News</h1>
      <div className=" lg:text-4xl font-bold md:text-[25px] text-[16px]">
        FAST AI Movies in den Medien
      </div>

      <div className="lg:h-[50px] md:h-[40px] h-[30px] w-[100%] flex bg-blue-50 lg:my-[30px] md:my-[20px] my-[10px] rounded-l-3xl mr-[30px]">
        <div className="lg:h-[50px] lg:w-[50px] md:h-[40px] md:w-[40px] w-[30px] h-[30px] outline-blue-700 outline rounded-full bg-light400 justify-center flex items-center">
          <div className="lg:text-2xl text-[18px]">
            <PiNoteDuotone />{" "}
          </div>
        </div>
        <div className="lg:text-[15px] text-[13px] text-primary lg:p-[13px] md:p-[8px] p-[5px] font-semibold">
          ARTIKEL
        </div>
      </div>
      {news.map((item) => {
        return (
          <div key={item.id} className="w-[100%] flex-col">
            <div className="w-[100%] flex  lg:p-4 md:p-3 p-1 ">
              <div className="lg:w-[250px] h-[auto] md:w-[170px]  w-[150px]  rounded-[15px] bg-slate-400 ">
                <video src={item.video}></video>
              </div>
              <div className="flex flex-col lg:p-[20px] md:p[8px] p-[5px] w-[70%]  h-[auto] ">
                <div className="lg:text-[17px] md:text-[12px] text-[8px] font-bold ">
                  {item.name}
                </div>
                <div className="lg:text-[16px] md:text-[10px] text-[11px] font-normal pt-[5px] lg:block md:block hidden">
                  {item.p}
                </div>
                <div className=" lg:text-[15px] md:text-[12px] text-[10px] text-primary lg:pt-3 md:pt-2 pt-[3px] font-semibold flex">
                  Artikel lesen
                  <div className="lg:pt-[5.5px] md:pt-[6px] pt-[4px] ">
                    {" "}
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="lg:h-[50px] md:h-[40px] h-[30px] w-[100%] flex bg-blue-50 lg:my-[30px] md:my-[20px] my-[10px] rounded-l-3xl mr-[30px]">
        <div className="lg:h-[50px] lg:w-[50px] md:h-[40px] md:w-[40px] w-[30px] h-[30px] outline-blue-700 outline rounded-full bg-light400 justify-center flex items-center">
          <div className="lg:text-2xl text-[18px]">
            <MdOutlineKeyboardVoice />
          </div>
        </div>
        <div className="lg:text-[15px] text-[13px] text-primary lg:p-[13px] md:p-[8px] p-[5px] font-semibold">
          PODCAST
        </div>
      </div>
      <div className="lg:flex-row md:flex-row flex-col h-auto pb-2 flex">
        <div className="flex flex-col  lg:w-[300px] md:w-[250px] w-[100%] lg:pl-8 md:pl-6 pl-3">
          <div className="lg:text-[25px] md:text-[15px] text-[10px] font-bold ">
            #28// Learn from an interpreneur: Florian Scherl, Founder at FAST AI
            Movies
          </div>
          <div className="lg:text-[17px] md:text-[13px] text-[10px] font-regular pt-[5px]  pr-1">
            In this week's episode, Antonie meets Florian Scherl founder of FAST
            AI Movies. Florian founded his company while being 17 years old and
            still being a pupil. Florian takes us on his journey of how he
            learned coding identified the opportunity for FAST AI Movies, but
            also of the importance of intensly listening of what your
            customerwant.
          </div>
          <div className=" lg:text-[16px] md:text-[12px] text-[10px] text-primary lg:pt-3 md:pt-2 pt-[3px] font-semibold flex pb-2">
            Video anschauen
            <div className="lg:pt-[5.5px] md:pt-[6px] pt-[4px] ">
              {" "}
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="flex flex-col  lg:w-[300px] md:w-[250px] w-[100%] lg:pl-8 md:pl-6 pl-3">
          <div className="lg:text-[25px] md:text-[15px] text-[10px] font-bold ">
            Florian Scherl, Founder at FAST AI Movies
          </div>
          <div className="lg:text-[17px] md:text-[13px] text-[10px] font-regular pt-[5px] pr-1">
            Despite Florian's age he is advancing very fast in AI and business.
            At 13 years old he taught himself programming and then AI. In our
            chat today we talk about Florian's unique journey into his passion
            for AI.
          </div>
          <div className=" lg:text-[16px] md:text-[12px] text-[10px] text-primary lg:pt-3 md:pt-2 pt-[3px] font-semibold flex">
            Video anschauen
            <div className="lg:pt-[5.5px] md:pt-[6px] pt-[4px] pl-[2px]">
              {" "}
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:h-[50px] md:h-[40px] h-[30px] w-[100%] flex bg-blue-50 lg:my-[30px] md:my-[20px] my-[10px] rounded-l-3xl mr-[30px]">
        <div className="lg:h-[50px] lg:w-[50px] md:h-[40px] md:w-[40px] w-[30px] h-[30px] outline-blue-700 outline rounded-full bg-light400 justify-center flex items-center">
          <div className="lg:text-2xl text-18px">
            <FaPhotoVideo />
          </div>
        </div>
        <div className="lg:text-[15px] text-[13px] text-primary lg:p-[13px] md:p-[8px] p-[5px] font-semibold">
          Video
        </div>
      </div>
      <div className="flex lg:pl-[40px] md:p-4 p-3 ">
        <div className="lg:w-[250px] h-[auto] md:w-[200px]  w-[130px]  rounded-[15px] bg-slate-400 lg:my-[5px] md:mt-[4px] mt-[3px]">
          <video src="./news4.mp4"></video>
        </div>
        <div className="flex flex-col lg:pl-8 pl-4  lg:pt-5 pt-4">
          <div className="lg:text-[25px] md:text-[15px] text-[8px] font-bold pt-2">
            FAST AI Movies | Vorstelling | Campus Founder
          </div>
          <div className=" lg:text-[25px] md:text-[12px] text-[8px] text-primary lg:pt-3 md:pt-2 pt-[3px] font-semibold flex">
            Video anschauen
            <div className="lg:pt-[10px] md:pt-[6px] pt-[4px] ">
              {" "}
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:pl-[40px] md:pl-[25px] pl-[10px]  ">
        <div className="lg:w-[250px] h-[auto] md:w-[200px]  w-[130px]  rounded-[15px] bg-slate-400 my-[5px]">
          <video src="./news5.mp4"></video>
        </div>
        <div className="flex flex-col lg:pl-8 pl-4  lg:pt-5 pt-4">
          <div className="lg:text-[25px] md:text-[15px] text-[8px] font-bold pt-2">
            FAST Movies | Demo Day | KI Garage
          </div>
          <div className=" lg:text-[25px] md:text-[12px] text-[10px] text-primary lg:pt-3 md:pt-2 pt-[3px] font-semibold flex">
            Video anschauen
            <div className="lg:pt-[10px] md:pt-[6px] pt-[4px] ">
              {" "}
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Untersiete;
