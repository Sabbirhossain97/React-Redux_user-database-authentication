import React from "react";
import EmailLogo from "../../assets/EmailLogo";
import GoogleLogo from "../../assets/GoogleLogo";
import Emoji from "../../assets/Emoji";
import Logo from "../../assets/Logo";
import { Link } from "react-router-dom";
import AppleLogo from "../../assets/AppleLogo";
import PasswordIcon from "../../assets/PasswordIcon";
export default function SignUp() {
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="flex flex-row text-3xl mt-8 ml-16">
          <Logo />
          <p className="mt-2 ml-2 text-[28px] font-bold text-left text-[#4e5d78]">
            Stack
          </p>
        </div>
        <div className="mr-16">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="languages"
            class="bg-slate-100 border-slate-100 text-slate-500 text-sm rounded-lg focus:border-blue-500 block w-[130px] p-4  placeholder-slate-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>English (UK)</option>
            <option value="US">Bengali</option>
          </select>
        </div>
      </div>
      <div className=" mx-auto h-full w-full flex justify-center items-center flex-col mt-8">
        <div>
          <div className="text-center py-8 ">
            <h1 className="text-3xl text-[26px] font-bold text-center text-[#323b4b]">
              Getting Started
            </h1>
            <h3 className=" mt-4 text-lg font-medium text-center text-[#8a94a6]">
              Create an account to continue!
            </h3>
          </div>
          <div className="px-2 flex flex-row">
            <div className=" p-4 rounded-2xl bg-[#f0f5fa]">
              <button className="flex flex-row">
                <GoogleLogo />
                <span className=" ml-2 text-[#8a94a6] text-base font-medium text-left">
                  Sign In with Google{" "}
                </span>
              </button>
            </div>
            <div className=" p-4 ml-8 rounded-2xl bg-[#f0f5fa]">
              <button className="flex flex-row">
                <AppleLogo />
                <span className=" ml-2 text-[#8a94a6] text-base font-medium text-left">
                  Sign In with Apple ID
                </span>
              </button>
            </div>
          </div>
          <div class="inline-flex items-center justify-center w-full mt-4">
            <hr class="w-full h-[1px] my-8 border-0 rounded bg-slate-200" />
            <div class=" absolute px-4 -translate-x-1/2 left-1/2 bg-white text-xl font-medium text-left text-[#b0b7c3]">
              OR
            </div>
          </div>
          {/* input sections */}
          <div className="flex flex-col">
            <div class="relative mb-6">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <EmailLogo />
              </div>
              <input
                type="text"
                className="placeholder:text-[#b0b7c3] text-base font-medium text-left text-[#b0b7c3]  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-5 rounded-2xl bg-white border border-[#ff5630]"
                placeholder="Your Email"
              />
            </div>
            <div class="relative mb-6">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Emoji />
              </div>
              <input
                type="text"
                className="placeholder:text-[#b0b7c3] text-base font-medium text-left text-[#b0b7c3]  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-5 rounded-2xl bg-white border border-[#f3f3f3]"
                placeholder="Your Name"
              />
            </div>
            <div class="relative mb-6">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <PasswordIcon />
              </div>
              <input
                type="text"
                className="placeholder:text-[#b0b7c3] text-base font-medium text-left text-[#b0b7c3] focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-5 rounded-2xl bg-white border border-[#f3f3f3]"
                placeholder="Create Password"
              />
              {/* <VisibleLogo className="absolute" /> */}
            </div>
            <div className="flex flex-row mt-2">
              <div className="w-[68px] h-1  rounded-sm bg-[#38cb89]" />
              <div className="w-[68px] h-1 ml-4 rounded-sm bg-[#38cb89]" />
              <div className="w-[68px] h-1 ml-4 rounded-sm bg-[#38cb89]" />
              <div className="w-[68px] h-1 ml-4 rounded-sm bg-[#38cb89]" />
              <div className="w-[68px] h-1 ml-4 rounded-sm bg-[#38cb89]" />
              <div className="w-[68px] h-1 ml-4 rounded-sm bg-[#f3f3f3]" />
            </div>
            <div class="flex items-center mb-4 mt-8">
              <input
                disabled
                type="checkbox"
                value=""
                className="w-8 h-8 text-blue-600 bg-slate-200 border-slate-200 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
              />
              <label
                for="disabled-checkbox"
                className="ml-2 text-base font-medium text-left text-[#b0b7c3]"
              >
                I agree to the Terms &amp; Conditions
              </label>
            </div>
            <div className="mt-4">
              <button className="w-full p-5 bg-blue-500 rounded-2xl">
                <p className=" font-medium text-center text-white">Sign Up</p>
              </button>
            </div>
            <div className="text-center mt-8">
              <p>
                <span className=" text-base font-medium text-center text-[#b0b7c3]">
                  Already have an account?
                </span>{" "}
                <Link to="/">
                  <span className=" text-base font-medium text-center text-[#377dff]">
                    Sign In
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
