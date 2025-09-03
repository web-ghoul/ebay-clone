import { Slide } from "react-slideshow-image";
import CategoryCard from "~/components/CategoryCard/CategoryCard";

const BrowseCategoriesSection = ({
  title,
  categories,
}: {
  title: string;
  categories: { image: string; title: string }[];
}) => {
  const responsiveSettings = [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1220,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 552,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ];
  return (
    <section className="contain contain-y overflow-hidden h-full [&>div]:h-full [&>div>div]:h-full flex flex-col gap-6">
      <h3 className={`!font-[700]`}>{title}</h3>
      <Slide
        slidesToScroll={1}
        slidesToShow={7}
        indicators={false}
        arrows={false}
        responsive={responsiveSettings}
      >
        {categories.map((category, i) => (
          <div key={i} className="each-slide-effect relative w-full h-full">
            <CategoryCard image={category.image} title={category.title} />
          </div>
        ))}
      </Slide>
    </section>
  );
};

export default BrowseCategoriesSection;
