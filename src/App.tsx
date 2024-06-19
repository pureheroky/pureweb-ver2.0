import * as React from "react";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Skills from "./components/Skills";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import Projects from "./components/Projects";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

function App() {
  const [page, setCurrentPage] = React.useState(0);

  const currcircle = (
    <CircleRoundedIcon className="!text-xs xl:!text-xl text-vanilla/50" />
  );
  const emptycircle = (
    <CircleRoundedIcon className="!text-xs xl:!text-xl text-vanilla/25" />
  );

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

  const firstPage = [currcircle, emptycircle, emptycircle, emptycircle];
  const secondPage = [emptycircle, currcircle, emptycircle, emptycircle];
  const thirdPage = [emptycircle, emptycircle, currcircle, emptycircle];
  const fourthPage = [emptycircle, emptycircle, emptycircle, currcircle];
  const [cursorInsideProjects, setCursorInsideProjects] = React.useState(false);
  const [cursorInsideSkills, setCursorInsideSkills] = React.useState(false);

  const pages = [firstPage, secondPage, thirdPage, fourthPage];

  const [circles, setCircles] = React.useState(firstPage);

  const InsideProjects = () => {
    setCursorInsideProjects(true);
  };

  const OutsideProjects = () => {
    setCursorInsideProjects(false);
  };

  const InsideSkills = () => {
    setCursorInsideSkills(true);
  };

  const OutsideSkills = () => {
    setCursorInsideSkills(false);
  };

  const components = [
    <Welcome />,
    <About />,
    <Skills inside={InsideSkills} outside={OutsideSkills} />,
    <Projects inside={InsideProjects} outside={OutsideProjects} />,
  ];

  function getDirection(e: React.WheelEvent<HTMLDivElement>) {
    if (e.deltaY < 0) {
      if (page < 3) {
        const nextPage = page + 1;
        setCurrentPage(nextPage);
        setCircles(pages[nextPage]);
      }
    } else {
      if (page > 0) {
        const nextPage = page - 1;
        setCurrentPage(nextPage);
        setCircles(pages[nextPage]);
      }
    }
  }

  if (!isMobile) {
    return (
      <div
        className="w-full h-full"
        style={{ overflowY: "auto" }}
        onWheel={(e) => {
          if (cursorInsideProjects) return;
          else if (cursorInsideSkills) return;
          getDirection(e);
        }}
      >
        <div className="w-full overflow-hidden h-full flex items-center justify-center bg-gradient-to-r from-[#bbbeec] to-[#7763cb] flex-col animated-gradient-bg">
          <div className="relative w-full h-full flex flex-col">
            <div className="w-full h-full inset-0 bg-black bg-opacity-20 items-center justify-center">
              {components[page]}
            </div>
            <div className="flex flex-row justify-center bg-black bg-opacity-20 items-end xl:pb-4 mt-auto">
              {circles.map((el, ind) => {
                return (
                  <div key={ind} className="p-2">
                    {el}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="w-full h-full flex flex-row"
        style={{ overflowY: "auto" }}
      >
        <div
          className="absolute left-0 h-full flex items-center z-50 text-vanilla"
          onClick={() => {
            if (page > 0) {
              const nextPage = page - 1;
              setCurrentPage(nextPage);
              setCircles(pages[nextPage]);
            }
          }}
        >
          <NavigateBeforeIcon />
        </div>
        <div className="w-full overflow-hidden h-full flex items-center justify-center bg-gradient-to-r from-[#bbbeec] to-[#7763cb] flex-col animated-gradient-bg">
          <div className="relative w-full h-full flex flex-col">
            <div className="w-full h-full inset-0 bg-black bg-opacity-20 items-center justify-center">
              {components[page]}
            </div>
            <div className="flex flex-row justify-center bg-black bg-opacity-20 items-end xl:pb-4 mt-auto">
              {circles.map((el, ind) => {
                return (
                  <div key={ind} className="p-2">
                    {el}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="absolute right-0 h-full flex items-center z-50 text-vanilla"
          onClick={() => {
            if (page < 3) {
              const nextPage = page + 1;
              setCurrentPage(nextPage);
              setCircles(pages[nextPage]);
            }
          }}
        >
          <NavigateNextIcon />
        </div>
      </div>
    );
  }
}

export default App;
