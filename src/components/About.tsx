import React from "react";
import { useSpring, animated } from "react-spring";
import Typing from "./Typing";

const About: React.FC = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
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
        className="w-full h-full flex items-center justify-center z-10 flex-col"
      >
        <div className="flex w-9/12 h-full justify-center flex-col font-light font-Poppins text-[8px] md:text-xs xl:text-sm 2xl:text-3xl text-eerie text-center pr-4 pl-4">
          <span className="xl:m-3 m-1">
            <Typing text="Name: " delay={30} styleElem="font-bold" />
            <Typing text="Arthur ( pseudonym )" delay={30} styleElem="" />
          </span>
          <span className="xl:m-3 m-1">
            <Typing text="Age: " delay={30} styleElem="font-bold" />
            <Typing text="18" delay={30} styleElem="" />
          </span>
          <span className="xl:m-3 m-1">
            <Typing text="Hometown: " delay={30} styleElem="font-bold" />
            <Typing text="Penza, Russia" delay={30} styleElem="" />
          </span>
          <span className="xl:m-3 m-1">
            <Typing text="Education: " delay={30} styleElem="font-bold" />
            <Typing
              text="secondary education
            in software engineering/programming."
              delay={30}
              styleElem=""
            />
          </span>
          <span className="xl:m-3 m-1">
            <Typing
              text="Experience in programming: "
              delay={30}
              styleElem="font-bold"
            />
            <Typing
              text="starting from 2018, about 4-5 years."
              delay={30}
              styleElem=""
            />
          </span>
          <span className="xl:m-3 m-1">
            <Typing
              text="Communication languages: "
              delay={30}
              styleElem="font-bold"
            />
            <Typing text="english, russian." delay={30} styleElem="" />
          </span>
          <Typing text="About" delay={30} styleElem="font-bold xl:mt-9" />
          <Typing
            text="I started my journey into programming by mastering Python as the most
          mainstream language at that time, after familiarizing myself with the
          Django/Flask frameworks and others, I decided to switch to full-stack
          development, which I continue to do to this day, also learning neural
          networks and etc."
            delay={5}
            styleElem="mt-3"
          />
        </div>
      </animated.div>
    );
  } else {
    return (
      <animated.div
        style={props}
        className="w-full h-full flex items-center justify-center z-10 flex-col"
      >
        <div className="flex w-9/12 h-full justify-center flex-col font-light font-Poppins text-sm text-eerie text-center pr-4 pl-4">
          <span className="xl:m-3 m-1">
            <Typing text="Name: " delay={30} styleElem="font-bold" />
            <Typing text="Arthur ( pseudonym )" delay={30} styleElem="" />
          </span>
          <span className="xl:m-3 m-1">
            <Typing text="Age: " delay={30} styleElem="font-bold" />
            <Typing text="18" delay={30} styleElem="" />
          </span>
          <span className="xl:m-3 m-1">
            <Typing text="Hometown: " delay={30} styleElem="font-bold" />
            <Typing text="Penza, Russia" delay={30} styleElem="" />
          </span>
          <span className="xl:m-3 m-1">
            <Typing text="Education: " delay={30} styleElem="font-bold" />
            <Typing
              text="secondary education
            in software engineering/programming."
              delay={30}
              styleElem=""
            />
          </span>
          <span className="xl:m-3 m-1">
            <Typing
              text="Experience in programming: "
              delay={30}
              styleElem="font-bold"
            />
            <Typing
              text="starting from 2018, about 4-5 years."
              delay={30}
              styleElem=""
            />
          </span>
          <span className="xl:m-3 m-1">
            <Typing
              text="Communication languages: "
              delay={30}
              styleElem="font-bold"
            />
            <Typing text="english, russian." delay={30} styleElem="" />
          </span>
          <Typing text="About" delay={30} styleElem="font-bold xl:mt-9" />
          <Typing
            text="I started my journey into programming by mastering Python as the most
          mainstream language at that time, after familiarizing myself with the
          Django/Flask frameworks and others, I decided to switch to full-stack
          development, which I continue to do to this day, also learning neural
          networks and etc."
            delay={5}
            styleElem="mt-3"
          />
        </div>
      </animated.div>
    );
  }
};

export default About;
