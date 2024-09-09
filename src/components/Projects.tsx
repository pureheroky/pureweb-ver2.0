import React from "react";
import { useSpring, animated } from "react-spring";
import ProjectLittleFrame from "./ProjectLittleFrame";
import axios from "axios";
import Typing from "./Typing";
import ProgressBar from "./ProgressBar";
import AddProjectForm from "./setupProjectForm";
import ComputerDetect from "../utils/ComputerDetect";
import MobileDetect from "../utils/MobileDetect";

const Projects: React.FC<{ inside: () => void; outside: () => void }> = ({
  inside,
  outside,
}) => {
  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const [projects, setProjects] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [progress, setProgress] = React.useState<number>(0);
  const [addWindow, setAddwindow] = React.useState<boolean>(false);

  const initProjects = async () => {
    setLoading(true);
    setProgress(0);
    setProjects([]);
    const projectSet = new Set(projects);

    for (let i = 1; i < 8; i++) {
      const result = await axios.get(`https://akirakayoo.store/getproject/${i}`);
      if (!projectSet.has(result.data.data)) {
        projectSet.add(result.data.data);
      }
      setProgress(Math.round((i / 7) * 100));
    }

    setProjects(Array.from(projectSet));
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  React.useEffect(() => {
    initProjects();

    return () => {};
  }, []);

  return (
    <animated.div
      style={fade}
      className="w-full h-full flex items-center justify-start md:justify-center z-10 flex-col"
    >
      <div className="flex justify-center mt-10 mb-10">
        <Typing
          delay={40}
          styleElem="text-eerie font-Poppins text-xl md:text-3xl font-bold"
          text="All my projects"
        />
      </div>

      {loading ? (
        <ProgressBar progress={progress} />
      ) : (
        <div className="w-3/4">
          <ComputerDetect>
            <div
              className="h-[550px] grid grid-cols-3 bg-vanilla/5 overflow-y-scroll z-20 rounded-lg"
              onMouseEnter={inside}
              onMouseLeave={outside}
            >
              {projects.map((_, ind) => {
                return (
                  <ProjectLittleFrame
                    _id={projects[ind]["_id"]}
                    img={projects[ind]["image"]}
                    name={projects[ind]["name"]}
                    colorStatus="text-vanilla"
                    status={projects[ind]["prjstatus"]}
                    key={ind}
                    prjid={projects[ind]["id"]}
                    githubLink={projects[ind]["prjgitlink"]}
                    date={projects[ind]["prjdate"]}
                    description={projects[ind]["prjdesc"]}
                    websitelink={projects[ind]["prjweblink"]}
                  />
                );
              })}

              {addWindow ? (
                <div>
                  <AddProjectForm close={setAddwindow} />
                </div>
              ) : (
                <></>
              )}
            </div>
          </ComputerDetect>
          <MobileDetect>
            <div
              className="h-[460px] w-full grid grid-cols-1 scrollable bg-vanilla/15 overflow-y-scroll z-20 rounded-lg overflow-x-hidden"
              onMouseEnter={inside}
              onMouseLeave={outside}
            >
              {projects.map((_, ind) => {
                return (
                  <ProjectLittleFrame
                    _id={projects[ind]["_id"]}
                    img={projects[ind]["image"]}
                    name={projects[ind]["name"]}
                    colorStatus="text-vanilla"
                    status={projects[ind]["prjstatus"]}
                    key={ind}
                    prjid={projects[ind]["id"]}
                    githubLink={projects[ind]["prjgitlink"]}
                    date={projects[ind]["prjdate"]}
                    description={projects[ind]["prjdesc"]}
                    websitelink={projects[ind]["prjweblink"]}
                  />
                );
              })}
            </div>
          </MobileDetect>
        </div>
      )}
      {/* <ComputerDetect>
        <div
          className="font-Poppins text-2xl p-3 bg-vanilla/15 cursor-pointer mt-2 rounded-xl"
          onClick={() => {
            setAddwindow(!addWindow);
          }}
        >
          Add Project
        </div>
      </ComputerDetect> */}
    </animated.div>
  );
};

export default Projects;
