import Image from "next/image";

const Nav = () => {
  return (
    <div className="sticky  w-full h-full border border-red-700 ">
      <div className="flex justify-between items-center z-10 bg-yellow-100">
        <h1 className="text-themeRed">elysium</h1>
        <Image
          src="/icon/red/kettlebell.svg"
          width={50}
          height={50}
          alt=""
          className="w-[21.5px] h-[24.3px]"
        />
      </div>
    </div>
  );
};

export default Nav;
