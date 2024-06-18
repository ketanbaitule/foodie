import Image from "next/image";
import { about } from "@/data/about";
import { PrimaryHeading, SecondaryHeading } from "@/components/Heading";

export default function AboutContent() {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <PrimaryHeading>About Us</PrimaryHeading>
      <div className="flex flex-col justify-center items-center gap-10">
        <p className="text-center text-lg md:text-2xl">
          We are passionate about bringing you the freshest seafood, delectable
          desserts, mouth-watering burgers, and the best pizzas in town. Our
          mission is to deliver delicious food that satisfies your cravings and
          delights your taste buds.
        </p>
        <div className="grid grid-cols-11 gap-3 max-sm:gap-2 px-5">
          {about.map((src, index) => {
            return (
              <div key={index} className={`w-14 h-72 max-lg:w-9 max-sm:w-7 relative col-span-1 shadow-4xl shadow-slate-500 ${index===0 ? 'rounded-l-xl':''} ${index===about.length-1 ? 'rounded-r-xl':''}`}>
                <Image
                  src={src}
                  alt={`Food Image ${index + 1} `}
                  layout="fill"
                  className={`object-cover object-center w-full ${index===0 ? 'rounded-l-xl':''} ${index===about.length-1 ? 'rounded-r-xl':''}`}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around w-full mt-5 p-10">
        <div className="relative flex-1">
          <Image src="/about-story.png" alt="about-story-image" objectFit="cover" width={400} height={300}/>
        </div>
        <div className="flex flex-1 flex-col items-start gap-5 md:ml-10 mt-8">
          <SecondaryHeading>Our Story</SecondaryHeading>
          <p className="text-xl md:text-2xl pl-2">
            Founded in  2023, Foodie began as a <br/> 
            small family-owned seafood restaurant. <br/>
            Over the years, we've expanded our menu <br/>
            and our reach, always maintaining our<br/>
            commitment to quality and flavor.
          </p>
        </div>
      </div>
    </div>
  );
}
