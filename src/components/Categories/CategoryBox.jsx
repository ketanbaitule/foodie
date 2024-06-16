import CategoryIcon from "./CategoryIcon";

const CategoryBox = () => {
  return (
    <div className="flex flex-wrap justify-around items-center content-center gap-8 my-5">
      {categoryItems.map((category,index) => {
        return (
          <CategoryIcon key={index}
            categoryName={category.name}
            categoryImage={category.img}
          />
        );
      })}
    </div>
  );
};

export default CategoryBox;

const categoryItems = [
  {
    name: "Soups",
    img: "/soups.jpg",
  },

  {
    name: "Biryani's",
    img: "/biryani.jpg",
  },

  {
    name: "Mushroom & Baby Corn",
    img: "/mushroom-babycorn.jpg",
  },

  {
    name: "Paneer Starter",
    img: "/paneer.jpg",
  },

  {
    name: "NAAN",
    img: "/naan.jpg",
  },

  {
    name: "Kulcha & Paratha",
    img: "/Kulcha-paratha.jpg",
  },

  {
    name: "Ice Cream",
    img: "/icecream.jpg",
  },

  {
    name: "Curry's",
    img: "/curry.jpg",
  },
];
