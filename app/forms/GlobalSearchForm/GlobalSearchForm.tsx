import { IoSearch } from "react-icons/io5";
import Button from "~/components/Button/Button";

const GlobalSearchForm = () => {
  return (
    <div className={`flex justify-center items-center gap-4 w-full`}>
      <div
        className={`flex justify-start items-center border-[2px] border-solid border-gray-400 gap-2 px-3 py-2 rounded-full`}
      >
        <IoSearch className={`text-xl`} />
        <input
          type="search"
          placeholder="Search for anything..."
          className="outline-none border-none subtitle_1"
          name={"search"}
        />
      </div>
      <Button>Search</Button>
    </div>
  );
};

export default GlobalSearchForm;
