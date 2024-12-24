import { faAnglesDown, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const AccrodianTwo = () => {
  const [isOpen, setIsOpen] = useState([true, false, false, false]);

  const toggleOpen = (index) => {
    setIsOpen((prevState) =>
      prevState?.map((item, i) => (i === index ? !item : false))
    );
  };

  const detailsData = [
    {
      summary: "Is it Full Transport & Logistics Company?",
      content:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite.",
      id: 1,
    },
    {
      summary: "How to Create my Project in Company?",
      content:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite.",
      id: 2,
    },
    {
      summary: "How to Work in Process of Transport Company?",
      content:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite.",
      id: 3,
    },
    {
      summary: "What warranties do I have for installation?",
      content:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite.",
      id: 4,
    },
  ];

  return (
    <div className="relative">
      <div className="relative p-0 rounded-[10px] bg-transparent mb-4">
        {detailsData?.map((detail, id) => (
          <div
            key={id}
            className="mb-5 lg:p-[19px] px-2 py-3 rounded bg-[#f5f4f9]"
          >
            <summary
              onClick={() => toggleOpen(id)}
              className="flex items-center justify-between gap-6 md:text-xl sm:text-[17px] text-[15px] font-semibold  cursor-pointer xs:leading-[28px] leading-[25px] text-secondary"
            >
              <div>
                {detail.id}. {detail.summary}
              </div>
              <div>
                <span
                  className={`ml-2 h-[35px] w-[35px] flex items-center justify-center rounded-md lg:text-xl text-sm ${
                    isOpen[id]
                      ? "bg-primary text-white"
                      : "bg-secondary text-white"
                  }`}
                >
                  {isOpen[id] ? (
                    <FontAwesomeIcon icon={faAnglesDown} />
                  ) : (
                    <FontAwesomeIcon icon={faAnglesRight} />
                  )}
                </span>
              </div>
            </summary>
            <div
              className={`transition-[max-height] duration-700 overflow-hidden`}
              style={{
                maxHeight: isOpen[id] ? "200px" : "0",
              }}
            >
              <div className="lg:p-2 bg-[#f5f4f9] my-1 lg:ml-4 text-base leading-[30px] font-normal">
                {detail.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccrodianTwo;
