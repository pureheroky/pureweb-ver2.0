import React from "react";
import { useSpring, animated } from "react-spring";
import Typing from "./Typing";
import { getItem } from "../utils/getItem";

const About: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<string>("");

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  function generateRandomString(length: number) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  React.useEffect(() => {
    getItem("age", setAge, false);

    const interval = setInterval(() => {
      let name: string = generateRandomString(7);
      setName(name);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <animated.div
      style={props}
      className="w-full h-full flex items-center justify-center z-10 flex-col"
    >
      <div className="flex w-9/12 h-full items-start justify-center flex-col font-light font-Poppins text-sm md:text-3xl text-eerie md:text-center pr-4 pl-4">
        <div className="flex w-full justify-center md:mb-4 xl:mt-0">
          <Typing
            delay={40}
            styleElem="text-eerie font-Poppins text-xl md:text-3xl font-bold"
            text="About"
          />
        </div>
        <div className="flex items-start justify-start text-start z-10 flex-col p-4">
          <span className="m-1 sm:m-3 flex flex-row">
            <Typing text="Name: " delay={30} styleElem="font-bold" />
            <div>&nbsp;</div>
            <div className="italic font-semibold">{name}</div>
            <div hidden>Arseniy</div>
          </span>
          <span className="m-1 sm:m-3">
            <Typing text="Age: " delay={30} styleElem="font-bold" />
            <Typing text={age} delay={30} styleElem=" font-semibold" />
          </span>
          <span className="m-1 sm:m-3">
            <Typing text="Hometown: " delay={30} styleElem="font-bold" />
            <Typing
              text="Penza, Russia"
              delay={30}
              styleElem=" font-semibold"
            />
          </span>
          <span className="m-1 sm:m-3">
            <Typing text="Education: " delay={30} styleElem="font-bold" />
            <Typing
              text="secondary education
            in software engineering/programming."
              delay={30}
              styleElem=" font-semibold"
            />
          </span>
          <span className="m-1 sm:m-3">
            <Typing
              text="Experience in programming: "
              delay={30}
              styleElem="font-bold"
            />
            <Typing
              text="starting from 2018, about 4-5 years."
              delay={30}
              styleElem=" font-semibold"
            />
          </span>
          <span className="m-1 sm:m-3">
            <Typing
              text="Communication languages: "
              delay={30}
              styleElem="font-bold"
            />
            <Typing
              text="english, russian."
              delay={30}
              styleElem=" font-semibold"
            />
          </span>
          <span className="m-1 sm:m-3 flex flex-col w-full items-start">
            <Typing text="About: " delay={30} styleElem="font-bold" />
            <Typing
              text="I started my journey into programming by mastering Python as the most
          mainstream language at that time, after familiarizing myself with the
          Django/Flask frameworks and others, I decided to switch to full-stack
          development, which I continue to do to this day."
              delay={5}
              styleElem="mt-3 text-start font-semibold"
            />
          </span>
        </div>
      </div>
    </animated.div>
  );
};

export default About;
