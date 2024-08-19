import React, { useState, useEffect, useCallback } from "react";

export default function Typing({
  text,
  delay,
  styleElem,
  clickable = false,
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

  const handleClick = useCallback(() => {
    if (url) {
      window.open(url, "_blank");
    }
  }, [url]);

  useEffect(() => {
    setCurrentText("");
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span
      className={`${
        clickable ? "hover:font-bold cursor-pointer" : ""
      } ${styleElem}`}
      onClick={clickable ? handleClick : undefined}
    >
      {currentText}
    </span>
  );
}
