import { Link, useLocation } from "@remix-run/react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosSwitch, IoMdInformationCircleOutline } from "react-icons/io";
import LangSwitch from "../LangSwitch/LangSwitch";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer
      className={`contain-y contain grid justify-stretch items-center gap-8  ${
          pathname === "/login" || pathname === "/register"
            ? ""
            : "bg-[#f7f7f7] border-t-[1px] border-t-solid border-t-gray-400"
        }`}
    >
      {pathname !== "/login" && pathname !== "/register" && (
        <div className={"flex justify-between items-start gap-6 flex-wrap"}>
          <div className="grid justify-stretch items-center gap-3">
            <span className="subtitle_1">Buy</span>
            <ul
              className={`grid justify-stretch items-center gap-2 footer_list`}
            >
              <li>Registration</li>
              <li>Bidding & buying help</li>
              <li>Stores</li>
              <li>Creator Collections</li>
              <li>eBay for Charity</li>
              <li>Charity Shop</li>
              <li>Seasonal Sales and events</li>
              <li>eBay Gift Cards</li>
            </ul>
          </div>

          <div className={`grid justify-stretch items-center gap-5`}>
            <div className="grid justify-stretch items-center gap-3">
              <span className="subtitle_1">Sell</span>
              <ul
                className={`grid justify-stretch items-center gap-2 footer_list`}
              >
                <li>Start selling</li>
                <li>How to sell</li>
                <li>Business sellers</li>
                <li>Affiliates</li>
              </ul>
            </div>
            <div className="grid justify-stretch items-center gap-3">
              <span className="subtitle_1">Tools & apps</span>
              <ul
                className={`grid justify-stretch items-center gap-2 footer_list`}
              >
                <li>Developers</li>
                <li>Security center</li>
                <li>Site map</li>
              </ul>
            </div>
          </div>

          <div className={`grid justify-stretch items-center gap-5`}>
            <div className="grid justify-stretch items-center gap-3">
              <span className="subtitle_1">eBay companies</span>
              <ul
                className={`grid justify-stretch items-center gap-2 footer_list`}
              >
                <li>TCGplayer</li>
              </ul>
            </div>
            <div className="grid justify-stretch items-center gap-3">
              <span className="subtitle_1">Stay connected</span>
              <ul
                className={`grid justify-stretch items-center gap-2 footer_list`}
              >
                <li>
                  <FaFacebook />
                  Facebook
                </li>
                <li>
                  <FaSquareXTwitter />X (Twitter)
                </li>
              </ul>
            </div>
          </div>

          <div className="grid justify-stretch items-center gap-3">
            <span className="subtitle_1">About eBay</span>
            <ul
              className={`grid justify-stretch items-center gap-2 footer_list`}
            >
              <li>Company info</li>
              <li>News</li>
              <li>
                Deferred Prosecution Agreement with District of Massachusetts
              </li>
              <li>Investors</li>
              <li>Careers</li>
              <li>Diversity & Inclusion</li>
              <li>Global Impact</li>
              <li>Government relations</li>
              <li>Advertise with us</li>
              <li>Policies</li>
              <li>Verified Rights Owner (VeRO) Program</li>
              <li>eCI Licenses</li>
            </ul>
          </div>

          <div className={`grid justify-stretch items-center gap-5`}>
            <div className="grid justify-stretch items-center gap-3">
              <span className="subtitle_1">Help & Contact</span>
              <ul
                className={`grid justify-stretch items-center gap-2 footer_list`}
              >
                <li>Seller Center</li>
                <li>Contact Us</li>
                <li>eBay Returns</li>
                <li>eBay Money Back Guarantee</li>
              </ul>
            </div>
            <div className="grid justify-stretch items-center gap-3">
              <span className="subtitle_1">Community</span>
              <ul
                className={`grid justify-stretch items-center gap-2 footer_list`}
              >
                <li>Announcements</li>
                <li>eBay Community</li>
                <li>eBay for Business Podcast</li>
              </ul>
            </div>
            <div className="grid justify-stretch items-center gap-3">
              <span className="subtitle_1">eBay Sites</span>
              <LangSwitch />
            </div>
          </div>
        </div>
      )}
      <div
        className={`flex justify-start items-center gap-1 flex-wrap ${
          pathname === "/login" || pathname === "/register"
            ? "justify-center"
            : "justify-start"
        }`}
      >
        <span className="subtitle_1">
          Copyright © 1995-2025 webGhoul Inc. All Rights Reserved.
        </span>
        <Link to={""} className="subtitle_1 text-blue-500 underline">
          Accessibility
        </Link>
        ,
        <Link to={""} className="subtitle_1 text-blue-500 underline">
          User Agreement
        </Link>
        ,
        <Link to={""} className="subtitle_1 text-blue-500 underline">
          Privacy
        </Link>
        ,
        <Link to={""} className="subtitle_1 text-blue-500 underline">
          Consumer Health Data
        </Link>
        ,
        <Link to={""} className="subtitle_1 text-blue-500 underline">
          Payments Terms of Use
        </Link>
        ,
        <Link to={""} className="subtitle_1 text-blue-500 underline">
          Cookies
        </Link>
        ,
        <Link to={""} className="subtitle_1 text-blue-500 underline">
          CA Privacy Notice
        </Link>
        ,
        <Link to={""} className="subtitle_1 text-blue-500 underline">
          Your Privacy Choices
        </Link>
        <IoIosSwitch className="text-blue-600" />
        and
        <Link to={""} className="subtitle_1 text-blue-500 underline">
          AdChoice
        </Link>
        <IoMdInformationCircleOutline className="text-blue-600" />
      </div>
    </footer>
  );
};

export default Footer;
