import Nav from "@/components/nav/Nav";
import Red from "@/components/red/Red";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <Nav />
     <Red/>
     <div className="w-full h-screen"></div>
    </>
  );
}
