import React from "react";
import { SecondaryHeading } from "@/components/Heading";
import RoundedButton from "@/components/RoundedButton";
import ProductItem from "@/components/ProductItem";
import { popularItems } from "@/data";

function MostPopularFood() {
  const popularFoodItems = popularItems;
  return (
    <>
      <div className="flex justify-between">
        <SecondaryHeading>Most Popular Food</SecondaryHeading>
        <RoundedButton text={"See more"} />
      </div>

      <div className="flex flex-row flex-wrap justify-evenly gap-4">
        {popularFoodItems.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </div>
    </>
  );
}

export default MostPopularFood;
