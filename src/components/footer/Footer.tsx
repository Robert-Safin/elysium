import {
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsSpotify,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col pb-10 mt-20">
      <div className="flex justify-evenly mb-8">
        <BsInstagram className="text-white text-xl lg:text-3xl" />
        <BsFacebook className="text-white text-xl lg:text-3xl" />
        <BsLinkedin className="text-white text-xl lg:text-3xl" />
        <BsTwitter className="text-white text-xl lg:text-3xl" />
        <BsSpotify className="text-white text-xl lg:text-3xl" />
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-4 font-PoppinsRegular text-[10px]lg:text-[14px]">
          <p className="text-white border-r pr-4">Symbobtic</p>
          <p className="text-white ">Copyright 2023</p>
        </div>

        <div className="flex space-x-4 font-PoppinsRegular text-[10px]lg:text-[14px]">
          <p className="text-white border-r pr-4 underline">Privacy Policy</p>
          <p className="text-white  underline">Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

//insta
//facebook
//linkedin
//twitter
//spotify
