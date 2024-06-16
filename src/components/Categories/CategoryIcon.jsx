import Image from "next/image";

const CategoryIcon = ({ categoryName, categoryImage, variant }) => {
  let variantClass = "rounded-2xl rounded-bl-[70px] rounded-tr-[70px]";
  if (variant == "circle") {
    variantClass = "rounded-full";
  }
  return (
    <div className="flex flex-col items-center gap-y-2">
      <div className="w-40 h-40 relative">
        <Image
          src={categoryImage}
          alt={categoryName}
          fill
          className={`object-contain ${variantClass}`}
        />
      </div>
      <p className="font-medium text-xl text-center">{categoryName}</p>
    </div>
  );
};

export default CategoryIcon;
