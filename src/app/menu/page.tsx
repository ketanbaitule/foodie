import CategoryBox from "@/components/Categories/CategoryBox";
import TempBox from "@/components/TempBox";
import Menus from "@/app/menu/Menus";
import { SecondaryHeading } from "@/components/Heading";
import Advertisement from "@/components/Advertisement";
import TopReview from "@/components/TopReview";
import { getCategoryItems, specialItems } from "@/data";

export default function Menu() {
  return (
    <div className="flex flex-col gap-y-8 my-5">
      <Menus />
      <SecondaryHeading>Categories</SecondaryHeading>
      <CategoryBox variant={"circle"} />
      <Advertisement />
      <TopReview />
      <TempBox itemList={specialItems} name="Our Specials" />
      <TempBox itemList={getCategoryItems("deserts")} name="Desserts" />
      <TempBox itemList={getCategoryItems("burgers")} name="Burgers" />
    </div>
  );
}
