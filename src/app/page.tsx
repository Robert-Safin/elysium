import Blue from "@/components/blue/Blue";
import Nav from "@/components/nav/Nav";
import Orange from "@/components/orange/Orange";
import Purple from "@/components/purple/Purple";
import Red from "@/components/red/Red";
import White from "@/components/white/White";
import Yellow from "@/components/yellow/Yellow";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav />
      <Red />
      <White />
      <Purple />
      <Blue />
      <Yellow />
      <Orange />
    </>
  );
}
