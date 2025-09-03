import { useRouteLoaderData } from "@remix-run/react";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import type { loader as rootLoader } from "../../root";

const LangSwitch = () => {
  const data = useRouteLoaderData<typeof rootLoader>("root");
  const [country, setCountry] = useState(data?.countries[236]);

  return (
    <div className="relative group">
      <button
        type={"button"}
        className={`bg-white px-4 py-2 rounded-lg border-[1px] border-solid border-gray-600 flex justify-between items-center gap-4 group`}
      >
        <img
          src={country?.flags.svg}
          alt={country?.flags.alt}
          className="w-[25px] h-auto"
        />
        <div className="flex justify-center items-center gap-2">
          <span className="subtitle_1 group-hover:underline">
            {country?.name.common}
          </span>
          <IoChevronDown />
        </div>
      </button>
      <div className="absolute bg-white p-4 shadow-xl rounded-xl hidden group-hover:!grid hover:!grid justify-stretch items-center grid-cols-6 gap-4 w-[75vw] h-[75vh] overflow-y-auto bottom-full right-0 group">
        {data?.countries
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          .map((country, i) => (
            <button
              type={"button"}
              onClick={() => setCountry(country)}
              className="flex justify-stretch items-center gap-2 group"
            >
              <img
                src={country.flags.svg}
                alt={country.flags.alt}
                className="w-[25px] h-auto"
              />
              <span className="subtitle_1 hover:underline text-start">
                {country.name.common}
              </span>
            </button>
          ))}
      </div>
    </div>
  );
};

export default LangSwitch;
