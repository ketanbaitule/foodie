import React from "react";
import { SecondaryHeading } from "@/components/Heading";
import RoundedButton from "@/components/RoundedButton";
import ProductItem from "@/components/ProductItem";

function MostPopularFood() {
  const popularFoodItems = [
    {
      foodName: "Sweet Corn Soup",
      discount: "Flat Rs.100 off",
      price: "119 for two",
      rating: "5.0",
      imgUrl: "/food.jpg",
    },
    {
      foodName: "Avocado and Egg Toast",
      discount: "Flat Rs.100 off",
      price: "210 for two",
      rating: "5.0",
      imgUrl: "/food2.avif",
    },
    {
      foodName: "Pancakes for breakfast",
      discount: "Flat Rs.100 off",
      price: "200 for two",
      rating: "5.0",
      imgUrl: "/food3.avif",
    },
  ];
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
