import SpecialBox from "./SpecialBox";

function Special() {
  const specialCategories = ["Special", "Breakfast", "Lunch", "Dinner"];

  const specialBoxes = [
    {
      image: "/biryani.png",
      title: "Full Meal",
      description:
        "Full meals, South Indian meal preparation with restaurant style menu. Sambar, rasam, kuzhambu, vada payasam, curry, kootu, poriyal, rice, appalam, pickle and a chapathi.",
    },
    {
      image: "/biryani.png",
      title: "Noodles",
      description:
        "Full meals, South Indian meal preparation with restaurant style menu. Sambar, rasam, kuzhambu, vada payasam, curry, kootu, poriyal, rice, appalam, pickle and a chapathi.",
    },
    {
      image: "/biryani.png",
      title: "Paneer",
      description:
        "Full meals, South Indian meal preparation with restaurant style menu. Sambar, rasam, kuzhambu, vada payasam, curry, kootu, poriyal, rice, appalam, pickle and a chapathi.",
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
