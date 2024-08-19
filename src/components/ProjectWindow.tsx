import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Typing from "./Typing";

const WebsiteButton: React.FC<{ link: string | undefined }> = ({ link }) => {
  if (link !== undefined) {
    return (
      <button
        className="mt-auto flex items-center justify-center md:mb-5 bg-green-500 rounded-lg w-full 2xl:p-4 p-2"
        onClick={() => {
          window.open(link);
        }}
      >
        <Typing
          delay={10}
          text="Website"
          styleElem="text-vanilla font-Poppins 2xl:text-xl xl:text-lg md:text-sm sm:text-xs text-[6px] font-bold text-center"
        />
      </button>
    );
  } else {
    return <></>;
  }
};

const PRWindow: React.FC<{
  name: string;
  description: string;
  date: string;
  url: string;
  image: string;
  color: string;
  close: () => void;
  status: string;
  websitelink: string | undefined;
}> = ({
  name,
  description,
  date,
  url,
  image,
  status,
  color,
  close,
  websitelink,
}) => {
  return (
    <div className="absolute m-auto left-0 bottom-0 top-0 right-0 rounded-md 2xl:w-3/5 2xl:h-2/3 md:w-4/5 h-4/5 bg-black-blue-dark z-30">
      <div className="w-full h-full flex flex-col">
        <div
          className="w-full flex justify-end md:text-2xl text-xs text-vanilla 2xl:p-2 md:p-2 p-1 cursor-pointer"
          onClick={close}
        >
          <CloseIcon />
        </div>
        <div className="w-full h-full flex flex-row">
          <div className="w-full h-full flex flex-col items-center md:justify-center justify-start 2xl:p-4 md:p-2 p-1">
            <img
              src={`data:image/jpeg;base64,${image}`}
              alt="project"
              className="rounded-lg 2xl:w-[450px] xl:w-80 md:w-60 w-40 shadow-md shadow-vanilla"
            ></img>
            <Typing
              delay={40}
              text={name}
              styleElem="text-vanilla font-Poppins 2xl:text-2xl xl:text-xl md:text-lg sm:text-sm text-[8px] font-bold 2xl:mt-4 md:mt-2 mt-1"
            />
            <Typing
              delay={40}
              text={date}
              styleElem="text-vanilla font-Poppins 2xl:text-xl xl:text-lg md:text-sm sm:text-xs text-[6px] font-bold 2xl:mt-4 md:mt-2 mt-1"
            />
            <Typing
              delay={40}
              text={`status: ${status}`}
              styleElem={`font-Poppins 2xl:text-xl xl:text-lg md:text-sm sm:text-xs text-[6px] font-bold 2xl:mt-4 md:mt-2 mt-1 ${color}`}
            />
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center p-4">
            <Typing
              delay={10}
              text={description}
              styleElem="text-vanilla font-Poppins 2xl:text-xl xl:text-lg md:text-sm sm:text-xs text-[6px] font-bold text-center"
            />
            <div className="mt-auto w-full">
              {websitelink ? <WebsiteButton link={websitelink} /> : <></>}
              <button
                className="mt-auto flex items-center justify-center md:mb-5 bg-black rounded-lg w-full 2xl:p-4 p-2"
                onClick={() => {
                  window.open(url);
                }}
              >
                <Typing
                  delay={10}
                  text="Github"
                  styleElem="text-vanilla font-Poppins 2xl:text-xl xl:text-lg md:text-sm sm:text-xs text-[6px] font-bold text-center"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PRWindow;
