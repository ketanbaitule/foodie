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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           <ProductItem foodName={"Sweet Corn Soup"} discount ={"Flat Rs.100 off"} price={"119"} rating={"5.0"} imgUrl={"/food.jpg"}/>
      <ProductItem foodName={"Avocado and Egg Toast"} discount ={"Flat Rs.100 off"} price={"210"} rating={"5.0"} imgUrl={"/food2.avif"}/>
      <ProductItem foodName={"Pancakes for breakfast"} discount ={"Flat Rs.100 off"} price={"200"} rating={"5.0"} imgUrl={"/food3.avif"}/>
    
       </div> 
    </>
  )
}

export default MostPopularFood