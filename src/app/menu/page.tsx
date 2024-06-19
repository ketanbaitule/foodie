import CategoryBox from "@/components/Categories/CategoryBox";
import TempBox from "@/components/TempBox";
import Menus from "@/app/menu/Menus";



export default function Menu() {
  return (
    <div className="flex flex-col gap-y-5 my-5">
    <Menus/>
      <CategoryBox variant={"circle"} />
      <TempBox name="Our Specials" />
      <TempBox name="Desserts" />
      <TempBox name="Burgers" />
    </div>
  );
}
