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
export default function Users() {
  return (
    <div>
      <div className="mx-auto w-[1440px] h-[1153px] relative overflow-hidden bg-white ">
        <div className="w-[159.06px] h-[45.82px]">
          <Logo />
          <p className="w-[98.06px] h-[36.82px] absolute left-[90px] top-10 text-[28px] font-bold text-left text-[#4e5d78]">
            Stack
          </p>
        </div>
        <p className="absolute left-[34px] top-[117px] text-xs font-medium text-left text-[#b0b7c3]">
          PAGES
        </p>
        <div className="w-[105px] h-[17px]">
          <p className="absolute left-[66px] top-[159px] text-sm font-medium text-left text-[#a7afbc]">
            Dashboard
          </p>

          <DashboardLogo />
        </div>
        <div className="w-[69px] h-[32.53px]">
          <p className="absolute left-[66px] top-[274px] text-sm font-medium text-left text-[#a7afbc]">
            Sales
          </p>
          <svg
            width={16}
            height={19}
            viewBox="0 0 16 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-[18.02px] absolute left-[34px] top-[275.51px]"
            preserveAspectRatio="none"
          >
            <g clip-path="url(#clip0_20_240)">
              <path
                d="M13.0588 17.1499H2.70587V18.4746H13.0588V17.1499Z"
                fill="#B0B7C3"
              />
              <path
                d="M9.74509 6.48633H6.11766C5.79275 6.48633 5.52941 6.78285 5.52941 7.14868C5.52941 7.51452 5.79275 7.81104 6.11766 7.81104H9.74509C10.07 7.81104 10.3333 7.51452 10.3333 7.14868C10.3333 6.78285 10.07 6.48633 9.74509 6.48633Z"
                fill="#B0B7C3"
              />
              <path
                d="M12.4902 9.57715H6.11766C5.79275 9.57715 5.52941 9.87367 5.52941 10.2395C5.52941 10.6053 5.79275 10.9019 6.11766 10.9019H12.4902C12.8151 10.9019 13.0784 10.6053 13.0784 10.2395C13.0784 9.87367 12.8151 9.57715 12.4902 9.57715Z"
                fill="#B0B7C3"
              />
              <path
                d="M15.6533 0.649513C15.4422 0.542651 15.1953 0.58484 15.022 0.757255L13.3747 2.39808L11.7255 0.737586C11.5022 0.512602 11.1645 0.512602 10.9412 0.737586L9.29412 2.39608L7.64687 0.737586C7.42353 0.512602 7.08609 0.512602 6.86275 0.737586L5.21353 2.39808L3.56628 0.757255C3.39316 0.585051 3.14609 0.542862 2.93491 0.649513C2.72394 0.756587 2.58825 0.992831 2.58825 1.25335V13.043H0.58825C0.263344 13.043 0 13.3395 0 13.7053V15.317C0 17.0578 1.25784 18.4741 2.80391 18.4741V17.1495C1.90647 17.1495 1.17647 16.3273 1.17647 15.317V14.3677H10.3922V15.317C10.3922 17.0578 11.65 18.4742 13.1961 18.4742C14.7421 18.4742 16 17.0579 16 15.317V1.25332C16 0.992795 15.8643 0.756587 15.6533 0.649513ZM14.8235 15.317C14.8235 16.3273 14.0933 17.1495 13.1961 17.1495C12.2988 17.1495 11.5687 16.3273 11.5687 15.317V13.7053C11.5687 13.3395 11.3053 13.043 10.9804 13.043H3.76472V2.72349L4.82609 3.78082C5.04962 4.00338 5.38569 4.00225 5.60784 3.77839L7.25491 2.1199L8.90197 3.77818C9.12531 4.00316 9.46294 4.00316 9.68628 3.77818L11.3335 2.11969L12.9806 3.77818C13.2029 4.00204 13.539 4.00292 13.7623 3.78061L14.8235 2.72353V15.317Z"
                fill="#B0B7C3"
              />
            </g>
            <defs>
              <clippath id="clip0_20_240">
                <rect
                  width={16}
                  height="18.0156"
                  fill="white"
                  transform="translate(0 0.51416)"
                />
              </clippath>
            </defs>
          </svg>
        </div>
        <div className="w-[216px] h-[50px]">
          <div className="w-[216px] h-[50px] absolute left-[16.5px] top-[199.5px] rounded-xl bg-[#f0f5fa]" />
          <p className="absolute left-[65px] top-[216px] text-sm font-medium text-left text-[#a7afbc]">
            Users
          </p>
          <UsersLogo />
        </div>
        <div className="w-[539px] h-[54px]">
          <div className="w-[539px] h-[54px] absolute left-[286.5px] top-[22.5px] rounded-[14px] bg-[#f0f5fa]" />
          <p className="absolute left-[311px] top-[41px] text-sm font-medium text-left text-[#b0b7c3]">
            Search
          </p>
          <SearchLogo />
        </div>

        <Notification />
        <div className="w-[47px] h-[47px]">
          <div className="absolute left-[1357.5px] top-[25.5px]" />
          <img
            alt="error"
            src="image-1.png"
            className="w-[47px] h-[47px] absolute left-[1357.5px] top-[25.5px] object-cover"
          />
        </div>
        <p className="absolute left-[287px] top-[125px] text-[23px] font-semibold text-left text-[#323b4b]">
          Users List
        </p>
        <div className="w-[1118px] h-11">
          <div className="w-[1118px] h-11 absolute left-[286.5px] top-[194.5px] rounded-xl bg-[#fafbfc]" />
          <p className="w-[40.13px] absolute left-[420.01px] top-[210px] text-xs font-semibold text-left text-[#4e5d78]">
            USER
          </p>
          <p className="w-[47.01px] absolute left-[801.85px] top-[210px] text-xs font-semibold text-left text-[#4e5d78]">
            EMAIL
          </p>
          <p className="w-[60px] absolute left-[1297px] top-[210px] text-xs font-semibold text-left text-[#4e5d78]">
            OPTIONS
          </p>
          <p className="w-[25.23px] absolute left-[335.16px] top-[210px] text-xs font-semibold text-left text-[#4e5d78]">
            #ID
          </p>
        </div>
        <div className="w-[1016px] h-[60px]">
          <p className="absolute left-[335px] top-[273px] text-sm font-semibold text-left text-[#4e5d78]">
            1
          </p>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 absolute left-[1327px] top-[271px]"
            preserveAspectRatio="none"
          >
            <path
              d="M2.40002 14.4C3.72551 14.4 4.80003 13.3255 4.80003 12C4.80003 10.6745 3.72551 9.59998 2.40002 9.59998C1.07452 9.59998 0 10.6745 0 12C0 13.3255 1.07452 14.4 2.40002 14.4Z"
              fill="#B0B7C3"
            />
            <path
              d="M12 14.4C13.3255 14.4 14.4 13.3255 14.4 12C14.4 10.6745 13.3255 9.59998 12 9.59998C10.6745 9.59998 9.59998 10.6745 9.59998 12C9.59998 13.3255 10.6745 14.4 12 14.4Z"
              fill="#B0B7C3"
            />
            <path
              d="M21.6 14.4C22.9255 14.4 24 13.3255 24 12C24 10.6745 22.9255 9.59998 21.6 9.59998C20.2745 9.59998 19.2 10.6745 19.2 12C19.2 13.3255 20.2745 14.4 21.6 14.4Z"
              fill="#B0B7C3"
            />
          </svg>
          <img
            alt="error"
            src="image-1.png"
            className="w-[60px] h-[60px] absolute left-[419.5px] top-[252.5px] rounded-[15px] object-cover"
          />
          <p className="absolute left-[500px] top-[273px] text-sm font-semibold text-left text-[#4e5d78]">
            Michael Lawson
          </p>
          <p className="absolute left-[802px] top-[278px] text-sm font-semibold text-left text-[#4e5d78]">
            michael.lawson@reqres.in
          </p>
        </div>

        <div className="flex justify-start items-start absolute left-[287px] top-[1089px] gap-[5px]">
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
  );
}
