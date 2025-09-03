import GlobalSearchForm from "./GlobalSearchForm/GlobalSearchForm";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";

const Forms = ({ type }: { type: string }) => {
  return (
    <form>
      {type === "globalSearch" && <GlobalSearchForm />}
      {type === "login" && <LoginForm />}
      {type === "register" && <RegisterForm />}
    </form>
  );
};

export default Forms;
