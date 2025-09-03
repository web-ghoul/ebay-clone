import { Link } from "@remix-run/react";
import Forms from "~/forms/Forms";
import Logo from "../Logo/Logo";
import ShopByCategory from "./ShopByCategory";

const Header = () => {
  return (
    <header
      className={`grid justify-stretch items-center gap-4 py-3 contain border-[1px] border-gray-200 border-solid w-screen`}
    >
      <div className={`flex justify-between items-center gap-4`}>
        <div className="flex justify-start items-center gap-1 subtitle_1">
          Hi
          <Link to={"/login"} className={"underline text-blue-600 subtitle_1"}>
            Sign In
          </Link>
          or
          <Link
            to={"/register"}
            className={"underline text-blue-600 subtitle_1"}
          >
            Register
          </Link>
        </div>
      </div>
      <div className={`flex justify-between items-center gap-4`}>
        <Logo />
        <ShopByCategory />
        <Forms type={"globalSearch"} />
      </div>
    </header>
  );
};

export default Header;
