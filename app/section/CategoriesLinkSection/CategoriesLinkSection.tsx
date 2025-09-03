import { Link } from "@remix-run/react";

const CategoriesLinkSection = () => {
  return (
    <section
      className={`contain flex justify-center items-center w-full gap-4`}
    >
      <Link
        to={""}
        className="subtitle_1 transition-all hover:underline hover:text-blue-500"
      >
        eBay Live
      </Link>
      <Link
        to={""}
        className="subtitle_1 transition-all hover:underline hover:text-blue-500"
      >
        Saved
      </Link>
      <Link
        to={""}
        className="subtitle_1 transition-all hover:underline hover:text-blue-500"
      >
        Electronics
      </Link>
      <Link
        to={""}
        className="subtitle_1 transition-all hover:underline hover:text-blue-500"
      >
        Motors
      </Link>
      <Link
        to={""}
        className="subtitle_1 transition-all hover:underline hover:text-blue-500"
      >
        Fashion
      </Link>
      <Link
        to={""}
        className="subtitle_1 transition-all hover:underline hover:text-blue-500"
      >
        Collectibles and Art
      </Link>
      <Link
        to={""}
        className="subtitle_1 transition-all hover:underline hover:text-blue-500"
      >
        Sports
      </Link>
      <Link
        to={""}
        className="subtitle_1 transition-all hover:underline hover:text-blue-500"
      >
        Health & Beauty
      </Link>
      <Link
        to={""}
        className="subtitle_1 transition-all hover:underline hover:text-blue-500"
      >
        Industrial equipment
      </Link>
      <Link
        to={""}
        className="subtitle_1 transition-all hover:underline hover:text-blue-500"
      >
        Home & Garden
      </Link>
      <Link
        to={""}
        className="subtitle_1 transition-all hover:underline hover:text-blue-500"
      >
        Deals
      </Link>
      <Link
        to={""}
        className="subtitle_1 transition-all hover:underline hover:text-blue-500"
      >
        Sell
      </Link>
    </section>
  );
};

export default CategoriesLinkSection;
