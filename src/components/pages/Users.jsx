import React, { useEffect, useState } from "react";
import DashboardLogo from "../../assets/DashboardLogo";
import Logo from "../../assets/Logo";
import SearchLogo from "../../assets/SearchLogo";
import UsersLogo from "../../assets/UsersLogo";
import Notification from "../../assets/Notification";
import DoubleArrow1 from "../../assets/DoubleArrow1";
import DoubleArrow2 from "../../assets/DoubleArrow2";
import SalesLogo from "../../assets/SalesLogo";
import OptionsLogo from "../../assets/OptionsLogo";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/reducers/auth";

export default function Users() {
  const [usersList, setUsersList] = useState(null);
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);
  const [signOut, setSignOut] = useState(false);
  const [page, setPage] = useState(1);
  const totalPage = 4;
  let pageArr = [];
  const [loggedInUserId] = useSelector((state) => state.user.loggedInUser);
  const location = useLocation();
  const getCurrentUser = async () => {
    const response = await axios.get(
      `https://reqres.in/api/users/${loggedInUserId.id}`
    );
    setCurrentUser(response.data.data);
    return response.data.data;
  };

  const getApiData = async () => {
    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}&per_page=3`
    );
    setUsersList(response.data.data);
    return response.data.data;
  };

  const handleSignOut = () => {
    dispatch(logOut());
  };

  useEffect(() => {
    getApiData();
  }, [page]);

  useEffect(() => {
    getCurrentUser();
  }, []);

  for (let i = 1; i <= totalPage; i++) {
    pageArr.push(i);
  }

  const handlePage = (key) => {
    setPage(key);
  };

  return (
    <div>
      <div className="w-full max-h-screen bg-white flex flex-row ">
        {/* section 1 */}
        <div className="w-1/4  ">
          <div className="flex flex-col justify-center items-center ">
            <div className="ml-10 mt-10 flex flex-row ">
              <Logo />
              <p className="mt-1 ml-2 w-[98.06px] h-[36.82px]  text-[28px] font-bold text-left text-[#4e5d78]">
                Stack
              </p>
            </div>
            <div className="px-5 mt-10">
              <h2 className="px-5 font-medium text-left text-[#b0b7c3]">
                PAGES
              </h2>
              <div className=" flex flex-col mt-4">
                <Link to="/dashboard">
                  <div className="py-5 px-5 flex flex-row hover:bg-gray-200 rounded-lg cursor-pointer">
                    <DashboardLogo />
                    <p className="ml-4 text-sm font-medium text-left text-[#a7afbc]">
                      Dashboard
                    </p>
                  </div>
                </Link>
                <div
                  className={`${
                    location.pathname === "/users"
                      ? "bg-gray-200 px-5 py-5 flex flex-row hover:bg-gray-200 rounded-lg cursor-pointer mt-2"
                      : "px-5 py-5 flex flex-row hover:bg-gray-200 rounded-lg cursor-pointer"
                  }`}
                >
                  <UsersLogo />{" "}
                  <p className="ml-4 text-sm font-medium text-left text-[#a7afbc]">
                    Users
                  </p>
                </div>
                <div className="mt-2 px-5 py-5 flex flex-row hover:bg-gray-200 rounded-lg cursor-pointer">
                  <SalesLogo />
                  <p className="ml-4 text-sm font-medium text-left text-[#a7afbc]">
                    Sales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1px] bg-gray-200"></div>
        {/* section 2 */}
        <div className="relative w-full max-h-screen  ">
          <div className="relative flex flex-row h-32 justify-between">
            <div className="relative w-2/5 ml-16 h-16 mt-8">
              <input
                type="text"
                className=" w-full placeholder:text-[#b0b7c3] bg-[#f0f5fa] text-base font-medium text-left text-[#b0b7c3] focus:ring-blue-500 focus:border-blue-500 block pl-5 p-4 rounded-2xl  border border-[#f3f3f3]"
                placeholder="Search"
              />
              <SearchLogo />
            </div>
            <div className="mr-28 flex flex-row items-center justify-center">
              <Notification />
              <img
                alt="error"
                src={currentUser?.avatar}
                onClick={() => setSignOut(!signOut)}
                className="cursor-pointer ml-10 w-[47px] h-[47px] object-cover rounded-[15px]"
              />
              {signOut ? (
                <div
                  onClick={handleSignOut}
                  className="cursor-pointer hover:bg-gray-300/50 font-semibold text-[#4e5d78] p-4 flex justify-center items-center text-center rounded-md absolute bottom-2 right-20 w-[100px] h-[20px] bg-gray-100"
                >
                  <h3>Sign Out</h3>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="relative h-screen ">
            <div className="relative ml-16 ">
              <p className="text-[23px] font-semibold text-left text-[#323b4b]">
                Users List
              </p>
              <div className="flex flex-row py-5 rounded-xl bg-[#fafbfc] mt-8 w-11/12">
                <p className="ml-16 w-1/12  text-sm font-semibold text-left text-[#4e5d78]">
                  #ID
                </p>
                <p className="w-2/5  text-sm font-semibold text-left text-[#4e5d78]">
                  USER
                </p>
                <p className="w-2/5  text-sm font-semibold text-left text-[#4e5d78]">
                  EMAIL
                </p>
                <p className="w-1/12  text-sm font-semibold text-left text-[#4e5d78]">
                  OPTIONS
                </p>
              </div>
              {/* users list */}
              {usersList
                ? usersList.map((item, key) => (
                    <div
                      key={key}
                      className=" flex flex-row items-center py-2 rounded-xl w-11/12"
                    >
                      <div className="ml-16 w-1/12  text-sm font-semibold text-left text-[#4e5d78]">
                        {item.id}
                      </div>
                      <div className="w-2/5 flex flex-row items-center text-sm font-semibold text-left text-[#4e5d78]">
                        <img
                          alt="error"
                          src={item.avatar}
                          className="border border-gray-200 w-[60px] h-[60px]  rounded-[15px] object-cover"
                        />
                        <p className="ml-4 text-sm font-semibold text-left text-[#4e5d78]">
                          {item.first_name} {item.last_name}
                        </p>
                      </div>
                      <div className="w-2/5  text-sm font-semibold text-left text-[#4e5d78]">
                        {item.email}
                      </div>
                      <div className="w-1/12  text-sm font-semibold text-left text-[#4e5d78]">
                        <OptionsLogo />
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          </div>
          <div className="absolute bottom-16 ml-16 flex justify-start items-start gap-[5px]">
            <div
              onClick={() => setPage(1)}
              className="cursor-pointer flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-8 w-8 relative gap-2.5 p-2.5 rounded-lg bg-white border border-[#f1f1f1] hover:bg-[#2f80ed] hover:text-white"
            >
              <span>
                <DoubleArrow1 />
              </span>
            </div>

            {pageArr.map((item, key) => (
              <div
                key={key}
                onClick={() => handlePage(key + 1)}
                className={`${
                  page === item
                    ? "bg-[#2f80ed] cursor-pointer hover:text-white text-white flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-8 w-8 relative gap-2.5 p-2.5 rounded-lg hover:bg-[#2f80ed] border border-[#f1f1f1]"
                    : "cursor-pointer hover:text-white flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-8 w-8 relative gap-2.5 p-2.5 rounded-lg hover:bg-[#2f80ed] border border-[#f1f1f1]"
                }`}
              >
                <p className="flex-grow-0 flex-shrink-0 text-[13px] font-semibold text-left ">
                  {item}
                </p>
              </div>
            ))}

            <div
              onClick={() => setPage(totalPage)}
              className="cursor-pointer hover:bg-[#2f80ed] flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-8 w-8 relative gap-2.5 p-2.5 rounded-lg bg-white border border-[#f1f1f1]"
            >
              <DoubleArrow2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
