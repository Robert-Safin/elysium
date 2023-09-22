"use client";
import Image from "next/image";
import Kettlebell from "./Kettlebell";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const Nav = () => {
  const [y, setY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleScroll = () => {
      setY(window.scrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const colors = {
    themeRed: "#FF1B1B",
    themeGray: "#E8E8E8",
    themePurple: "#C082FF",
    themeBlue: "#3E6DD9",
    themeYellow: "#EDF738",
    themeOrange: "#FF8A00",
  };

  const getBreakpoint = () => {
    if (windowWidth <= 600) {
      // Mobile
      return [500, 1900, 2400, 3100, 10000, 10000];
    } else if (windowWidth <= 1024) {
      // Tablet
      return [500, 1900, 2400, 3000, 10000, 10000];
    } else {
      // Desktop and up
      return [650, 1800, 2800, 4200, 10000, 10000];
    }
  };

  const breakpoints = getBreakpoint();

  let color = colors.themeRed;

  if (y < breakpoints[0]) {
    color = colors.themeRed;
  } else if (y < breakpoints[1]) {
    color = colors.themeGray;
  } else if (y < breakpoints[2]) {
    color = colors.themePurple;
  } else if (y < breakpoints[3]) {
    color = colors.themeBlue;
  } else if (y < breakpoints[4]) {
    color = colors.themeYellow;
  } else if (y >= breakpoints[5]) {
    color = colors.themeOrange;
  }

  return (
    <div className="sticky top-2 md:top-4 lg:top-14 w-full  py-2">
      <div className="flex justify-between items-center z-50  h-[24px] py-4">
        <Logo color={color} />
        <Kettlebell color={color} />
      </div>
    </div>
  );
};

export default Nav;
