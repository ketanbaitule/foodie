const CategoryIcon = ({categoryName, categoryImage}) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-2 min-w-[100px] w-[250px] max-lg:w-[200px] max-md:w-[150px] max-sm:w-[100px]"
    >
      <img
        src={categoryImage}
        alt={categoryName}
        className="self-start rounded-tl-[20px] rounded-tr-[90px] rounded-br-[20px] rounded-bl-[90px] max-md:rounded-bl-[60px] max-md:rounded-tr-[60px] max-sm:rounded-bl-[40px] max-sm:rounded-tr-[40px] w-full h-full aspect-square "
      />
      <p className="font-medium text-xl max-lg:text-base max-md:text-sm text-center">
        {categoryName}
      </p>
    </div>
  );
};

export default CategoryIcon;
