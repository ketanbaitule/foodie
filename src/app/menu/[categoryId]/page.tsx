import Advertisement from "@/components/Advertisement";
import { PrimaryHeading } from "@/components/Heading";
import ProductItem from "@/components/ProductItem";
import TempBox from "@/components/TempBox";
import TopReview from "@/components/TopReview";
import { categories, getCategoryItems } from "@/data";

export default function categoryDetails({
  params,
}: {
  params: { categoryId: string };
}) {
  const category = categories.find(
    (category) => category.id === params.categoryId,
  );

  if (!category) return <div>Category not found</div>;

  const categoryItem = getCategoryItems(params.categoryId);

  return (
    <div className="flex flex-col gap-y-5">
      <div className="text-center">
        <PrimaryHeading> {category.name}</PrimaryHeading>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center">
        {categoryItem.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
      <Advertisement />
      <TopReview />
      <TempBox name="Deserts" />
      <TempBox name="Burgers" />
    </div>
  );
}
