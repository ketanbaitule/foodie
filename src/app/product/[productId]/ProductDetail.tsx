import { SecondaryHeading } from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import { BiSolidStar } from "react-icons/bi";

interface ProductDetailsProps {
  name: string;
  hotel: string;
  image: string[];
  discount: string;
  price: string | number;
  descriptions: string[];
  "open-timing": string;
  stars: number;
}

function ProductDetails({
  productDetails,
  productId,
}: {
  productDetails: ProductDetailsProps;
  productId: number;
}) {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:gap-x-10 gap-y-3 p-4">
      <div className="flex flex-col gap-y-5 justify-center md:justify-end">
        <div>
          <Image
            src={productDetails.image[0]}
            alt={productDetails.name}
            width={450}
            height={450}
            objectFit="responsive"
          />
        </div>
        <div className="flex flex-row overflow-x-auto items-center justify-start gap-x-5 ">
          {productDetails.image.map((image, index) => (
            <div key={index} className="w-20 h-auto">
              <Image
                src={image}
                alt={productDetails.name}
                width={80}
                height={80}
                objectFit="responsive"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-3 ">
        <SecondaryHeading>{productDetails.hotel}</SecondaryHeading>
        <div className="text-white text-2xl font-bold px-2">
          {productDetails.name}
        </div>
        <ol className="text-zinc-400 list-decimal leading-8 p-3 list-inside ">
          {productDetails.descriptions.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ol>
        <div>
          <span className="text-primary font-medium">Open Timing - </span>{" "}
          {productDetails["open-timing"]} {productDetails.stars.toFixed(1)}{" "}
          <BiSolidStar className="fill-primary w-6 h-6 inline-block align-middle" />
        </div>
        <div>
          {productDetails.discount && (
            <>
              <span className="text-primary text-xl font-medium">
                {productDetails.discount}
              </span>
            </>
          )}
        </div>
        <div className="text-white text-bold text-xl">
          {productDetails.price}
        </div>
        <div className="grow"></div>
        <div className="grow flex items-center md:justify-center">
          <Link href="/contact">
            <button className="bg-white text-primary px-10 py-2 font-medium rounded-lg ">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
