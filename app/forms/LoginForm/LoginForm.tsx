import { Link } from "@remix-run/react";
import { useState } from "react";
import { FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { MdInfoOutline } from "react-icons/md";
import Button from "~/components/Button/Button";
import Input from "~/components/Input/Input";
import Or from "~/components/Or/Or";

const LoginForm = () => {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <div className="grid justify-stretch items-center gap-8 w-3/4 m-auto">
      <div className="grid justify-stretch items-center gap-4">
        <h1 className="font-[700]">Sign in to your account</h1>
        <div className="bg-gray-100 flex justify-between items-center gap-2 rounded-xl px-4 py-2 w-full">
          <span className="subtitle_1">New to webGhoul?</span>
          <Link
            to={"/register"}
            className="outline-none border-[1px] border-solid border-gray-400 bg-transparent px-4 py-1 rounded-full subtitle_1"
            type={"button"}
          >
            Create account
          </Link>
        </div>
      </div>

      <div className="grid justify-stretch items-center gap-4">
        <Input
          name={"email"}
          placeholder={"Email or username"}
          type={"email"}
        />
        <Button>Continue</Button>
      </div>

      <Or>or</Or>

      <div className="grid justify-stretch items-center gap-4">
        <div className="grid justify-stretch items-center gap-4">
          <Button variant={"social"}>
            <FcGoogle className="!text-xl" />
            Continue with Google
          </Button>
          <Button variant={"social"}>
            <FaFacebook className="text-blue-600 !text-xl" />
            Continue with Facebook
          </Button>
          <Button variant={"social"}>
            <FaApple className="!text-xl" />
            Continue with Apple
          </Button>
        </div>
        <div className="flex justify-center items-center gap-2">
          <input type="checkbox" name={"stay"} id={"stay"} title={"stay"} />
          <label htmlFor="stay" className="subtitle_1 font-[550]">
            Stay signed in
          </label>
          <div className="relative">
            <MdInfoOutline
              className={`text-xl`}
              onClick={() => setInfoOpen(!infoOpen)}
            />

            <div
              className={`shadow-xl bg-white p-4 absolute left-[50%] translate-x-[-50%] w-[400px] rounded-xl ${
                infoOpen ? "flex" : "hidden"
              } justify-between items-start content-start self-start gap-8 transition-all`}
            >
              <span className="subtitle_1">
                We'll keep you signed in on this device but may ask you to sign
                in for certain activities. You can turn this off anytime in My
                webGhoul.
              </span>
              <IoClose
                className="text-5xl h-fit cursor-pointer"
                onClick={() => setInfoOpen(!infoOpen)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
