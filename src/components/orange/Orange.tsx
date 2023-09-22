"use client";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Waypoint } from "react-waypoint";
const Orange = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="relative w-full  flex flex-col justify-center mt-40 overflow-hidden pb-20">
      <div
        className="relative mx-auto  w-[217px] h-[217px]
      lg:w-[388px] lg:h-[388px]"
      >
        <Waypoint
          onEnter={() => setIsVisible(true)}
          onLeave={() => setIsVisible(false)}
        >
          <Image
            src="/icon/orange/wheel.svg"
            alt=""
            width={200}
            height={200}
            className={`w-[217px] h-[217px]
          lg:w-[388px] lg:h-[388px]
 ${isVisible ? "animate-rollInFromRight" : ""}
      `}
          />
        </Waypoint>
        <h1
          className="absolute top-[80px] readyTo text-themeOrange w-[280px]
        lg:w-[600px]
        lg:-left-[200px]
        "
        >
          READY TO JOIN US?
        </h1>
        <p
          className="absolute readySubHeader top-[110px] -left-4 bg-themeOrange w-[222px]
        lg:w-[515px]
        lg:-left-[250px] lg:top-[130px]
        2xl:w-[480px]
        "
        >
          BE PART OF THE ELYSIUM FAMILY
        </p>

        <div className="w-full flex justify-center">
          <div
            className="relative -mt-6 -ml-20 w-fit group
          lg:-top-36 lg:-left-[250px]
          "
          >
            <div className="absolute w-full border border-themeOrange rounded-full h-full translate-x-3 translate-y-3" />

            <div className="readyButton rounded-full bg-themeOrange flex items-center py-2 px-6 transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3">
              <p className="mr-2">SIGN UP NOW</p>
              <MdOutlineNavigateNext className="text-5xl w-10 h-10 -mx-3  text-black" />
              <MdOutlineNavigateNext className="text-5xl w-10 h-10 -mx-3  text-black" />
              <MdOutlineNavigateNext className="text-5xl w-10 h-10 -mx-3  text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orange;
