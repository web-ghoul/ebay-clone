import { Link } from "@remix-run/react";
import logo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img src={logo} className={`w-[100px] h-auto`} alt={"logo"} />
    </Link>
  );
};

export default Logo;
