import { categories } from "@/data";
import { SecondaryHeading } from "./Heading";
import Image from "next/image";

function TopReview(){
  return(
    <div className="flex flex-col gap-4">
      <SecondaryHeading>Top Review</SecondaryHeading>
      <div className="flex items-center justify-around gap-x-5">
        {
          categories.slice(0,4).map((category)=>(
            <div key={category.id} className="h-28 w-28 rounded-full relative bg-primary">
              <Image src={category.img} alt={category.name} fill className="rounded-full" />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TopReview;