import { SecondaryHeading } from "@/components/Heading";
import Image from "next/image";
import ProductDetails from "./ProductDetail";
import Special from "./Special";
import SimiliarFood from "./SimiliarFood";
import { Item, getItemById } from "@/data";

function ProductDetailsPage({ params }: { params: { productId: string } }) {
  const productId = parseInt(params.productId);
  const itemDetails = getItemById(productId);

  if (!itemDetails)
    return <SecondaryHeading>Product not found</SecondaryHeading>;

  const productDetails = {
    hotel: "Royal Hotel",
    name: itemDetails.foodName,
    image: ["/biryani.png", "/biryani.png", itemDetails.imgUrl],
    descriptions: [
      "Large 4 Chicken Breast",
      "Tomato Salad",
      "Fried Rice with pawn",
      "Biryani Rice",
      "Biryani With Curry",
      "Sambhar",
    ],
    "open-timing": "11:30 AM - 12 midnight",
    discount: itemDetails.discount,
    price: itemDetails.price,
    stars: itemDetails.rating,
  };
  return (
    <div className="flex flex-col p-4 gap-y-4">
      <ProductDetails productDetails={productDetails} productId={productId} />
      <Special />
      <SimiliarFood />
    </div>
  );
}

export default ProductDetailsPage;
