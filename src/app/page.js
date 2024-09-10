import Hcontact from "@/components/Hcontact";
import Hero from "@/components/hero";
import Hfaq from "@/components/Hfaq";
import Hfeedback from "@/components/Hfeedback";
import Hforth from "@/components/Hforth";
import HomeInnovation from "@/components/hinnovation";
import HomeVideo from "@/components/homevideo";
import HomePackage from "@/components/hpackage";
import HomePortfolio from "@/components/hportfolio";
import Partner from "@/components/partners";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-[#000] ">
      <Hero />
      <Partner />
      <HomeVideo />
      <Hforth />
      <Hfaq />
      <Hfeedback />
      <HomePackage />
      <HomeInnovation />
      <HomePortfolio />
      <Hcontact />
    </div>
  );
}
