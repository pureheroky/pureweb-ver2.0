import { animated, useSpring } from "react-spring";
import ComputerDetect from "../utils/ComputerDetect";
import MobileDetect from "../utils/MobileDetect";
import ProgressBar from "./ProgressBar";
import { useCallback, useEffect, useState } from "react";
import { getItem } from "../utils/getItem";
import Typing from "./Typing";

const Skills: React.FC<{ inside: () => void; outside: () => void }> = ({
  inside,
  outside,
}) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const [current, setCurrent] = useState<string>("");
  const [elements, setElements] = useState<string[]>([]);
  const [filteredElements, setFilteredElements] = useState<string[]>([]);
  const [skills, setSkills] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [grid, setGrid] = useState<number>(4);

  useEffect(() => {
    getItem("skills", setSkills, false).then(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (skills) {
      const skillsArray =
        skills
          .slice(1, -1)
          .match(/"[^"]+"|'[^']+'|\S+/g)
          ?.map((skill) => skill.replace(/'/g, "").trim()) || [];
      setElements(skillsArray);
      setFilteredElements(skillsArray);
    }
  }, [skills]);

  const changeGrid = useCallback(() => {
    const length = filteredElements.length;
    const newGrid = Math.max(1, Math.min(4, Math.ceil(length / 5)));
    setGrid(newGrid);
  }, [filteredElements]);

  useEffect(() => {
    changeGrid();
  }, [filteredElements, changeGrid]);

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchTerm = e.target.value.toLowerCase();
      setCurrent(searchTerm);

      const filtered = elements.filter((val) =>
        val.toLowerCase().includes(searchTerm)
      );

      setFilteredElements(filtered);

      if (elements.length > 0) {
        setProgress(Math.round((filtered.length / elements.length) * 100));
      }
    },
    [elements]
  );

  return (
    <animated.div
      style={props}
      className="w-full h-full flex items-center justify-center z-10 flex-col"
    >
      <div className="flex w-full justify-center mb-4 xl:mt-0">
        <Typing
          delay={40}
          styleElem="text-eerie font-Poppins text-xl md:text-3xl font-bold"
          text="Skills"
        />
      </div>
      <div className="flex w-full rounded-2xl justify-center mt-1 xl:mt-0">
        <input
          type="text"
          value={current}
          onChange={handleSearch}
          className="h-full w-80 p-4 text-2xl outline-none bg-vanilla/20 font-Poppins rounded-2xl shadow-md text-eerie font-semibold text-center"
          placeholder="Search"
        />
      </div>
      {loading ? (
        <ProgressBar progress={progress} />
      ) : (
        <div className="flex items-center justify-center w-full">
          <ComputerDetect>
            <div
              style={{ gridTemplateColumns: `repeat(${grid}, minmax(0, 1fr))` }}
              className="grid w-5/6 h-96 overflow-y-auto mt-4 bg-vanilla/15 z-20 rounded-lg"
              onMouseEnter={inside}
              onMouseLeave={outside}
            >
              {filteredElements.length > 0 ? (
                filteredElements.map((el, ind) => (
                  <div
                    key={ind}
                    className="flex items-center justify-center m-2 text-2xl font-Poppins font-semibold rounded-xl text-eerie shadow-md bg-vanilla/10 p-3 min-w-max"
                  >
                    {el}
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center w-full h-full text-2xl font-semibold font-Poppins text-eerie">
                  No results found
                </div>
              )}
            </div>
          </ComputerDetect>
          <MobileDetect>
            <div
              className="grid w-5/6 grid-cols-1 h-96 scrollable overflow-y-auto mt-4 bg-vanilla/15 z-20 rounded-lg overflow-x-hidden"
              onMouseEnter={inside}
              onMouseLeave={outside}
            >
              {filteredElements.length > 0 ? (
                filteredElements.map((el, ind) => (
                  <div
                    key={ind}
                    className="flex items-center justify-center m-2 text-2xl font-Poppins font-semibold rounded-xl text-eerie shadow-md bg-vanilla/10 p-3 min-w-max"
                  >
                    {el}
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center w-full h-full text-2xl font-semibold font-Poppins text-eerie">
                  No results found
                </div>
              )}
            </div>
          </MobileDetect>
        </div>
      )}
    </animated.div>
  );
};

export default Skills;
