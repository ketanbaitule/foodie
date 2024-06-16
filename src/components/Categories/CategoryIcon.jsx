import Image from "next/image";

const CategoryIcon = ({ categoryName, categoryImage }) => {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <div className="w-36 h-36 relative">
        <Image
          src={categoryImage}
          alt={categoryName}
          fill
          className="object-contain rounded-full"
        />
      </div>
      <p className="font-medium text-xl text-center">{categoryName}</p>
    </div>
  );
};

export default CategoryIcon;
