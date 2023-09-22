import Image from "next/image";

const Yellow = () => {
  return (
    <div className="border-t border-themeYellow flex flex-col">
      <h1 className="sectionSubHeader text-themeYellow my-10">MEMBERSHIPS</h1>
      <h2 className="relative sectionHeader text-themeYellow mb-4 lg:mb-8 ml-10">
        POTENTIAL
        <span className="absolute -left-4 -top-4 opacity-50 lg:-top-8 lg:-left-8">
          UNLEASH{" "}
        </span>
      </h2>
      <p className="membershipSubHeader bg-themeYellow w-fit px-1 mb-2">
        TRAIN AND CONNECT.
      </p>
      <div className="flex space-x-1">
        <div className="h-1 w-1 bg-themeYellow rounded-full" />
        <div className="h-1 w-1 border border-themeYellow rounded-full" />

        <div className="relative flex w-full  justify-center  2xl:pr-40">
          <Image
            src="/icon/yellow/elipsis.svg"
            alt=""
            width={300}
            height={300}
            className="w-[290px] h-[159px]

    lg:w-[650px] lg:h-[310px]
    2xl:w-[713px] 2xl:h-[375px]

    "
          />
          <h1
            className="absolute text-center membershipQuote text-themeYellow top-12 w-[260px] ml-4 md:mr-4
          lg:w-[630px] lg:mt-12
          2xl:w-[750px] 2xl:mt-20 2xl:-mr-6
          "
          >
            <Image
              src="/icon/yellow/move.svg"
              alt=""
              width={100}
              height={100}
              className="absolute w-[57px] h-[14px] -top-10 -right-8
              md:-right-0
              lg:w-[102px] lg:h-[25px] lg:-top-20
              "
            />
            <p
              className="absolute johnWooden text-themeYellow -bottom-4 right-0
            lg:-bottom-10 lg:right-0
            2xl:right-10
            "
            >
              JOHN WOODEN
            </p>
            <Image
              src="/icon/yellow/starSmall.svg"
              alt=""
              width={100}
              height={100}
              className="absolute w-[28px] h-[28px] right-4 -top-12
            md:right-14
            lg:right-28 lg:-top-24
            animate-flicker1
            "
            />
            <Image
              src="/icon/yellow/starSmall.svg"
              alt=""
              width={100}
              height={100}
              className="absolute w-[28px] h-[28px] right-20 -bottom-14
            md:right-20 md:-bottom-16
            lg:right-40 lg:-bottom-28
            animate-flicker2
            "
            />
            <Image
              src="/icon/yellow/starBig.svg"
              alt=""
              width={100}
              height={100}
              className="absolute w-[44px] h-[47px] -top-10
              animate-flicker3
            "
            />
            <Image
              src="/icon/yellow/starBig.svg"
              alt=""
              width={100}
              height={100}
              className="absolute w-[44px] h-[47px] -bottom-14 right-24
              lg:-bottom-28 lg:right-64
              2xl:-bottom-24 2xl:right-72
              animate-flicker4
            "
            />
            SUCCESS IS NEVER FINAL, FAILURE IS NEVER FATAL, IT&apos;S COURAGE
            THAT COUNTS.
          </h1>
        </div>
      </div>

      <div className="relative w-[270px] lg:w-[477px] mt-10 md:-top-20 lg:-top-24">
        <div className="absolute w-full h-2 border-[0.5px] border-themeYellow -top-2" />
        <h1 className="membershipPlans text-themeYellow px-2 py-1 border-[0.5px] border-themeYellow">
          OUR MEMBERSHIP PLANS
        </h1>
        <div className="flex w-full">
          <h2 className="membershipType bg-themeYellow w-full px-2 py-1 border-[0.5px] border-black box-border">
            <span className="italic">UNLIMITED</span>
          </h2>
          <h2 className="membershipType bg-themeYellow w-full px-2 py-1 border-[0.5px] border-black box-border">
            <span className="italic">BASIC</span>
          </h2>
        </div>
        <div className="flex w-full">
          <p className="membershipText text-themeYellow w-full px-3 py-1 border-[0.5px] border-themeYellow">
            SPA ACCESS
          </p>
          <p className="membershipText text-themeYellow w-full px-3 py-1 border-[0.5px] border-themeYellow">
            OPEN GYM ACCESS
          </p>
        </div>
        <p className="membershipText text-themeYellow w-1/2 px-3 py-1 border-[0.5px] border-themeYellow">
          OPEN GYM ACCESS
        </p>
        <p className="membershipText text-themeYellow w-1/2 px-3 py-1 border-[0.5px] border-themeYellow">
          UNLIMITED CLASSES
        </p>
      </div>
      <button
        className="relative button text-themeYellow w-[160px] border border-themeYellow rounded-full py-2 self-end
      md:w-[260px] md:-top-16 md:py-4
      "
      >
        JOIN US TODAY
      </button>
    </div>
  );
};

export default Yellow;
