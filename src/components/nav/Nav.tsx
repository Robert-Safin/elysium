"use client";
import Image from "next/image";
import Kettlebell from "./Kettlebell";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const Nav = () => {
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const colors = {
    themeRed: "#FF1B1B",
    themePurple: "#C082FF",
    themeYellow: "#EDF738",
    themeBlue: "#3E6DD9",
    themeOrange: "#FF8A00",
    themeGray: "#E8E8E8",
  };

  let color = colors.themeRed;

  if (y < 100) {
    color = colors.themeRed;
  } else if (y < 200) {
    color = colors.themePurple;
  } else if (y < 300) {
    color = colors.themeYellow;
  } else if (y < 400) {
    color = colors.themeBlue;
  } else if (y < 500) {
    color = colors.themeOrange;
  } else if (y > 600) {
    color = colors.themeGray;
  }
  return (
    <div className="sticky top-2 md:top-4 lg:top-14 w-full">
      <div className="flex justify-between items-center z-10 bg-black h-[24px] py-4">
        <Logo color={color} />
        <Kettlebell color={color} />
      </div>
    </div>
  );
};

export default Nav;
