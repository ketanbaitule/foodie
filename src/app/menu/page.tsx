import CategoryBox from "@/components/Categories/CategoryBox";
import TempBox from "@/components/TempBox";
import Menus from "@/app/menu/Menus";
import { SecondaryHeading } from "@/components/Heading";



export default function Menu() {
  return (
    <div className="flex flex-col gap-y-8 my-5">
      <Menus/>
      <SecondaryHeading>Categories</SecondaryHeading>
      <CategoryBox variant={"circle"} />
      <TempBox name="Our Specials" />
      <TempBox name="Desserts" />
      <TempBox name="Burgers" />
    </div>
  );
}
