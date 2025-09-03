import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Input = ({
  name,
  placeholder,
  type,
  label,
}: {
  name: string;
  placeholder?: string;
  label?: string;
  type?: string;
}) => {
  const [show, setShow] = useState(false);
  const [focus, setFocus] = useState(false);

  return (
    <div className={`grid justify-stretch items-center gap-1 `}>
      <label htmlFor={name} className="subtitle_1">
        {label}
      </label>
      <div
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={`border-[1px] border-solid border-gray-400 rounded-lg overflow-hidden bg-gray-100 flex justify-stretch items-center gap-2 px-4 ${
          focus && "!border-blue-500"
        }`}
      >
        <input
          type={type === "password" ? (show ? "text" : type) : type || "text"}
          name={name}
          id={name}
          placeholder={placeholder}
          className={`outline-none border-none subtitle_1 w-full py-2 !bg-gray-100`}
        />
        {type === "password" &&
          (show ? (
            <IoMdEye
              className="cursor-pointer text-xl"
              onClick={() => setShow(!show)}
            />
          ) : (
            <IoMdEyeOff
              className="cursor-pointer text-xl"
              onClick={() => setShow(!show)}
            />
          ))}
      </div>
    </div>
  );
};

export default Input;
