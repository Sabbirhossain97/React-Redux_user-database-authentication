import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect } from "react-router-dom";
import AppleLogo from "../../assets/AppleLogo";
import EmailLogo from "../../assets/EmailLogo";
import GoogleLogo from "../../assets/GoogleLogo";
import Logo from "../../assets/Logo";
import VisibleLogo from "../../assets/VisibleLogo";
import { MdVisibilityOff } from "react-icons/md";
import PasswordIcon from "../../assets/PasswordIcon";
import { loginUser } from "../../redux/reducers/auth";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import Notification from "../Notification";
import { changeRoute } from "../../redux/reducers/auth";

export default function SignIn() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  const isLoading = useSelector((state) => state.user.loading);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  }

  useEffect(() => {
    setTimeout(() => {
      if (isAuth) {
        navigate("/users");
      } else {
        redirect("/signup")
      }
    }, 1000);
  }, [isLoading]);

  return isLoading ? <Spinner/> : (
    <div className="relative">
      <Notification/>
      <div className="flex justify-between">
        <div className="flex flex-row text-3xl mt-8 ml-16">
          <Logo />
          <p className="mt-2 ml-2 text-[28px] font-bold text-left text-[#4e5d78]">
            Stack
          </p>
        </div>
        <div className="mr-16">
          
          <select
            id="languages"
            className="mt-8 bg-slate-100 border-slate-100 text-slate-500 text-sm rounded-lg focus:border-blue-500 block w-[130px] p-4  placeholder-slate-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue="English">English (UK)</option>
            <option value="US">Bengali</option>
          </select>
        </div>
      </div>
      <div className=" mx-auto h-full w-full flex justify-center items-center flex-col mt-16">
        <div>
          <div className="text-center py-8 ">
            <h1 className="text-3xl text-[26px] font-bold text-center text-[#323b4b]">
              Sign in
            </h1>
            <h3 className=" mt-4 text-lg font-medium text-center text-[#8a94a6]">
              Welcome back,you've been missed!
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
          <div className="inline-flex items-center justify-center w-full mt-4">
            <hr className="w-full h-[1px] my-8 border-0 rounded bg-slate-200" />
            <div className=" absolute px-4 -translate-x-1/2 left-1/2 bg-white text-xl font-medium text-left text-[#b0b7c3]">
              OR
            </div>
          </div>
          {/* input sections */}
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <EmailLogo />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="placeholder:text-[#b0b7c3] text-base font-medium text-left text-[#b0b7c3]  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-5 rounded-2xl bg-white border border-[#f3f3f3]"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <PasswordIcon />
                </div>
                <input
                  type={visibility ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="placeholder:text-[#b0b7c3] text-base font-medium text-left text-[#b0b7c3] focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-5 rounded-2xl bg-white border border-[#f3f3f3]"
                  placeholder="Password"
                  required
                />
                <span onClick={() => setVisibility(!visibility)}>
                  {visibility ? (
                    <VisibleLogo />
                  ) : (
                    <MdVisibilityOff className="absolute right-4 top-6 cursor-pointer text-[#b0b7c3] h-[20px] w-[20px]" />
                  )}
                </span>
              </div>

              <div className="flex items-center mb-4 ">
                <input
                  type="checkbox"
                  value=""
                  className="w-8 h-8 text-blue-600 bg-slate-200 border-slate-200 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
                />
                <label
                  htmlFor="disabled-checkbox"
                  className="ml-2  text-base font-medium text-left text-[#b0b7c3] "
                >
                  Remember Me
                </label>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full p-5 bg-blue-500 rounded-2xl hover:bg-blue-600"
                >
                  <p className=" font-medium text-center text-white">Sign In</p>
                </button>
              </div>
              <div className="text-center mt-8">
                <p>
                  <span className=" text-base font-medium text-center text-[#b0b7c3]">
                    Don't have an account yet?
                  </span>{" "}
                  <Link to="/signup" onClick={()=>dispatch(changeRoute())}>
                    <span className=" text-base font-medium text-center text-[#377dff]">
                      Sign Up
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
