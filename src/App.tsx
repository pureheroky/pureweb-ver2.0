import * as React from "react";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Skills from "./components/Skills";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import Projects from "./components/Projects";
import hi from "./images/hi.gif";
import CloseIcon from "@mui/icons-material/Close";
import ComputerDetect from "./utils/ComputerDetect";
import MobileDetect from "./utils/MobileDetect";
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

function App() {
  const [page, setCurrentPage] = React.useState<number>(0);
  const [dialog, showDialog] = React.useState<boolean>(false);
  const [image, isImage] = React.useState<boolean>(true);

  const currcircle = (
    <CircleRoundedIcon className="!text-xs xl:!text-xl text-vanilla/50" />
  );
  const emptycircle = (
    <CircleRoundedIcon className="!text-xs xl:!text-xl text-vanilla/25" />
  );

  React.useEffect(() => {
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

  const showDialogWindow = () => {
    showDialog(!dialog);
  };

  const close = () => {
    showDialog(false);
    isImage(false);
  };

  const components = [
    <Welcome />,
    <About />,
    <Skills inside={InsideSkills} outside={OutsideSkills} />,
    <Projects inside={InsideProjects} outside={OutsideProjects} />,
  ];

  const getDirection = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY < 0) {
      setPageForward()
    } else {
      setPageBackward()
    }
  };

  const setPageForward = () => {
    if (page < 3) {
      const nextPage = page + 1;
      setCurrentPage(nextPage);
      setCircles(pages[nextPage]);
    }
  };

  const setPageBackward = () => {
    if (page > 0) {
      const nextPage = page - 1;
      setCurrentPage(nextPage);
      setCircles(pages[nextPage]);
    }
  }

  return (
    <div
      className="w-full h-full"
      style={{ overflowY: "hidden" }}
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
          <ComputerDetect>
            <div className="flex flex-row justify-center bg-black bg-opacity-20 items-end pb-4 mt-auto">
              {circles.map((el, ind) => {
                return (
                  <div key={ind} className="p-2">
                    {el}
                  </div>
                );
              })}
            </div>
          </ComputerDetect>
          <MobileDetect>
            <div className="w-full absolute bottom-0 items-end flex flex-row mb-8 justify-center mt-auto gap-32">
              <div onClick={setPageBackward} className="text-eerie">
                <ArrowBackIosNewOutlined />
              </div>
              <div onClick={setPageForward} className="text-eerie">
                <ArrowForwardIosOutlined />
              </div>
            </div>
          </MobileDetect>
        </div>
      </div>

      <ComputerDetect>
        <div className="absolute bottom-0 right-0">
          {image ? (
            <div>
              <img
                alt="bruh"
                className="w-24 cursor-pointer"
                onClick={() => {
                  showDialogWindow();
                }}
                src={hi}
              ></img>
              {dialog ? (
                <div className="absolute flex flex-col items-end bottom-full right-full w-52 h-24 bg-vanilla rounded-xl">
                  <div onClick={close}>
                    <CloseIcon className="cursor-pointer" />
                  </div>
                  <div className="w-full flex items-center flex-col text-center h-full font-Poppins text-sm font-bold text-eerie-black">
                    don't forget to follow my tg pls...{" "}
                    <a
                      href="https://t.me/psychopure"
                      className=" text-blue-500"
                    >
                      psychopure
                    </a>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </ComputerDetect>
    </div>
  );
}

export default App;
