import React from 'react'
import { SecondaryHeading } from "@/components/Heading";
import RoundedButton from "@/components/RoundedButton";
import ProductItem from "@/components/ProductItem"

function MostPopularFood() {
  return (
    <>
       <div className="flex justify-between">
        <SecondaryHeading>Most Popular Food</SecondaryHeading>
        <RoundedButton text={"See more"} />
      </div>
        <ProductItem/>
    </>
  )
}

export default MostPopularFood