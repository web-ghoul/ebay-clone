import Logo from "~/components/Logo/Logo";
import Forms from "~/forms/Forms";
import login from "../../assets/images/login.jpg";

const LoginSection = () => {
  return (
    <section className="contain grid grid-rows-[auto,1fr] justify-stretch items-center gap-6 h-full">
      <div className="flex justify-between items-center gap-4 contain-md-y">
        <Logo />
      </div>
      <div className="grid justify-stretch items-start grid-cols-2 gap-6 h-full">
        <div
          style={{ backgroundImage: `url('${login}')` }}
          className={`rounded-xl h-full bg-center bg-cover bg-no-repeat`}
        />
        <Forms type={"login"} />
      </div>
    </section>
  );
};

export default LoginSection;
