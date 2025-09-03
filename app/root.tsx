import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  useLocation,
} from "@remix-run/react";
import "react-slideshow-image/dist/styles.css";
import logo from "./assets/images/logo.png";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import stylesheet from "./tailwind.css?url";
import { CountryTypes } from "./types/app";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "icon", href: logo },
];

export const meta: MetaFunction = () => {
  return [
    { title: "E-Commerce App" },
    {
      name: "description",
      content:
        "An e-commerce platform built with Remix, Vite, and Tailwind CSS.",
    },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,cca2"
  );
  const countries: CountryTypes[] = await res.json();
  return json({ countries });
}

export default function App() {
  const { pathname } = useLocation();

  return (
    <html lang={"en"} dir={"ltr"}>
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main
          className={`grid justify-stretch items-center content-between gap-4 w-screen min-h-screen ${(pathname === "/login" || pathname === "/register") && "grid-rows-[2fr,auto]"}`}
        >
          {!(pathname === "/login" || pathname === "/register") && <Header />}
          <Outlet />
          <Footer />
        </main>
        <Scripts />
      </body>
    </html>
  );
}
