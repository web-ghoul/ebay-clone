import { Link } from "@remix-run/react";

const CategoryCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <Link to={`/categories/${title}`}>
      <div
        className={`grid justify-center items-center gap-2 transition-all group hover:cursor-pointer`}
      >
        <div className="flex justify-center items-center w-[200px] h-[200px] rounded-full bg-gray-200 p-4 transition-all group-hover:bg-gray-300 overflow-hidden">
          <img src={image} alt={"category"} className="rounded-full" />
        </div>
        <h6 className="transition-all group-hover:!font-[600] group-hover:underline text-center">
          {title}
        </h6>
      </div>
    </Link>
  );
};

export default CategoryCard;
