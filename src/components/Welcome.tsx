import React from "react";
import avatar from "../images/avatar8.jpg";
import xd from "../images/xd.gif";
import { useSpring, animated } from "react-spring";
import Typing from "./Typing";

const Welcome: React.FC = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 },
  });

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkIsMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = [
        "iphone",
        "android",
        "webos",
        "ipad",
        "ipod",
        "blackberry",
        "windows phone",
      ];
      const isMobileDevice = mobileKeywords.some((keyword) =>
        userAgent.includes(keyword)
      );
      setIsMobile(isMobileDevice);
    };
    checkIsMobile();

    return () => {};
  }, []);

  if (!isMobile) {
    return (
      <animated.div
        style={props}
        className="w-full h-full flex items-center justify-center z-10 flex-col text-eerie"
      >
        <div className="flex items-end justify-end">
          <div className="md:p-6 md:pl-12 md:pr-12 pl-6 pr-6">
            <img
              src={avatar}
              className="rounded-full 2xl:w-72 xl:w-60 md:w-44 w-24 border-black-blue-dark-darker shadow-3xl md:border-2"
              alt="avatar"
            ></img>
          </div>

          <img
            src={xd}
            alt="bruh"
            className="absolute 2xl:w-36 md:w-24 sm:w-14 w-12"
          ></img>
        </div>
        <div className="mt-5 flex flex-col items-center text-center">
          <Typing
            text="pureheroky"
            delay={40}
            styleElem="text-black-blue-dark-darker font-Poppins text-[8px] md:text-xl xl:text-2xl 2xl:text-3xl font-bold"
          />
          <Typing
            text="18 y.o fullstack/software developer"
            delay={40}
            styleElem="text-black-blue-dark-darker pt-2 font-Poppins text-[6px] md:text-xs xl:text-xs 2xl:text-xl font-semibold "
          />

          <div className="flex flex-col">
            <Typing
              text="socials:"
              delay={40}
              styleElem="font-Poppins text-[6px] md:text-xs xl:text-sm 2xl:text-xl font-semibold pt-1 md:pt-6 md:pb-2"
            />
            <Typing
              text="t.me/psychopure"
              delay={40}
              styleElem="font-Poppins text-[6px] md:text-xs xl:text-sm 2xl:text-xl"
              clickable={true}
              url="https://t.me/psychopure"
            />
            <Typing
              text="github.com/pureheroky"
              delay={40}
              styleElem="font-Poppins text-[6px] md:text-xs xl:text-sm 2xl:text-xl"
              clickable={true}
              url="https://github.com/pureheroky"
            />
          </div>

          <Typing
            text="scroll up to reveal other information"
            delay={40}
            styleElem="text-black-blue-dark-darker xl:pt-24 font-Poppins text-[6px] md:text-xs xl:text-xs 2xl:text-xl font-semibold"
          />
        </div>
      </animated.div>
    );
  } else {
    return (
      <animated.div
        style={props}
        className="w-full h-full flex items-center justify-center z-10 flex-col text-eerie"
      >
        <div className="flex items-end justify-end">
          <div className="md:p-6 md:pl-12 md:pr-12 pl-6 pr-6">
            <img
              src={avatar}
              className="rounded-full w-44 border-black-blue-dark-darker shadow-3xl md:border-2"
              alt="avatar"
            ></img>
          </div>

          <img src={xd} alt="bruh" className="absolute w-20"></img>
        </div>
        <div className="mt-5 flex flex-col items-center text-center">
          <span className="text-black-blue-dark-darker font-Poppins text-2xl font-bold">
            pureheroky
          </span>
          <span className="text-black-blue-dark-darker pt-2 font-Poppins text-xl font-semibold">
            18 y.o fullstack/python developer
          </span>
          <div className="flex flex-col">
            <Typing
              text="socials:"
              delay={40}
              styleElem="font-Poppins text-lg font-semibold pt-6 pb-2"
            />
            <Typing
              text="t.me/psychopure"
              delay={40}
              styleElem="font-Poppins text-lg"
              clickable={true}
              url="t.me/psychopure"
            />
            <Typing
              text="github.com/pureheroky"
              delay={40}
              styleElem="font-Poppins text-lg"
              clickable={true}
              url="github.com/pureheroky"
            />
          </div>

          <span className="text-black-blue-dark-darker pt-24 font-Poppins text-xl font-semibold">
            tap on buttons to navigate
          </span>
        </div>
      </animated.div>
    );
  }
};

export default Welcome;
