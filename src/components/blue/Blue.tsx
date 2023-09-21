import Image from "next/image";

const Blue = () => {
  return (
    <>
      <div className=" flex  justify-center">
        <div
          className="relative w-[390px]   items-center
      lg:w-[980px]
      "
        >
          <Image
            src="/img/usain/Usain-Bolt 1.png"
            alt=""
            width={2000}
            height={2000}
            className="w-[390px] h-[172px] object-cover
      lg:h-[450px]
lg:w-[980px]

      "
          />
          <h1
            className="absolute  top-[60px] left-[40px] text-themeBlue quote
         lg:top-[150px] lg:left-[150px]
        "
          >
            I DON&apos;T <br /> THINK <br /> LIMITS.
          </h1>
          <h2
            className="absolute  top-[115px] left-[40px] bg-themeBlue w-fit usainBolt
        lg:top-[250px] lg:left-[150px]
        "
          >
            USAIN BOLT
          </h2>
          <Image
            src="/icon/blue/lightning1.svg"
            alt=""
            width={2000}
            height={2000}
            className="absolute -top-[25px] w-[160px] h-[180px] left-[200px]
          lg:w-[420px] lg:h-[500px]
          lg:-top-[75px] lg:left-[510px]

      "
          />
          <Image
            src="/icon/blue/lightning2.svg"
            alt=""
            width={2000}
            height={2000}
            className="absolute -top-[12px] w-[200px] h-[220px] left-[210px]
          lg:w-[500px] lg:h-[580px]

          lg:-top-[35px] lg:left-[540px]

      "
          />
        </div>
      </div>
      <div className="flex flex-col mt-32">
        <h1 className="testimonialHeader text-themeBlue mb-8">
          What our members are saying
        </h1>
        <div className="flex justify-between">
          <div>
            <p className="testimonialText text-themeBlue border-t-[1px] px-6 border-themeBlue">
              The variety of classes they offer is fantastic, I never get bored
              with my workouts NOW.
            </p>
            <p className="testimonialName text-themeBlue px-6">Maggie</p>
            <p className="testimonialText text-themeBlue border-t-[1px] px-6 border-themeBlue">
              The variety of classes they offer is fantastic, I never get bored
              with my workouts NOW.
            </p>
            <p className="testimonialName text-themeBlue px-6">Maggie</p>
            <p className="testimonialText text-themeBlue border-t-[1px] px-6 border-themeBlue">
              The variety of classes they offer is fantastic, I never get bored
              with my workouts NOW.
            </p>
            <p className="testimonialName text-themeBlue px-6">Maggie</p>
          </div>

          <div className="hidden md:block">
            <p className="testimonialText text-themeBlue border-t-[1px] px-6 border-themeBlue">
              The variety of classes they offer is fantastic, I never get bored
              with my workouts NOW.
            </p>
            <p className="testimonialName text-themeBlue px-6">Maggie</p>
            <p className="testimonialText text-themeBlue border-t-[1px] px-6 border-themeBlue">
              The variety of classes they offer is fantastic, I never get bored
              with my workouts NOW.
            </p>
            <p className="testimonialName text-themeBlue px-6">Maggie</p>
            <p className="testimonialText text-themeBlue border-t-[1px] px-6 border-themeBlue">
              The variety of classes they offer is fantastic, I never get bored
              with my workouts NOW.
            </p>
            <p className="testimonialName text-themeBlue px-6">Maggie</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blue;
