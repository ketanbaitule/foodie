import { SecondaryHeading } from "@/components/Heading";
import Image from "next/image";

function Gallary() {
  return (
    <div className="flex flex-col gap-y-5 text-center">
      <SecondaryHeading>Gallary</SecondaryHeading>
      <p className="text-xl md:text-2xl pl-2">
        Feast your eyes on our culinary creations and the vibrant atmosphere of
        our restaurant.
      </p>
      <div className="flex flex-col gap-y-2">
        <div className="grid grid-cols-4 gap-5 mr-8">
          <div className="relative">
            <Image
              className="rounded-xl object-cover"
              src="/biryani.jpg"
              alt="gallary"
              height={"200"}
              width={"200"}
            />
          </div>
          <div className="relative">
            <Image
              className="rounded-xl object-cover"
              src="/curry.jpg"
              alt="gallary"
              height={"200"}
              width={"200"}
            />
          </div>
          <div className="relative">
            <Image
              className="rounded-xl object-cover"
              src="/soups.jpg"
              alt="gallary"
              height={"200"}
              width={"200"}
            />
          </div>
          <div className="relative">
            <Image
              className="rounded-xl object-cover"
              src="/naan.jpg"
              alt="gallary"
              height={"200"}
              width={"200"}
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 ml-8">
          <div className="relative">
            <Image
              className="rounded-xl object-cover"
              src="/paneer.jpg"
              alt="gallary"
              height={"200"}
              width={"200"}
            />
          </div>
          <div className="relative">
            <Image
              className="rounded-xl object-cover"
              src="/icecream.jpg"
              alt="gallary"
              height={"200"}
              width={"200"}
            />
          </div>
          <div className="relative">
            <Image
              className="rounded-xl object-cover"
              src="/kulcha-paratha.jpg"
              alt="gallary"
              height={"200"}
              width={"200"}
            />
          </div>
          <div className="relative">
            <Image
              className="rounded-xl object-cover"
              src="/paneer.jpg"
              alt="gallary"
              height={"200"}
              width={"200"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallary;
