import { SecondaryHeading } from "@/components/Heading";
import { items } from "@/data";
import ProductItem from "./ProductItem";

export default function TempBox({ name }: { name: string }) {
  const itemList = items.slice(0, 3);
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
