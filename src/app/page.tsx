import About from "@/components/About";
import { SecondaryHeading } from "@/components/Heading";
import TopOfHomePage from "./TopOfHomePAge";
import CategoryBox from "@/components/Categories/CategoryBox";
import MostPopularFood from "./MostPopularFood";
import RoundedButton from "@/components/RoundedButton";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <TopOfHomePage />
      <SecondaryHeading>Categories</SecondaryHeading>
      <CategoryBox variant={"default"} />
      <div className="flex justify-center py-3">
        <Link href="/menu">
          <RoundedButton text={"View All"}></RoundedButton>
        </Link>
      </div>
      <About />
      <MostPopularFood />
    </main>
  );
}
