import Image from "next/image";

interface SpecialBoxProps {
  specialBox: {
    title: string;
    description: string;
    image: string;
  };
}

function SpecialBox({ specialBox }: SpecialBoxProps) {
  return (
    <div className="bg-secondary rounded-xl p-4">
      <div className="flex items-center gap-x-4 md:h-28 md:gap-x-8">
        <div className="w-1/3 self-stretch md:w-44 relative">
          <Image
            src={specialBox.image}
            alt={specialBox.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="w-2/3 md:w-full">
          <h2 className="text-xl pb-2">
            {specialBox.title}
            <hr className="md:w-1/3" />
          </h2>
          <p>{specialBox.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SpecialBox;
