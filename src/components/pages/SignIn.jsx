import React from "react";
import AppleLogo from "../../assets/AppleLogo";
import EmailLogo from "../../assets/EmailLogo";
import GoogleLogo from "../../assets/GoogleLogo";
import Logo from "../../assets/Logo";
import PasswordIcon from "../../assets/PasswordIcon";
import VisibleLogo from "../../assets/VisibleLogo";
export default function SignIn() {
  return (
    <div>
      <div className="mx-auto w-[1440px] h-[1118px] relative overflow-hidden bg-white">
        <div className="w-[146px] h-[43px] absolute left-[1209px] top-[27px] rounded-2xl bg-[#f0f5fa]" />
        <div className="w-[255px] h-[58px] absolute left-[449px] top-[295px] rounded-2xl bg-[#f0f5fa]" />
        <div
          className="w-[540px] h-[58px] absolute left-[449px] top-[437px] rounded-2xl bg-white border border-[#ff5630]"
          style={{ boxShadow: "0px 6px 8px 0 rgba(255,86,48,0.1)" }}
        />
        <p className="absolute left-[450px] top-[512px] text-sm font-medium text-left text-[#ff5630]">
          Please enter a valid email address.
        </p>
        <p className="absolute left-[501px] top-[457px] text-base font-medium text-left text-[#b0b7c3]">
          Your Email
        </p>
        <div className="w-[255px] h-[58px] absolute left-[734px] top-[295px] rounded-2xl bg-[#f0f5fa]" />
        <p className="absolute left-[514px] top-[315px] text-base font-medium text-left text-[#8a94a6]">
          Sign In with Google
        </p>
        <p className="absolute left-[797px] top-[315px] text-base font-medium text-left text-[#8a94a6]">
          Sign In with Apple ID
        </p>

        <AppleLogo />
        <svg
          width={11}
          height={7}
          viewBox="0 0 11 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[1332.5px] top-[45.5px]"
          preserveAspectRatio="none"
        >
          <path
            d="M1 1L5.5 6L10 1"
            stroke="#B0B7C3"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="absolute left-[1228px] top-[42px] text-xs font-medium text-left text-[#b0b7c3]">
          English (UK)
        </p>
        <p className="absolute left-[677px] top-[194px] text-[26px] font-bold text-center text-[#323b4b]">
          Sign In
        </p>
        <p className="absolute left-[565px] top-[244px] text-lg font-medium text-center text-[#8a94a6]">
          Welcome back, you’ve been missed!
        </p>
        <GoogleLogo />
        <div className="w-[540px] h-6">
          <p className="absolute left-[703px] top-96 text-xl font-medium text-left text-[#b0b7c3]">
            OR
          </p>
          <div className="w-[230px] h-0.5 absolute left-[449.5px] top-[397.5px] bg-[#f0f5fa]" />
          <div className="w-[230px] h-0.5 absolute left-[759.5px] top-[396.5px] bg-[#f0f5fa]" />
        </div>
        <EmailLogo />
        <div className="w-[540px] h-[58px]">
          <div className="w-[540px] h-[58px] absolute left-[449.5px] top-[543.5px] rounded-2xl bg-white border border-[#f3f3f3]" />
          <p className="absolute left-[501px] top-[564px] text-base font-medium text-left text-[#b0b7c3]">
            Password
          </p>
          <PasswordIcon />
        </div>
        <p className="absolute left-[495px] top-[623px] text-base font-medium text-left text-[#b0b7c3]">
          Remember Me
        </p>
        <div className="w-7 h-7 absolute left-[449px] top-[617px] rounded-lg bg-[#edeff1]" />
        <div className="w-[540px] h-[58px]">
          <div className="w-[540px] h-[58px] absolute left-[449.5px] top-[676.5px] rounded-2xl bg-[#377dff] border border-[#377dff]" />
          <p className="absolute left-[694px] top-[697px] text-base font-medium text-center text-white">
            Sign In
          </p>
        </div>
        <p className="absolute left-[584px] top-[770px] text-base font-medium text-center">
          <span className="text-base font-medium text-center text-[#b0b7c3]">
            Don’t have an account yet?{" "}
          </span>
          <span className="text-base font-medium text-center text-[#377dff]">
            Sign Up
          </span>
        </p>
        <div className="w-[159.06px] h-[45.82px]">
          <Logo />
          <p className="w-[98.06px] h-[36.82px] absolute left-[90px] top-[37px] text-[28px] font-bold text-left text-[#4e5d78]">
            Stack
          </p>
        </div>
        <VisibleLogo/>
      </div>
    </div>
  );
}
