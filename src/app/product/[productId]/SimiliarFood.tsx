import { SecondaryHeading } from "@/components/Heading";
import ProductItem from "@/components/ProductItem";

function SimiliarFood() {
  const similiarItems = [
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
    <div>
      <SecondaryHeading>Similiar Food</SecondaryHeading>

      <div className="flex flex-wrap justify-evenly">
        {similiarItems.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default SimiliarFood;
