import { SecondaryHeading } from "@/components/Heading";
import ProductItem from "@/components/ProductItem";
import { similiarItems } from "@/data";

function SimiliarFood() {
  //TODO: Fetch similiar items from API
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
