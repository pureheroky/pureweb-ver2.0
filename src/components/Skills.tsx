import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import skills from "../data/skills";

const Skills: React.FC = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const [current, setCurrent] = useState("");
  const [elements, setElements] = useState(skills);

  const Search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setCurrent(searchTerm);

    const currElements = skills.filter((val) =>
      val.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setElements(currElements);
  };

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
        <div className="flex w-full rounded-2xl justify-center mt-1 xl:mt-0">
          <input
            type="text"
            value={current}
            onChange={Search}
            className="h-full w-80 2xl:p-4 md:p-2 p-1 2xl:text-2xl xl:text-xl md:text-sm text-[8px] outline-none bg-vanilla/20 font-Poppins rounded-2xl shadow-md text-eerie font-semibold text-center"
            placeholder="Search"
          />
        </div>
        <div
          className={`grid 2xl:grid-cols-4 md:grid-cols-4 grid-cols-5 xl:mt-4 mt-2`}
        >
          {elements.map((el, ind) => {
            return (
              <div
                key={ind}
                className="text-center xl:m-2 m-1 2xl:text-2xl md:text-[8px] text-[6px] font-Poppins font-semibold rounded-xl text-eerie shadow-md bg-vanilla/10 xl:p-3 md:p-1 p-1"
              >
                {el}
              </div>
            );
          })}
        </div>
      </animated.div>
    );
  } else {
    return (
      <animated.div
        style={props}
        className="w-full h-full flex items-center justify-center z-10 flex-col"
      >
        <div className="flex w-full rounded-2xl justify-center mt-1 xl:mt-0">
          <input
            type="text"
            value={current}
            onChange={Search}
            className="h-full w-72 p-4 text-xl outline-none bg-vanilla/20 font-Poppins rounded-2xl shadow-md text-eerie font-semibold text-center"
            placeholder="Search"
          />
        </div>
        <div
          className={`grid grid-cols-2 mt-4 h-80 overflow-y-auto bg-vanilla/10 rounded-lg`}
          style={{ maxHeight: "calc(100vh - 100px)" }}
        >
          {elements.map((el, ind) => {
            return (
              <div
                key={ind}
                className="text-center m-2 text-xs font-Poppins font-semibold rounded-xl text-eerie shadow-md bg-vanilla/10 p-2"
              >
                {el}
              </div>
            );
          })}
        </div>
      </animated.div>
    );
  }
};

export default Skills;
