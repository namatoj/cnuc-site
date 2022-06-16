import { useEffect, useState } from "react";
import styles from "./bar.module.css";

// Function to return list of random values between 0 and 1 of lenght size
function getRandomValues(size) {
  const values = [];
  for (let i = 0; i < size; i++) {
    values.push(Math.random());
  }
  return values;
}

export default function Bar({ children }) {

  const [sections, setSections] = useState([]);
  const barHeight = 30

  const [minSpeed, setMinSpeed] = useState(0);
  const [maxSpeed, setMaxSpeed] = useState(0);

  useEffect(() => {
    const scrollMaxY = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const minSpeed =
      (window.innerHeight - barHeight) / (scrollMaxY );

    const maxSpeed = 4 * minSpeed

    const numberOfSections = document.documentElement.clientWidth / 60

    const speedList = getRandomValues(numberOfSections) 
    const min = Math.min(...speedList)

    const speedList2 = speedList.map(speed => speed - min)

    const max = Math.max(...speedList2)
    const speedList3 = speedList2.map(speed => speed / max)

    setSections(speedList3);
  }, []);

  const onResize = () => {
    const scrollMaxY = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const min =
      (window.innerHeight - barHeight) / (scrollMaxY );

    setMinSpeed(min)
    setMaxSpeed(4 * min )
  }

  useEffect(() => {
    onResize()

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);

  }, []);

  return (
    <div className={styles.bar}>
      {sections.map((section, index) => {

        return (
          <Section
            key={section}
            speed={section * (maxSpeed - minSpeed) + minSpeed}
            style={{
              left: `${(index / sections.length) * 100}%`,
              width: `${Math.random() * 10 + 100 / sections.length}%`,
              height: 40,
            }}
          />
        );
      })}
    </div>
  );
}

function Section({ speed, style }) {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    setScrollY(window.scrollY);

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const baseHeight = 30;
  // const speedScale = 2.9;

  const calculateTop = (speed) => {
    const top = scrollY  * speed;


    if (top > window.innerHeight - baseHeight) {
      return window.innerHeight - baseHeight;
    } else {
      return top;
    }
  };

  const calculateHeight = () => {
    return baseHeight;
  };

  return (
    <div
      className={styles.section}
      style={{ ...style, top: calculateTop(speed), height: calculateHeight() }}
    ></div>
  );
}
