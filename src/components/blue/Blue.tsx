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
            className="absolute -top-[25px] w-[160px] h-[180px] left-[180px]
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
            className="absolute -top-[20px] w-[180px] h-[200px] left-[190px]
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
            <p className="testimonialName text-themeBlue px-6 py-4">Kevin</p>
            <p className="testimonialText text-themeBlue border-t-[0.5px] border-opacity-40 px-6 pt-4 border-themeBlue">
              I love how clean and well-maintained this gym is. It&apos;s clear
              they take pride in providing a top-notch environment for members.
            </p>
            <p className="testimonialName text-themeBlue px-6 py-4">Bob</p>
            <p className="testimonialText text-themeBlue border-t-[0.5px] border-opacity-40 px-6 pt-4 border-themeBlue">
              The results I&apos;ve seen since joining are incredible. I feel
              stronger, healthier, and more energized than ever.
            </p>
            <p className="testimonialName text-themeBlue px-6 py-4 border-b-[0.5px] border-themeBlue border-opacity-40">
              Maggie
            </p>
          </div>

          <div className="hidden md:block mt-[31.5px] lg:mt-[38px] 2xl:mt-[48px]">
            <p className="testimonialText text-themeBlue border-t-[0.5px] border-opacity-40 px-6 pt-4 border-themeBlue">
              The equipment is top-of-the-line, and I never have to wait for a
              machine, even during peak hours.
            </p>
            <p className="testimonialName text-themeBlue px-6 py-4">Ellen</p>
            <p className="testimonialText text-themeBlue border-t-[0.5px] border-opacity-40 px-6 pt-4 border-themeBlue">
              The trainers here are incredibly knowledgeable and always willing
              to help. They&apos;ve really helped me reach my fitness goals.
            </p>
            <p className="testimonialName text-themeBlue px-6 py-4">Willie</p>
            <p className="testimonialText text-themeBlue border-t-[0.5px] border-opacity-40 px-6 pt-4 border-themeBlue">
              This gym offers great value for the price. You get access to so
              many amenities and services.
            </p>
            <p className="testimonialName text-themeBlue px-6 py-4 border-b-[0.5px] border-themeBlue border-opacity-40">
              John
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blue;
