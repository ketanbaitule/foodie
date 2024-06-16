import { SecondaryHeading, PrimaryHeading } from "@/components/Heading";
import CategoryBox from "@/components/Categories/CategoryBox"

export default function Home() {
  return (
    <main>
      <PrimaryHeading>Home</PrimaryHeading>
      <SecondaryHeading >Categories</SecondaryHeading>
      <CategoryBox/>
    </main>
  );
}
