import { SecondaryHeading } from "@/components/Heading";
import ProductItem from "@/components/ProductItem";
import { Item } from "@/data";

function SimiliarFood({ similiarItems }: { similiarItems: Item[] }) {
  return (
    <div>
      <SecondaryHeading>Similiar Food</SecondaryHeading>

      <div className="flex flex-wrap gap-5 justify-evenly">
        {similiarItems.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default SimiliarFood;
