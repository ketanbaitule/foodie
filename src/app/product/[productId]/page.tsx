import { SecondaryHeading } from "@/components/Heading";
import Image from "next/image";
import ProductDetails from "./ProductDetail";
import Special from "./Special";
import SimiliarFood from "./SimiliarFood";

function ProductDetailsPage({ params }: { params: { productId: string } }) {
  const productId = params.productId;
  const productDetails = {
    hotel: "Royal Hotel",
    name: "Chicken Biryani",
    image: ["/biryani.png", "/biryani.png", "/biryani.png"],
    descriptions: [
      "Large 4 Chicken Breast",
      "Tomato Salad",
      "Fried Rice with pawn",
      "Biryani Rice",
      "Biryani With Curry",
      "Sambhar",
    ],
    "open-timing": "11:30 AM - 12 midnight",
    discount: "10% upto ₹40",
    price: "₹820.50",
    stars: 5.0,
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
