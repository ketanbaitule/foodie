import { Item, topReviewItems } from "@/data";
import { SecondaryHeading } from "./Heading";
import Image from "next/image";
import Link from "next/link";

function TopReview() {
  return (
    <div className="flex flex-col gap-4">
      <SecondaryHeading>Top Review</SecondaryHeading>
      <div className="flex items-center justify-around gap-x-5">
        {topReviewItems.map((item: Item) => (
          <Link key={item.id} href={`/product/${item.id}`}>
            <div className="h-28 w-28 rounded-full relative bg-primary">
              <Image
                src={item.imgUrl}
                alt={item.foodName}
                fill
                className="rounded-full"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopReview;
