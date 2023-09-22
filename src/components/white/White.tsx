"use client";
import Image from "next/image";
import { useState } from "react";
import { Waypoint } from "react-waypoint";
const White = () => {
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const [ballsIsVisible, setBallsIsVisible] = useState(false);

  return (
    <div className="relative flex flex-col w-full mb-10 lg:mb-20">
      <p className="sectionSubHeader text-themeGray mb-2">CLASSES</p>
      <h1 className="sectionHeader text-themeGray ml-4">INSTRUCTED</h1>
      <h1 className="sectionHeader text-themeGray ml-4 mb-6">GROUP WORKOUTS</h1>

      <Waypoint
        onEnter={() => setBallsIsVisible(true)}

      >
        <div>
          <Image
            src="/icon/gray/ball.svg"
            width={242}
            height={242}
            alt=""
            className={`absolute top-20 left-20
        lg:w-[350px] lg:h-[350px] lg:top-28
        lg:left-0
        2xl:w-[450px] 2xl:h-[450px]
        -z-10 ${ballsIsVisible? "animate-rollInFromLeft1":""}
        `}
          />
          <Image
            src="/icon/gray/ball.svg"
            width={242}
            height={242}
            alt=""
            className={`absolute top-20 -left-20
        lg:w-[350px] lg:h-[350px] lg:top-28
        lg:-left-60
        2xl:w-[450px] 2xl:h-[450px]
        -z-10 ${ballsIsVisible? "animate-rollInFromLeft2":""}
        `}
          />
        </div>
      </Waypoint>

      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col" id="arrowTarget">
            <Image
              src="/img/classes/class3.png"
              alt=""
              width={1000}
              height={1000}
              className="w-[255px] h-[183px] object-cover
            md:w-[255px] md:h-[203px]
            lg:w-[416px] lg:h-[296px]
            2xl:w-[504px] 2xl:h-[359px]

            "
            />
            <div className="flex items-center mt-1">
              <Image
                src="/icon/gray/class2.svg"
                width={50}
                height={50}
                alt=""
                className="w-[34px] h-[34px]
            md:-[42px] md:h-[42px] mt-[2px]"
              />
              <p className="workoutClass text-themeGray">BOXING</p>
            </div>
            <div className="flex space-x-[10px]">
              <p className="workoutTag bg-themeGray px-2 p-[3px] rounded-sm">
                cardio
              </p>
              <p className="workoutTag bg-themeGray px-2 p-[3px] rounded-sm">
                agility
              </p>
              <p className="workoutTag bg-themeGray px-2 p-[3px] rounded-sm">
                endurance
              </p>
              <p className="workoutTag bg-themeGray px-2 p-[3px] rounded-sm">
                sparring
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <Image
              src="/img/classes/class1.png"
              alt=""
              width={1000}
              height={1000}
              className="w-[255px] h-[183px] object-cover
            md:w-[255px] md:h-[203px]
            lg:w-[416px] lg:h-[296px]
            2xl:w-[504px] 2xl:h-[359px]
            "
            />
            <div className="flex items-center mt-1">
              <Image
                src="/icon/gray/class1.svg"
                width={50}
                height={50}
                alt=""
                className="w-[34px] h-[34px]
            md:-[42px] md:h-[42px] mb-[2px]"
              />
              <p className="workoutClass text-themeGray"> HIIT TRAINING</p>
            </div>
            <div className="flex space-x-[10px]">
              <p className="workoutTag bg-themeGray px-2 p-[3px] rounded-sm">
                high-intensity
              </p>
              <p className="workoutTag bg-themeGray px-2 p-[3px] rounded-sm">
                full-body
              </p>
              <p className="workoutTag bg-themeGray px-2 p-[3px] rounded-sm">
                energetic
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <Image
              src="/img/classes/class2.png"
              alt=""
              width={1000}
              height={1000}
              className="w-[255px] h-[183px] object-cover
            md:w-[255px] md:h-[203px]
            lg:w-[416px] lg:h-[296px]
            2xl:w-[504px] 2xl:h-[359px]
            "
            />
            <div className="flex items-center mt-1">
              <Image
                src="/icon/gray/class3.svg"
                width={50}
                height={50}
                alt=""
                className="w-[34px] h-[34px]
            md:-[42px] md:h-[42px] mb-[2px]"
              />
              <p className="workoutClass text-themeGray">SPIN CLASS</p>
            </div>
            <div className="flex space-x-[10px]">
              <p className="workoutTag bg-themeGray px-2 p-[3px] rounded-sm">
                cardio
              </p>
              <p className="workoutTag bg-themeGray px-2 p-[3px] rounded-sm">
                cycling
              </p>
              <p className="workoutTag bg-themeGray px-2 p-[3px] rounded-sm">
                energetic
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <Image
              src="/img/classes/class4.png"
              alt=""
              width={1000}
              height={1000}
              className="w-[255px] h-[183px] object-cover
            md:w-[255px] md:h-[203px]
            lg:w-[416px] lg:h-[296px]
            2xl:w-[504px] 2xl:h-[359px]
            "
            />
            <div className="flex items-center mt-1">
              <Image
                src="/icon/gray/class4.svg"
                width={50}
                height={50}
                alt=""
                className="w-[34px] h-[34px]
            md:-[42px] md:h-[42px] mt-[6px] md:mt-[10px]"
              />
              <p className="workoutClass text-themeGray">STRENGTH</p>
            </div>
            <div className="flex space-x-[10px]">
              <p className="workoutTag bg-themeGray px-2 p-[3px] rounded-sm">
                resistance
              </p>
              <p className="workoutTag bg-themeGray px-2 p-[3px] rounded-sm">
                weights
              </p>
              <p className="workoutTag bg-themeGray px-2 p-[3px] rounded-sm">
                lifting
              </p>
            </div>
          </div>
          <div />
          <div className="flex lg:justify-end">
            <Waypoint
              onEnter={() => setIsBoxVisible(true)}
              onLeave={() => setIsBoxVisible(false)}
            >
              <button
                className="relative button text-themeGray rounded-full border w-[270px] py-4 mt-20 group

      "
              >
                SCHEDULE A CLASS
                <Image
                  src="/icon/gray/box.svg"
                  alt=""
                  width={1000}
                  height={1000}
                  className={
                    "absolute -z-10 w-[160px] h-[160px] bottom-0 -right-20 sm:bottom-2 sm:-right-32 transition-all duration-1000 " +
                    (isBoxVisible ? "animate-rotateAndTranslateBox " : "")
                  }
                  style={{ animationFillMode: "forwards" }}
                />
              </button>
            </Waypoint>
          </div>
        </div>
      </div>
    </div>
  );
};

export default White;
