import SpecialBox from "./SpecialBox";

function Special() {
  const specialCategories = ["Special", "Breakfast", "Lunch", "Dinner"];

  const specialBoxes = [
    {
      image: "/product/full-thali.png",
      title: "Full Meal",
      description:
        "Full meals, South Indian meal preparation with restaurant style menu. Sambar, rasam, kuzhambu, vada payasam, curry, kootu, poriyal, rice, appalam, pickle and a chapathi.",
    },
    {
      image: "/product/noodles.png",
      title: "Noodles",
      description:
        "Noodles are staple foods in many Asian countries. Instant noodles are internationally well-known food and the consumption worldwide is on the top. Instant noodles have properties such as nutrition, taste, safety.",
    },
    {
      image: "/product/paneer.png",
      title: "Paneer",
      description:
        "Paneer tikka masala is a popular dish of grilled paneer in spicy onion tomato gravy. Learn how to make resaturant style paneer tikka masala.Full meals, South Indian meal preparation with restaurant style menu. Sambar, rasam, kuzhambu, vada payasam, curry, kootu, poriyal, rice, appalam, pickle and a chapathi.",
    },
    {
      image: "/product/jeera-rice.png",
      title: "Jeera rice",
      description:
        "Jeera rice, also known as cumin rice, is a popular Indian dish made by cooking rice with cumin seeds and ghee or butter.Jeera rice is a many people prefer to have jeera rice instead of plain basmati to go along with dals or curry dishes. ",
    },
  ];

  return (
    <div className="flex flex-col gap-y-8 ">
      <ul className="w-full flex flex-row bg-secondary py-3 rounded-full gap-x-8 px-8 justify-center md:justify-start">
        {specialCategories.map((category, index) => (
          <li key={index} className="text-white font-semibold text-md">
            {category}
          </li>
        ))}
      </ul>
      {specialBoxes.map((specialBox, index) => (
        <SpecialBox key={index} specialBox={specialBox} />
      ))}
    </div>
  );
}

export default Special;
