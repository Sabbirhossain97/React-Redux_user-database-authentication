import React from "react";
import DashboardLogo from "../../assets/DashboardLogo";
import Logo from "../../assets/Logo";
import SearchLogo from "../../assets/SearchLogo";
import UsersLogo from "../../assets/UsersLogo";
import Notification from "../../assets/Notification";
import DoubleArrow1 from "../../assets/DoubleArrow1";
import SingleArrow1 from "../../assets/SingleArrow1";
import SingleArrow2 from "../../assets/SingleArrow2";
import DoubleArrow2 from "../../assets/DoubleArrow2";
import SalesLogo from "../../assets/SalesLogo";
import OptionsLogo from "../../assets/OptionsLogo";
export default function Users() {
  return (
    <div>
      <div className="w-full min-h-screen bg-white flex flex-row">
        {/* section 1 */}
        <div className="w-1/4 max-h-full  ">
          <div className="flex flex-col justify-center items-center ">
            <div className="ml-10 mt-10 flex flex-row ">
              <Logo />
              <p className="mt-1 ml-2 w-[98.06px] h-[36.82px]  text-[28px] font-bold text-left text-[#4e5d78]">
                Stack
              </p>
            </div>
            <div className=" mt-10">
              <h2 className="font-medium text-left text-[#b0b7c3]">PAGES</h2>
              <div className="flex flex-col mt-4">
                <div className="py-5 flex flex-row">
                  <DashboardLogo />
                  <p className="ml-4 text-sm font-medium text-left text-[#a7afbc]">
                    Dashboard
                  </p>
                </div>
                <div className="py-5 flex flex-row">
                  <UsersLogo />{" "}
                  <p className="ml-4 text-sm font-medium text-left text-[#a7afbc]">
                    Users
                  </p>
                </div>
                <div className="py-5 flex flex-row">
                  <SalesLogo />
                  <p className="ml-4 text-sm font-medium text-left text-[#a7afbc]">
                    Sales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section 2 */}
        <div className="w-full max-h-full  ">
          <div className="flex flex-row h-32 justify-between">
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
                src="image-1.png"
                className="ml-10 w-[47px] h-[47px] object-cover"
              />
            </div>
          </div>
          <div className="relative h-full ">
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
              <div className=" flex flex-row items-center py-2 rounded-xl w-11/12">
                <div className="ml-16 w-1/12  text-sm font-semibold text-left text-[#4e5d78]">
                  1
                </div>
                <div className="w-2/5 flex flex-row items-center text-sm font-semibold text-left text-[#4e5d78]">
                  <img
                    alt="error"
                    src="image-1.png"
                    className="border border-gray-200 w-[60px] h-[60px]  rounded-[15px] object-cover"
                  />
                  <p className="ml-4 text-sm font-semibold text-left text-[#4e5d78]">
                    Michael Lawson
                  </p>
                </div>
                <div className="w-2/5  text-sm font-semibold text-left text-[#4e5d78]">
                  michael.lawson@reqres.in
                </div>
                <div className="w-1/12  text-sm font-semibold text-left text-[#4e5d78]">
                  <OptionsLogo />
                </div>
              </div>

              {/* pagination */}
            </div>
            <div className="absolute bottom-16 ml-16 flex justify-start items-start gap-[5px]">
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-8 w-8 relative gap-2.5 p-2.5 rounded-lg bg-white border border-[#f1f1f1]">
                <DoubleArrow1 />
              </div>
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-8 w-8 relative gap-2.5 p-2.5 rounded-lg bg-white border border-[#f1f1f1]">
                <SingleArrow1 />
              </div>
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-8 w-8 relative gap-2.5 p-2.5 rounded-lg bg-[#2f80ed]">
                <p className="flex-grow-0 flex-shrink-0 text-[13px] font-semibold text-left text-white">
                  1
                </p>
              </div>
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-8 w-8 relative gap-2.5 p-2.5 rounded-lg bg-white border border-[#f1f1f1]">
                <p className="flex-grow-0 flex-shrink-0 text-[13px] font-semibold text-left text-[#333]">
                  2
                </p>
              </div>
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-8 w-8 relative gap-2.5 p-2.5 rounded-lg bg-white border border-[#f1f1f1]">
                <p className="flex-grow-0 flex-shrink-0 text-[13px] font-semibold text-left text-[#333]">
                  3
                </p>
              </div>
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-8 w-8 relative gap-2.5 p-2.5 rounded-lg bg-white">
                <p className="flex-grow-0 flex-shrink-0 text-[13px] font-semibold text-left text-[#333]">
                  ...
                </p>
              </div>
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-8 w-8 relative gap-2.5 p-2.5 rounded-lg bg-white border border-[#f1f1f1]">
                <p className="flex-grow-0 flex-shrink-0 text-[13px] font-semibold text-left text-[#333]">
                  10
                </p>
              </div>
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-8 w-8 relative gap-2.5 p-2.5 rounded-lg bg-white border border-[#f1f1f1]">
                <SingleArrow2 />
              </div>
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-8 w-8 relative gap-2.5 p-2.5 rounded-lg bg-white border border-[#f1f1f1]">
                <DoubleArrow2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
