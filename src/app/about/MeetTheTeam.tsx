import { SecondaryHeading } from "@/components/Heading";
import Image from "next/image";

function TeamMember({ name, image }: { name: string; image: string }) {
  return (
    <div className="flex flex-col items-stretch">
      <Image src={image} alt={name} width={250} height={300} />
      <div className="bg-secondary text-center p-4 rounded-b-xl">
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
    </div>
  );
}

function MeetTheTeam() {
  return (
    <div className="flex flex-col items-center gap-y-5">
      <SecondaryHeading>Meet The Team</SecondaryHeading>
      <p className="text-center text-xl md:text-2xl pl-2">
        Our talented team of chefs and food enthusiasts are the backbone of
        Foodie. <br /> Meet the people who bring our delicious dishes to life
        every day.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center w-full gap-10">
        <TeamMember name="John Doe" image="/about/team/team1.png" />
        <TeamMember name="John Doe" image="/about/team/team2.png" />
        <TeamMember name="John Doe" image="/about/team/team3.png" />
        <TeamMember name="John Doe" image="/about/team/team4.png" />
      </div>
    </div>
  );
}

export default MeetTheTeam;
