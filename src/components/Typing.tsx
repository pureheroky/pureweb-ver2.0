import React, { useState, useEffect } from "react";

export default function Typing({
  text,
  delay,
  styleElem,
  clickable,
  url,
}: {
  text: string;
  delay: number;
  styleElem: string;
  clickable?: boolean;
  url?: string;
}) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  if (clickable) {
    return (
      <span
        className={`hover:font-bold cursor-pointer ${styleElem}`}
        onClick={() => {
          if (url !== undefined) {
            let a = document.createElement("a");
            a.target = "_blank";
            a.href = url
            a.click();
          }
        }}
      >
        {currentText}
      </span>
    );
  }
  return <span className={styleElem}>{currentText}</span>;
}
