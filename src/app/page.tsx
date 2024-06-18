import About from "@/components/About";
import { SecondaryHeading, PrimaryHeading } from "@/components/Heading";
import TopOfHomePAge from "@/components/TopOfHomePAge"
import CategoryBox from "@/components/Categories/CategoryBox";
import MostPopularFood from "./MostPopularFood";

export default function Home() {
  return (
    <main>
      <PrimaryHeading>Home</PrimaryHeading>

      <TopOfHomePAge></TopOfHomePAge>

      <SecondaryHeading>Categories</SecondaryHeading>
      <CategoryBox variant={"default"} />
      <About />
      <MostPopularFood />
    </main>
  );
}
