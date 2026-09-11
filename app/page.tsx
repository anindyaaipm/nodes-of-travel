import HomeHero from "@/components/editorial/HomeHero";
import HomeEditorial from "@/components/editorial/HomeEditorial";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <HomeEditorial />
    </div>
  );
}
