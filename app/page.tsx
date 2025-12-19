import Hero from "@/src/components/hero/Hero";
import BestSellers from "@/src/components/best-sellers/BestSellers";
import WinterEssentials from "@/src/components/winter-essentials/WinterEssentials";
import Makeup from "@/src/components/makeup/Makeup";
import SkinCare from "@/src/components/skin-care/SkinCare";
import Hairfall from "@/src/components/hairfall/Hairfall";
import NewLaunches from "@/src/components/new-launches/NewLaunches";
import BabyCare from "@/src/components/baby-care/BabyCare";
import Monsoon from "@/src/components/monsoon/Monsoon";
import Fragrances from "@/src/components/fragrances/Fragrances";
import Information from "@/src/components/information/Information";

export default function Home() {
  return (
    <main>
      <Hero />
      <BestSellers />
      <WinterEssentials />
      <Makeup />
      <SkinCare />
      <Hairfall />
      <NewLaunches />
      <BabyCare />
      <Monsoon />
      <Fragrances />
      <Information />
    </main>
  );
}
