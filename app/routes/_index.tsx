import BannerSection from "~/section/BannerSection/BannerSection";
import BrowseCategoriesSection from "~/section/BrowseCategoriesSection/BrowseCategoriesSection";
import CategoriesLinkSection from "~/section/CategoriesLinkSection/CategoriesLinkSection";
import HeroSection from "~/section/HeroSection/HeroSection";
import banner_2 from "../assets/images/banners/banner (3).webp";
import banner_1 from "../assets/images/banners/banner (4).webp";
import cat_1 from "../assets/images/categories/category (1).png";
import cat_2 from "../assets/images/categories/category (1).webp";
import cat_3 from "../assets/images/categories/category (2).png";
import cat_4 from "../assets/images/categories/category (2).webp";
import cat_5 from "../assets/images/categories/category (3).png";
import cat_6 from "../assets/images/categories/category (3).webp";
import cat_7 from "../assets/images/categories/category (4).webp";

import brand_1 from "../assets/images/brands/apple.png";
import brand_2 from "../assets/images/brands/dyson.png";
import brand_6 from "../assets/images/brands/lego.png";
import brand_4 from "../assets/images/brands/Nintendo.png";
import brand_5 from "../assets/images/brands/playstation.png";
import brand_7 from "../assets/images/brands/Pokémon..png";
import brand_3 from "../assets/images/brands/samsung.png";

const _index = () => {
  const categories = [
    {
      image: cat_3,
      title: "New electronics",
    },
    {
      image: cat_5,
      title: "Collectibles",
    },
    {
      image: cat_7,
      title: "Parts and accessories",
    },
    {
      image: cat_2,
      title: "Fashion",
    },
    {
      image: cat_4,
      title: "Health and beauty",
    },
    {
      image: cat_1,
      title: "Home and garden",
    },
    {
      image: cat_6,
      title: "Refurbished",
    },
  ];

  const brands = [
    {
      image: brand_1,
      title: "Apple",
    },
    {
      image: brand_2,
      title: "Dyson",
    },
    {
      image: brand_3,
      title: "Samsung",
    },
    {
      image: brand_4,
      title: "Nintendo",
    },
    {
      image: brand_5,
      title: "PlayStation",
    },
    {
      image: brand_6,
      title: "Lego",
    },
    {
      image: brand_7,
      title: "Pokémon",
    },
  ];
  return (
    <>
      <CategoriesLinkSection />
      <HeroSection />
      <BrowseCategoriesSection
        title={"Browse by categories"}
        categories={categories}
      />
      <BrowseCategoriesSection
        title={"Discover rare finds"}
        categories={categories}
      />
      <BrowseCategoriesSection
        title={"Best-selling brands on eBay"}
        categories={brands}
      />
      <div className="grid justify-stretch items-center gap-10 contain-y">
        <BannerSection banner={banner_1} />
        <BannerSection banner={banner_2} />
      </div>
    </>
  );
};

export default _index;
