import { ReactNode } from "react";

const Or = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex justify-stretch items-center w-full">
      <hr className="border-gray-400 w-full" />
      <span className="subtitle_1 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white flex justify-center items-center px-2 py-1 z-[2]">
        {children}
      </span>
    </div>
  );
};

export default Or;
