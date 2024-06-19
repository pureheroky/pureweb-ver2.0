import React from "react";
import PRWindow from "./ProjectWindow";

const ProjectLittleFrame: React.FC<{
  img: string;
  name: string;
  colorStatus: string;
  status: string;
  id: number;

  githubLink: string;
  date: string;
  description: string;
  websitelink: string | undefined;
}> = ({
  img,
  name,
  colorStatus,
  status,
  id,
  githubLink,
  date,
  description,
  websitelink,
}) => {
  const Display = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const id = e.currentTarget.id;
    const elem = document.getElementById("child" + id) as HTMLDivElement;
    elem.style.display = "flex";
  };
  const Hide = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const id = e.currentTarget.id;
    const elem = document.getElementById("child" + id) as HTMLDivElement;
    elem.style.display = "none";
  };

  const [project, setProject] = React.useState(<></>);
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

  const openProject = () => {
    setProject(
      <PRWindow
        name={name}
        description={description}
        date={date}
        url={githubLink}
        image={img}
        close={Close}
        status={status}
        color={colorStatus}
        websitelink={websitelink}
      />
    );
  };

  const Close = () => {
    setProject(<></>);
  };

  if (!isMobile) {
    return (
      <div
        className="xl:m-4 m-1 md:m-2"
        id={`${id}`}
        onMouseEnter={(e) => {
          Display(e);
        }}
        onMouseLeave={(e) => {
          Hide(e);
        }}
      >
        <div
          className="sm:border shadow-lg cursor-pointer rounded-lg bg-cover bg-center 2xl:w-[420px] 2xl:h-52 xl:w-72 xl:h-40 md:w-52 md:h-28 sm:w-44 sm:h-24 w-32 h-[65px] flex items-center justify-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div
            id={`child${id}`}
            className="inset-0 flex-col justify-center items-center h-full font-Poppins text-vanilla w-full text-center bg-black bg-opacity-50 rounded-lg hidden font-semibold p-2"
            onClick={openProject}
          >
            <span className="xl:text-xl 2xl:text-3xl md:text-sm sm:text-xs text-[8px] 3xl:text-6xl text-center">
              {name}
            </span>
            <span className="flex flex-col items-center xl:mt-3 md:mt-1 2xl:text-2xl md:text-sm sm:text-[8px] text-[6px]">
              Current status:{" "}
              <span
                className={`${colorStatus} text-center 2xl:text-xl md:text-xs sm:text-[6px] text-[5px]`}
              >
                {status}
              </span>
            </span>
          </div>
        </div>
        {project}
      </div>
    );
  } else {
    return (
      <div
        className="xl:m-4 m-1 md:m-2 w-full h-full"
        id={`${id}`}
        onMouseEnter={(e) => {
          Display(e);
        }}
        onMouseLeave={(e) => {
          Hide(e);
        }}
      >
        <div
          className="sm:border shadow-lg cursor-pointer rounded-lg bg-cover bg-center w-full h-32 flex items-center justify-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div
            id={`child${id}`}
            className="inset-0 flex-col justify-center items-center h-full font-Poppins text-vanilla w-full text-center bg-black bg-opacity-50 rounded-lg hidden font-semibold p-2"
          >
            <span className="text-xl text-center">{name}</span>
            <span className="flex flex-col items-center xl:mt-3 md:mt-1 text-sm">
              Current status:{" "}
              <span className={`${colorStatus} text-center text-sm`}>
                {status}
              </span>
              <span onClick={() => window.open(githubLink)} className="text-sm">
                see project here
              </span>
            </span>
          </div>
        </div>
        {project}
      </div>
    );
  }
};

export default ProjectLittleFrame;
