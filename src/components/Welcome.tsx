import React from "react";
import xd from "../images/xd.gif";
import { useSpring, animated } from "react-spring";
import Typing from "./Typing";
import { getItem } from "../utils/getItem";
import ComputerDetect from "../utils/ComputerDetect";

const Welcome: React.FC = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 },
  });
  const [username, setUsername] = React.useState<string>("");
  const [tglink, setTglink] = React.useState<string>("");
  const [gitlink, setGitlink] = React.useState<string>("");
  const [image, setImage] = React.useState<string>("");
  const [age, setAge] = React.useState<string>("");
  const [status, setStatus] = React.useState<string>("");

  React.useEffect(() => {
    getItem("image", setImage, true, "client", "1");
    getItem("username", setUsername, false);
    getItem("gitlink", setGitlink, false);
    getItem("tglink", setTglink, false);
    getItem("age", setAge, false);
    getItem("status", setStatus, false);
  }, []);

  const getUserStatus = () => {
    if (status === "true") {
      return "employed";
    } else {
      return "unemployed";
    }
  };
  return (
    <animated.div
      style={props}
      className="w-full h-full flex items-center justify-center z-10 flex-col text-eerie"
    >
      <div className="flex items-end justify-end">
        <div className="pl-6 pr-6">
          {image ? (
            <img
              src={`${image}`}
              className="rounded-full w-52 sm:w-72 border-black-blue-dark-darker shadow-3xl"
              alt="avatar"
            ></img>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <img src={xd} alt="bruh" className="absolute w-24 sm:w-36"></img>
      </div>
      <div className="mt-5 flex flex-col items-center text-center">
        <Typing
          text={username}
          delay={40}
          styleElem="text-black-blue-dark-darker font-Poppins text-3xl font-bold"
        />
        <Typing
          text={`${age} y.o fullstack developer`}
          delay={40}
          styleElem="text-black-blue-dark-darker pt-2 font-Poppins text-xl font-semibold "
        />

        <div className="flex flex-col">
          <Typing
            text="socials:"
            delay={40}
            styleElem="font-Poppins text-xl font-semibold pt-6 pb-2"
          />
          <Typing
            text="t.me/psychopure"
            delay={40}
            styleElem="font-Poppins text-xl"
            clickable={true}
            url={tglink}
          />
          <Typing
            text="github.com/pureheroky"
            delay={40}
            styleElem="font-Poppins text-xl"
            clickable={true}
            url={gitlink}
          />
          <div className="flex flex-row justify-center">
            <Typing
              text="status:&nbsp;"
              delay={40}
              styleElem="font-Poppins text-xl font-semibold pt-5"
            />
            {status === "true" ? (
              <Typing
                text={getUserStatus()}
                delay={40}
                styleElem="font-Poppins text-xl font-semibold pt-5 text-green-500"
              />
            ) : (
              <Typing
                text={getUserStatus()}
                delay={40}
                styleElem="font-Poppins text-xl font-semibold pt-5 text-red-500"
              />
            )}
          </div>
        </div>

        <ComputerDetect>
          <Typing
            text="scroll up to reveal other information"
            delay={40}
            styleElem="text-black-blue-dark-darker pt-24 font-Poppins text-xl font-semibold"
          />
        </ComputerDetect>
      </div>
    </animated.div>
  );
};

export default Welcome;
