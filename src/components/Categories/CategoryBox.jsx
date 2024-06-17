import CategoryIcon from "./CategoryIcon";
import { categories } from "@/data";

const CategoryBox = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-5">
      {categories.map((category, index) => {
        return <CategoryIcon key={index} category={category} />;
      })}
    </div>
  );
};

export default CategoryBox;
