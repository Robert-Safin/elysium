import Image from "next/image";

const Blue = () => {
  return (
    <div className="mb-20">
      <div className=" flex  justify-center">
        <div
          className="relative w-[358px]   items-center
      lg:w-[980px]
      2xl:w-full

      "
        >
          <Image
            src="/img/usain/Usain-Bolt 1.png"
            alt=""
            width={2000}
            height={2000}
            className="w-[358px] h-[172px] object-cover
      lg:h-[450px]
lg:w-[980px]
2xl:w-full


      "
          />
          <h1
            className="absolute  top-[60px] left-[40px] text-themeBlue quote
         lg:top-[150px] lg:left-[150px]
         2xl:left-[330px] 2xl:top-[170px]
        "
          >
            I DON&apos;T <br /> THINK <br /> LIMITS.
          </h1>
          <h2
            className="absolute  top-[115px] left-[40px] bg-themeBlue w-fit usainBolt
        lg:top-[250px] lg:left-[150px]
        2xl:left-[330px] 2xl:top-[280px]
        "
          >
            USAIN BOLT
          </h2>
          <Image
            src="/icon/blue/lightning1.svg"
            alt=""
            width={2000}
            height={2000}
            className="absolute -top-[25px] w-[160px] h-[180px] left-[170px]
          lg:w-[420px] lg:h-[500px]
          lg:-top-[75px] lg:left-[510px]
          2xl:w-[500px] 2xl:h-[520px] 2xl:left-[670px] 2xl:-top-[90px]

      "
          />
          <Image
            src="/icon/blue/lightning2.svg"
            alt=""
            width={2000}
            height={2000}
            className="absolute -top-[20px] w-[180px] h-[200px] left-[180px]
          lg:w-[500px] lg:h-[580px]

          lg:-top-[35px] lg:left-[540px]
          2xl:w-[550px] 2xl:h-[620px]
          2xl:left-[720px] 2xl:-top-[50px]


      "
          />
        </div>
      </div>
      <div className="flex flex-col mt-32  items-center">
        <div className="flex justify-between space-x-6">
          <div>
            <h1 className="testimonialHeader text-themeBlue mb-4 w-full px-6">
              What our members are saying
            </h1>
            <p className="testimonialText text-themeBlue border-t-[0.5px] border-opacity-40 px-6 pt-4 border-themeBlue">
              The variety of classes they offer is fantastic, I never get bored
              with my workouts NOW.
            </p>
            <p className="testimonialName text-themeBlue px-6 py-4">Maggie</p>
            <p className="testimonialText text-themeBlue border-t-[0.5px] border-opacity-40 px-6 pt-4 border-themeBlue">
              The variety of classes they offer is fantastic, I never get bored
              with my workouts NOW.
            </p>
            <p className="testimonialName text-themeBlue px-6 py-4">Maggie</p>
            <p className="testimonialText text-themeBlue border-t-[0.5px] border-opacity-40 px-6 pt-4 border-themeBlue">
              The variety of classes they offer is fantastic, I never get bored
              with my workouts NOW.
            </p>
            <p className="testimonialName text-themeBlue px-6 py-4 border-b-[0.5px] border-themeBlue border-opacity-40">
              Maggie
            </p>
          </div>

          <div className="hidden md:block mt-[31.5px] lg:mt-[38px]">
            <p className="testimonialText text-themeBlue border-t-[0.5px] border-opacity-40 px-6 pt-4 border-themeBlue">
              The variety of classes they offer is fantastic, I never get bored
              with my workouts NOW.
            </p>
            <p className="testimonialName text-themeBlue px-6 py-4">Maggie</p>
            <p className="testimonialText text-themeBlue border-t-[0.5px] border-opacity-40 px-6 pt-4 border-themeBlue">
              The variety of classes they offer is fantastic, I never get bored
              with my workouts NOW.
            </p>
            <p className="testimonialName text-themeBlue px-6 py-4">Maggie</p>
            <p className="testimonialText text-themeBlue border-t-[0.5px] border-opacity-40 px-6 pt-4 border-themeBlue">
              The variety of classes they offer is fantastic, I never get bored
              with my workouts NOW.
            </p>
            <p className="testimonialName text-themeBlue px-6 py-4 border-b-[0.5px] border-themeBlue border-opacity-40">
              Maggie
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blue;
