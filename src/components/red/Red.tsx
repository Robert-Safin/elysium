import Image from "next/image";

const Red = () => {
  return (
    <div className="w-full flex flex-col items-center mt-20">
      <div className="relative">
        <Image
          src="/icon/red/dumbbell2.svg"
          width={300}
          height={300}
          alt=""
          className="w-[49px] h-[24px]
          lg:w-[87px] lg:h-[43px]
          2xl:w-[105px] 2xl:h-[52px]

          "
        />
        <Image
          src="/icon/red/dumbbell.svg"
          width={300}
          height={300}
          alt=""
          className="absolute w-[49px] h-[24px] top-0 right-1
          lg:w-[87px] lg:h-[43px]
          2xl:w-[105px] 2xl:h-[52px]

          "
        />
      </div>
      <div className="relative flex w-full justify-center items-center mt-8">
        <h1 className="absolute heroTitle text-themeRed text-center uppercase">
          Elevate <br /> & TRANSFORM
        </h1>
        <Image
          src="/icon/red/court.svg"
          width={300}
          height={300}
          alt=""
          className="w-[254px] h-[118px]
          md:w-[327px] md:h-[153px]
          lg:w-[585px] lg:h-[273px]
          2xl:w-[708px] 2xl:h-[331px]
          "
        />
      </div>

      <div className="relative">
        <p className="heroLogo bg-themeRed uppercase">elysium</p>
        <div className="absolute  w-[100px] lg:w-[300px]   top-0  left-full ml-4">
          <p className="heroPhonetic pt-[6px] lg:-mt-[20px] 2xl:-mt-[0px] text-themeRed uppercase">
            /e&apos;ly:zi̯&Omega;m/
          </p>
          <p
            className="heroText text-themeRed
          lg:max-w-[200px] mt-2
          "
          >
            Elevate your fitness journey at Elysium, where we empower you to
            reach your full potential
          </p>
        </div>
      </div>
      <Image
        src="/icon/red/arrow.svg"
        width={300}
        height={300}
        alt=""
        className="w-[32px] h-[54px] mt-28
        animate-arrowMove"
      />
    </div>
  );
};

export default Red;
