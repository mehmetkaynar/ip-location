import React, { useContext, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { AiOutlineWifi } from "react-icons/ai";
import { NavigationBars } from "./NavigationBars";
import { IP_Context } from "../context/UserIPAddress";

export const Header = () => {
  const { userip, setuserip } = useContext(IP_Context);
  // console.log(userip);

  const [inputdata, setinputdata] = useState("");
  console.log(inputdata); //! inputa girdigimizde her degeri consolda gorebilmek icin yazdim.

  const handleKeyDown = (e) => {
    // console.log(e.keyCode);
    if (inputdata !== "" && e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputdata) {
      setuserip(inputdata);
    }
  };

  return (
    <>
      <div className="container m-auto text-center p-4 search">
        <div className="text-center  p-5">
          <h3>With Your IP Address Country Information</h3>
        </div>

        <div className="row">
          <div className="col wifiIcon">
            <AiOutlineWifi size={25} />
          </div>

          <div className="col-sm-4">
            <form action="">
              <input
                type="text"
                placeholder="Your IP Address"
                required
                value={inputdata}
                onChange={(e) => setinputdata(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </form>
          </div>

          <div className="col btnSearch">
            <FcSearch size={30} type="button" onClick={handleSubmit} />
          </div>
        </div>
      </div>

      <NavigationBars />
    </>
  );
};
