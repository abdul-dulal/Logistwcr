/* eslint-disable react/prop-types */

import { useEffect, useState, useRef } from "react";

const ProgressBar = ({ datacount, title }) => {
  const [width, setWidth] = useState(0);
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef(null);
  const counterRef = useRef(counter);

  useEffect(() => {
    const handleScroll = () => {
      if (barRef.current) {
        const elementTop = barRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [""]);

  useEffect(() => {
    if (isVisible) {
      loadSkills();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const loadSkills = () => {
    setWidth(datacount);

    if (counterRef.current === 0) {
      let start = 0;
      const duration = 3000;
      const stepTime = Math.abs(Math.floor(duration / datacount));

      const timer = setInterval(() => {
        start += 1;
        setCounter(start);
        counterRef.current = start;

        if (start === datacount) {
          clearInterval(timer);
        }
      }, stepTime);
    }
  };

  return (
    <div ref={barRef} className="mb-4">
      <div className="flex justify-between">
        <h4 className="text-xl  text-secondary leading-[24px] font-semibold mb-[14px] capitalize">
          {title}
        </h4>
        <span className="text-xl text-black font-semibold">{counter}%</span>
      </div>
      <div className="relative w-full bg-secondary   h-[19px]  overflow-hidden mb-8">
        <div
          className={` absolute top-0 h-full bg-primary  transition-transform  ease-in-out`}
          style={{
            transitionDuration: "3s",
            width: `${width}%`,
            transform: isVisible ? `translateX(0) ` : `translateX(-100%)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
