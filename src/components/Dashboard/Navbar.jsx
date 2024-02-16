import React, {  useState } from "react";
import { Link } from "react-router-dom";

import alexanderImage from "../../utility/Images/alexander.jpg";
import { logout } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import {getMemberProfile} from "../../services/api"

const Navbar = (userObj) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  // const { token } = useSelector((state) => state.auth);
  // const { user } = userObj;

  function handleClick() {
    setIsHovered(!isHovered);
  }

  function handleLogoutClick() {
    setIsHovered(!isHovered);
    dispatch(logout(navigate));
  }

  function handleP() {
    setIsHovered(!isHovered);
  }

  // useEffect(() => {
  //   dispatch(getMemberProfile(token,navigate));
  //   console.log("User in Navigation Bar:",user);

  // }, []);

  return (
    <div className="sticky bg-blue-500 flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
      <div className="flex w-10/12 max-w-maxContent items-center justify-between">
        <Link to={"/dashboard"} className="hover:text-white text-gray-100">
          {/* <img src={logo} width={100} height={40} alt="ERR" className="p-3" /> */}
          <span className="font-semibold  text-lg ">
            {/* NIRF NEXUS */} RankQuest: Uni Edition
          </span>
        </Link>

        <nav>
          <ul className="flex relative gap-40">
            <li className="font-semibold hover:text-white text-gray-100 text-lg italic pt-2">
              <Link to={"/dashboard"}>Welcome, {user ? user.name : "User"}</Link>
            </li>
            <li className="font-semibold hover:text-white text-gray-100 text-xl italic pt-2">
              <Link to={"/nirf"}>NIRF</Link>
            </li>
            <li>
              <Link to={"#"}>
                <div className="relative">
                  <img
                    src={alexanderImage}
                    width={50}
                    height={50}
                    alt="ProfileLogo"
                    className="rounded-full"
                    onClick={handleClick}
                  />

                  {user ? (
                    isHovered && (
                      <div className="min-w-[150px] absolute bg-gray-200 text-black z-[1000] rounded p-2 text-lg  mt-1 ">
                        <ul className="flex flex-col gap-2">
                          <li className="text-sm font-semibold">
                            <Link
                              to={"/dashboard/studentProfile"}
                              onClick={handleP}
                              className="hover:text-gray-500 px-2 py-1 rounded"
                            >
                              My Profile
                            </Link>
                          </li>

                          <li className="text-sm font-semibold">
                            <Link
                              to={"/changePassword"}
                              onClick={handleP}
                              className="hover:text-gray-500 px-2 py-1 rounded"
                            >
                              Change Password
                            </Link>
                          </li>

                          <li className="text-sm font-semibold">
                            <Link
                              to={"/"}
                              onClick={handleLogoutClick}
                              className="hover:text-gray-500 px-2 py-1 rounded"
                            >
                              Logout
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )
                  ) : (
                    <div></div>
                  )}
                </div>
              </Link>
            </li>

            {/* <li>MyProfile</li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
