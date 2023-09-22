import Image from "next/image";

const Purple = () => {
  return (
    <div className="relative mb-60 lg:mb-80">
      <h1 className="sectionSubHeader text-themePurple">GYM AREAS</h1>

      <div className="relative flex justify-end px-3 mt-10">
        <Image
          src="/icon/pruple/rope.svg"
          alt=""
          width={1000}
          height={1000}
          className="z-10
    w-[330px] h-[320px]
    lg:w-[600px] lg:h-[700px]"
        />
        <Image
          src="/icon/pruple/plate.svg"
          alt=""
          width={1000}
          height={1000}
          className="-z-10 absolute
    w-[73px] h-[73px]
    lg:w-[130px] lg:h-[130px]
    top-20 lg:top-52
    animate-spin
    "
        />

        <p
          className="absolute top-12 right-[65px] sectionHeader text-themePurple text-right
lg:top-[148px] lg:right-[92px]
        "
        >
          TRAINING
        </p>
        <p
          className="absolute top-20 right-[100px] sectionHeader text-themePurple text-left
lg:top-[198px] lg:right-[150px]
        "
        >
          CONDITIONING
        </p>
        <p
          className=" z-50 absolute top-28 right-[65px] sectionHeader text-themePurple text-right
lg:top-[248px] lg:right-[92px]

        "
        >
          FITNESS
          <span
            className="-z-10 absolute w-7 h-7 bg-black -right-2 -top-1
          lg:-right-0 lg:w-12 lg:h-12
          "
          />
        </p>
        <p
          className=" absolute top-36 right-[100px] sectionHeader text-themePurple text-left
lg:top-[298px] lg:right-[150px]
        "
        >
          RECOVERY
        </p>
      </div>

      <div className="absolute -bottom-40 sm:-bottom-24 flex w-full">
        <div className="flex">
          <div className="bg-themePurple w-16 opacity-25 h-[1px] mt-2 mr-2" />
          <div className="w-1/2">
            <h1 className="areaType text-themePurple mb-2">open gym</h1>
            <p className="areaText text-themePurple">
              Welcome to Gym Zone: Your personal fitness haven, where you
              dictate the space, the routine, and the rules.{" "}
            </p>
            <h2 className="hoursHeader text-themePurple mt-8">OPENING HOURS</h2>
            <p className="hoursText text-themePurple">MON-FRI: 6AM-9PM</p>
            <p className="hoursText text-themePurple">SAT-SUN: 8AM-6PM</p>
            <p className="bg-themePurple w-fit mt-1 font-PoppinsSemiBold text-[8px] uppercase">
              Strength. cardio. functional.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="bg-themePurple w-16 opacity-25 h-[1px] mt-2 mr-2" />
          <div className="w-1/2">
            <h1 className="areaType text-themePurple mb-2">recovery spa</h1>
            <p className="areaText text-themePurple">
              Find all the amenities for optimum recovery. Hot Cold Therapy
              suitable for newbies all the way to the seasoned ice kings and
              queens.{" "}
            </p>
            <h2 className="hoursHeader text-themePurple mt-8">OPENING HOURS</h2>
            <p className="hoursText text-themePurple">MON-FRI: 6AM-9PM</p>
            <p className="hoursText text-themePurple">SAT-SUN: 8AM-6PM</p>
            <p className="bg-themePurple w-fit mt-1 font-PoppinsSemiBold text-[8px]">
              STEAM, SOAK, AND RELAXATION.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purple;
