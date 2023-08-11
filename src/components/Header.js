import { Link } from "react-router-dom";
import { LOGO_URL } from "../Utils/constants";
import { useState } from "react";
const Header = () => {
    const [status, setStatus] = useState("logout");
  return (
    <div className="flex justify-between items-center bg-slate-200">
      <img src={LOGO_URL} alt="" className="w-24" />

      <div className=" flex list-none me-10 ">
        <Link to="/home">
          <li className="mx-2 hover:cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-orange-500 hover:decoration-2 hover:decoration-solid">
            Home
          </li>{" "}
        </Link>
        <Link to="/about">
          <li className="mx-2 hover:cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-orange-500 hover:decoration-2 hover:decoration-solid">
            About
          </li>{" "}
        </Link>
        <Link to="/contact">
          <li className="mx-2 hover:cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-orange-500 hover:decoration-2 hover:decoration-solid">
            Contact
          </li>
        </Link>
              
        <button className="mx-2" onClick=
            {
                  () => {
                      (status === "logout") ? setStatus("login") : setStatus("logout")
                  }}>{status}
        </button>
            
      </div>
    </div>
  );
};

export default Header;