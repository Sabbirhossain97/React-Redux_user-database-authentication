import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { RiAppleFill } from "react-icons/ri";
import { AiFillLock } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsStack } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { CiFaceSmile } from "react-icons/ci";
export default function SignUp() {
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="flex flex-row text-3xl mt-8 ml-16">
          <BsStack className="text-blue-500 mt-1" />
          <p className="text-slate-500 font-bold ml-2">Stack</p>
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
            class="bg-slate-100 border-slate-100 text-slate-500 text-sm rounded-2xl focus:border-blue-500 block w-[150px] p-4 placeholder-slate-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>English (UK)</option>
            <option value="US">Bengali</option>
          </select>
        </div>
      </div>
      <div className="mt-12 mx-auto h-full w-full flex justify-center items-center flex-col">
        <div>
          <div className="text-center py-8 ">
            <h1 className="text-3xl font-bold">Getting Started</h1>
            <h3 className="text-xl font-normal text-slate-400 mt-4">
              Create an account to continue!
            </h3>
          </div>
          <div className="px-2 flex flex-row">
            <div className=" p-4 rounded-xl bg-slate-200/60">
              <button className="flex flex-row">
                <FcGoogle className="mt-1 text-lg" />
                <span className="text-lg ml-2 text-slate-400">
                  Sign In with Google{" "}
                </span>
              </button>
            </div>
            <div className="bg-slate-200/60 p-4 rounded-xl ml-8">
              <button className="flex flex-row">
                <RiAppleFill className="mt-1 text-lg text-slate-500" />
                <span className="text-lg ml-2 text-slate-400">
                  Sign In with Apple ID
                </span>
              </button>
            </div>
          </div>
          <div class="inline-flex items-center justify-center w-full mt-4">
            <hr class="w-full h-[1px] my-8 border-0 rounded bg-slate-200" />
            <div class="text-slate-400 absolute px-4 -translate-x-1/2 left-1/2 bg-white">
              OR
            </div>
          </div>
          {/* input sections */}
          <div className="flex flex-col mt-4">
            <div class="relative mb-6">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MdOutlineAlternateEmail className="text-slate-500 text-xl" />
              </div>
              <input
                type="text"
                className="bg-white border border-slate-200 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-5"
                placeholder="Your Email"
              />
            </div>
            <div class="relative mb-6">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <CiFaceSmile className="text-slate-500 text-xl" />
              </div>
              <input
                type="text"
                className="bg-white border border-slate-200 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-5"
                placeholder="Your Name"
              />
            </div>
            <div class="relative mb-6">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <AiFillLock className="text-slate-500 text-xl" />
              </div>
              <input
                type="text"
                className="bg-white border border-slate-200 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-5"
                placeholder="Password"
              />
            </div>
            <div class="flex items-center mb-4 ">
              <input
                disabled
                type="checkbox"
                value=""
                className="w-7 h-7 text-blue-600 bg-slate-200 border-slate-200 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
              />
              <label
                for="disabled-checkbox"
                className="ml-2 text-lg font-normal text-slate-400 "
              >
                I agree to the terms & conditions
              </label>
            </div>
            <div className="mt-4">
              <button className="w-full p-5 bg-blue-500 rounded-2xl">
                <p className="text-white">Sign In</p>
              </button>
            </div>
            <div className="text-center mt-8">
              <p>
                <span className="text-slate-400">Already have an account?</span>{" "}
                <Link to="/signin">
                  <span className="text-blue-500 font-semibold">Sign In</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
