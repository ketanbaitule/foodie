import { SecondaryHeading } from "@/components/Heading";
import ProductItem from "./ProductItem";
import { Item } from "@/data";

export default function TempBox({
  name,
  itemList,
}: {
  name: string;
  itemList: Item[];
}) {
  return (
    <div>
      <SecondaryHeading>{name}</SecondaryHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center">
        {itemList.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
