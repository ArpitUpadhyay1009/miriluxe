import Hero from "@/src/components/hero/Hero";
import BestSellers from "@/src/components/best-sellers/BestSellers";
import WinterEssentials from "@/src/components/winter-essentials/WinterEssentials";
import Makeup from "@/src/components/makeup/Makeup";
import SkinCare from "@/src/components/skin-care/SkinCare";
import Hairfall from "@/src/components/hairfall/Hairfall";

export default function Home() {
  return (
    <main>
      <Hero />
      <BestSellers />
      <WinterEssentials />
      <Makeup />
      <SkinCare />
      <Hairfall />
    </main>
  );
}
