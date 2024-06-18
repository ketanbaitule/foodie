import CategoryBox from "@/components/Categories/CategoryBox";
import TempBox from "@/components/TempBox";

export default function About() {
  return (
    <div className="flex flex-col gap-y-5 my-5">
      <CategoryBox variant={"circle"} />
      <TempBox name="Our Specials" />
      <TempBox name="Desserts" />
      <TempBox name="Burgers" />
    </div>
  );
}
