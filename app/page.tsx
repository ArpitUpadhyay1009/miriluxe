import Hero from "@/src/components/hero/Hero";
import BestSellers from "@/src/components/best-sellers/BestSellers";
import WinterEssentials from "@/src/components/winter-essentials/WinterEssentials";

export default function Home() {
  return (
    <main>
      <Hero />
      <BestSellers />
      <WinterEssentials />
    </main>
  );
}
