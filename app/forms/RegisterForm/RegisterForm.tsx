import { Link } from "@remix-run/react";
import { FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from "~/components/Button/Button";
import Input from "~/components/Input/Input";
import Or from "~/components/Or/Or";

const RegisterForm = () => {
  return (
    <div className="grid justify-center items-center gap-8 w-3/4 m-auto">
      <h1 className="font-[700]">Create an account</h1>

      <div className="grid justify-stretch items-center gap-4">
        <div className="grid justify-stretch items-center gap-3">
          <div className="grid justify-stretch items-center gap-3 grid-cols-2">
            <Input
              name={"first_name"}
              placeholder={"First Name"}
              type={"text"}
            />
            <Input name={"last_name"} placeholder={"Last Name"} type={"text"} />
          </div>
          <Input name={"email"} placeholder={"Email"} type={"email"} />
          <Input name={"password"} placeholder={"Password"} type={"password"} />
        </div>
        <span className="subtitle_1 text-gray-500">
          By selecting Create personal account, you agree to our{" "}
          <Link to={""} className="text-blue-600 underline">
            User Agreement
          </Link>{" "}
          and acknowledge reading our{" "}
          <Link to={""} className="text-blue-600 underline">
            User Privacy Notice
          </Link>
          .
        </span>
        <Button>Create account</Button>
      </div>

      <Or>or continue with</Or>

      <div className="flex justify-center items-center flex-wrap gap-4">
        <Button variant={"social"}>
          <FcGoogle className="!text-xl" />
          Google
        </Button>
        <Button variant={"social"}>
          <FaFacebook className="text-blue-600 !text-xl" />
          Facebook
        </Button>
        <Button variant={"social"}>
          <FaApple className="!text-xl" />
          Apple
        </Button>
      </div>
    </div>
  );
};

export default RegisterForm;
