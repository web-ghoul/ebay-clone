import { Link } from "@remix-run/react";
import Logo from "~/components/Logo/Logo";
import Forms from "~/forms/Forms";
import register from "../../assets/images/register.jpg";

const RegisterSection = () => {
  return (
    <section className="contain grid grid-rows-[auto,1fr] justify-stretch items-center gap-6 h-full">
      <div className="flex justify-between items-center gap-4 contain-md-y">
        <Logo />
        <div className="flex justify-center items-center gap-2">
          <h6>Already have an account?</h6>
          <Link to={"/login"} className={`text-blue-600 underline`}>
            Sign In
          </Link>
        </div>
      </div>
      <div className="grid justify-stretch items-start grid-cols-2 gap-6 h-full">
        <div
          style={{ backgroundImage: `url('${register}')` }}
          className={`rounded-xl !h-full bg-center bg-cover bg-no-repeat`}
        />
        <Forms type={"register"} />
      </div>
    </section>
  );
};

export default RegisterSection;
