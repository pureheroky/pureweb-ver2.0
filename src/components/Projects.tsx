import React from "react";
import { useSpring, animated } from "react-spring";
import ProjectList from "../data/ProjectsInfo";
import ProjectLittleFrame from "./ProjectLittleFrame";
import Typing from "./Typing";

const Projects: React.FC<{ inside: () => void; outside: () => void }> = ({
  inside,
  outside,
}) => {
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
        <div className="flex justify-center 2xl:mt-10 2xl:mb-10 mt-5 mb-5">
          <Typing
            delay={40}
            styleElem="text-eerie font-Poppins 2xl:text-3xl xl:text-xl text-sm font-bold"
            text="All my projects"
          />
        </div>
        <div
          className="2xl:h-[550px] xl:h-[450px] md:h-64 sm:h-48 h-32 grid grid-cols-3 bg-vanilla/15 overflow-y-scroll z-20 rounded-lg"
          onMouseEnter={inside}
          onMouseLeave={outside}
        >
          {Object.keys(ProjectList).map((prj, ind) => {
            const prData = ProjectList[prj];
            const {
              name,
              githubLink,
              image,
              status,
              id,
              isComplete,
              date,
              description,
            } = prData;
            let colorStatus = "text-vanilla";
            switch (isComplete) {
              case undefined:
                colorStatus = "text-aqua";
                break;
              case true:
                colorStatus = "text-green-600";
                break;
              case false:
                colorStatus = "text-red-600";
                break;
              case null:
                colorStatus = "text-sky-400";
                break;
              default:
                colorStatus = "text-vanilla";
                break;
            }
            if (
              status === "If you're on the site now,\n it's probably working"
            ) {
              colorStatus = "text-vanilla";
            }

            return (
              <ProjectLittleFrame
                img={image}
                name={name}
                status={status}
                colorStatus={colorStatus}
                key={ind}
                id={id}
                githubLink={githubLink}
                date={date}
                description={description}
              />
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
        <div className="flex justify-center 2xl:mt-10 2xl:mb-10 mt-5 mb-5">
          <Typing
            delay={40}
            styleElem="text-eerie font-Poppins text-xl font-bold"
            text="All my projects"
          />
        </div>
        <div
          className="h-80 w-72 flex items-center flex-col overflow-y-auto bg-vanilla/15 z-20 rounded-lg"
          onMouseEnter={inside}
          onMouseLeave={outside}
        >
          {Object.keys(ProjectList).map((prj, ind) => {
            const prData = ProjectList[prj];
            const {
              name,
              githubLink,
              image,
              status,
              id,
              isComplete,
              date,
              description,
            } = prData;
            let colorStatus = "text-vanilla";
            switch (isComplete) {
              case undefined:
                colorStatus = "text-aqua";
                break;
              case true:
                colorStatus = "text-green-600";
                break;
              case false:
                colorStatus = "text-red-600";
                break;
              case null:
                colorStatus = "text-sky-400";
                break;
              default:
                colorStatus = "text-vanilla";
                break;
            }
            if (
              status === "If you're on the site now,\n it's probably working"
            ) {
              colorStatus = "text-vanilla";
            }

            return (
              <ProjectLittleFrame
                img={image}
                name={name}
                status={status}
                colorStatus={colorStatus}
                key={ind}
                id={id}
                githubLink={githubLink}
                date={date}
                description={description}
              />
            );
          })}
        </div>
      </animated.div>
    );
  }
};

export default Projects;
