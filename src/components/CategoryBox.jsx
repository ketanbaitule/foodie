const CategoryBox = () => {
  return (
    <div className="flex flex-wrap justify-around items-center content-center gap-8 my-5">
        {CategoryItems.map((item,index)=>{
            return(
                <div key={index} className="flex flex-col justify-center items-center gap-2 min-w-[100px] w-[250px] max-lg:w-[200px] max-md:w-[150px] max-sm:w-[100px]">
                    <img src={item.img} alt={item.name} 
                        className="self-start rounded-tl-[20px] rounded-tr-[90px] rounded-br-[20px] rounded-bl-[90px] max-md:rounded-bl-[60px] max-md:rounded-tr-[60px] max-sm:rounded-bl-[40px] max-sm:rounded-tr-[40px] w-full h-full aspect-square "
                    />
                    <p className="font-medium text-xl max-lg:text-base max-md:text-sm text-center">{item.name}</p>
                </div>
            )
        })}
    </div>
  )
};

export default CategoryBox;

const CategoryItems=[
    {
        name:"Soups",
        img:"soups.jpg",

    },

    {
        name:"Biryani's",
        img:"biryani.jpg",

    },

    {
        name:"Mushroom & Baby Corn",
        img:"mushroom-babycorn.jpg",

    },

    {
        name:"Paneer Starter",
        img:"paneer.jpg",

    },

    {
        name:"NAAN",
        img:"naan.jpg",

    },

    {
        name:"Kulcha & Paratha",
        img:"Kulcha-paratha.jpg",

    },

    {
        name:"Ice Cream",
        img:"icecream.jpg",

    },

    {
        name:"Curry's",
        img:"curry.jpg",

    },

];
