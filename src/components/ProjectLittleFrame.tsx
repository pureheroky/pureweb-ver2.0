import React from "react";
import PRWindow from "./ProjectWindow";
import { getItem } from "../utils/getItem";
import ComputerDetect from "../utils/ComputerDetect";
import MobileDetect from "../utils/MobileDetect";

const ProjectLittleFrame: React.FC<{
  img: string;
  name: string;
  colorStatus: string;
  status: string;
  prjid: number;
  _id: string;
  githubLink: string;
  date: string;
  description: string;
  websitelink: string | undefined;
}> = ({
  _id,
  img,
  name,
  colorStatus,
  status,
  prjid,
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
  const [image, setImage] = React.useState<string>("a");

  React.useEffect(() => {
    getItem(_id, setImage, true, "projects", prjid.toString());

    return () => {};
  }, [project, image]);

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

  return (
    <div className="">
      <ComputerDetect>
        <div
          className="xl:m-4 m-1 md:m-2 h-min flex justify-center"
          id={`${prjid}`}
          onMouseEnter={(e) => {
            Display(e);
          }}
          onMouseLeave={(e) => {
            Hide(e);
          }}
          onClick={(e) => {
            Hide(e);
          }}
        >
          <div
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className={`sm:border shadow-lg cursor-pointer rounded-lg bg-center w-[420px] h-52 flex items-center justify-center`}
          >
            <div
              id={`child${prjid}`}
              className="inset-0 flex-col justify-center items-center h-full font-Poppins text-vanilla w-full text-center bg-black bg-opacity-50 rounded-lg hidden font-semibold p-2"
              onClick={openProject}
            >
              <span className="text-3xl text-center">{name}</span>
              <span className="flex flex-col items-center mt-3 text-2xl">
                Current status:{" "}
                <span className={`${colorStatus} text-center text-xl`}>
                  {status}
                </span>
              </span>
            </div>
          </div>
          {project}
        </div>
      </ComputerDetect>
      <MobileDetect>
        <div
          className="xl:m-4 m-1 md:m-2 h-min"
          id={`${prjid}`}
          onMouseEnter={(e) => {
            Display(e);
          }}
          onMouseLeave={(e) => {
            Hide(e);
          }}
        >
          <div
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className={`sm:border shadow-lg cursor-pointer rounded-lg bg-center w-full h-52 flex items-center justify-center`}
          >
            <div
              id={`child${prjid}`}
              className="inset-0 flex-col justify-center items-center h-full font-Poppins text-vanilla w-full text-center bg-black bg-opacity-50 rounded-lg hidden font-semibold p-2"
            >
              <span className="text-3xl text-center">{name}</span>
              <span className="flex flex-col items-center mt-3 text-2xl">
                Current status:{" "}
                <span className={`${colorStatus} text-center text-xl`}>
                  {status}
                </span>
              </span>
              <span className="mt-5 text-blue-500">
                <a href={githubLink}>git</a>
              </span>
            </div>
          </div>
        </div>
      </MobileDetect>
    </div>
  );
};

export default ProjectLittleFrame;
