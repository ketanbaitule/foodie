import Image from "next/image";
import Link from "next/link";

const CategoryIcon = ({ category, variant }) => {
  let variantClass = "rounded-2xl rounded-bl-[70px] rounded-tr-[70px]";
  if (variant == "circle") {
    variantClass = "rounded-full";
  }
  return (
    <div>
      <Link href={`/menu/${category.id}`} className="flex flex-col items-center gap-y-2">
        <div className="w-40 h-40 relative">
          <Image
            src={category.img}
            alt={category.name}
            fill
            className={`object-contain ${variantClass}`}
          />
        </div>
        <p className="font-medium text-xl text-center">{category.name}</p>
      </Link>
    </div>
  );
};

export default CategoryIcon;
