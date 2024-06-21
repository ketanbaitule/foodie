import { SecondaryHeading } from "@/components/Heading";
import Image from "next/image";

function OurPhilosophy() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around w-full mt-5 p-10 gap-y-5">
      <div className="flex flex-1 flex-col items-start gap-5 md:ml-10 mt-8">
        <SecondaryHeading>Our Philosophy</SecondaryHeading>
        <p className="text-xl md:text-2xl pl-2">
          We believe in using the freshest ingredients and traditional recipes
          to create food that not only tastes great but also nourishes the body
          and soul. From our succulent seafood to our handcrafted pizzas,
          quality is at the heart of everything we do.
        </p>
      </div>
      <div className="relative flex-1">
        <Image
          src="/about/our_philosophy.png"
          alt="Our Philosophy"
          objectFit="cover"
          className="mx-auto"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
}

export default OurPhilosophy;
