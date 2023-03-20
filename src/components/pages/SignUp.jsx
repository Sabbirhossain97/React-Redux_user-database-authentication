import React from "react";
import EmailLogo from "../../assets/EmailLogo";
import GoogleLogo from "../../assets/GoogleLogo";
import Emoji from "../../assets/Emoji";
import Logo from "../../assets/Logo";
export default function SignUp() {
  return (
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
        Sign Up with Google
      </p>
      <p className="absolute left-[797px] top-[315px] text-base font-medium text-left text-[#8a94a6]">
        Sign Up with Apple ID
      </p>
      <svg
        width={20}
        height={24}
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-6 absolute left-[764px] top-[311px]"
        preserveAspectRatio="none"
      >
        <g clip-path="url(#clip0_6_21)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.256 3.89624C14.0196 2.88584 14.5985 1.45774 14.3891 0C13.141 0.088904 11.6822 0.907396 10.831 1.97424C10.055 2.9409 9.41729 4.37889 9.66636 5.77454C11.0308 5.81828 12.439 4.98002 13.256 3.89624ZM20 17.6086C19.454 18.8561 19.1912 19.4135 18.4878 20.5185C17.5066 22.0609 16.123 23.9815 14.4069 23.9956C12.8837 24.0125 12.491 22.9725 10.4231 22.9852C8.35532 22.9965 7.92424 24.0153 6.39835 23.9998C4.6836 23.9843 3.37257 22.2514 2.39134 20.709C-0.353892 16.3992 -0.642649 11.3402 1.0502 8.64908C2.25449 6.73835 4.15399 5.6207 5.93853 5.6207C7.75455 5.6207 8.89726 6.64804 10.4013 6.64804C11.8601 6.64804 12.7482 5.61789 14.8489 5.61789C16.4391 5.61789 18.1238 6.51115 19.3226 8.05215C15.3922 10.2733 16.0286 16.0606 20 17.6086Z"
            fill="#C1C7D0"
          />
        </g>
        <defs>
          <clippath id="clip0_6_21">
            <rect width={20} height={24} fill="white" />
          </clippath>
        </defs>
      </svg>
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
      <p className="absolute left-[622px] top-[194px] text-[26px] font-bold text-left text-[#323b4b]">
        Getting Started
      </p>
      <p className="absolute left-[587px] top-[244px] text-lg font-medium text-left text-[#8a94a6]">
        Create an account to continue!
      </p>
      
      <GoogleLogo/>
      <div className="w-[540px] h-6">
        <p className="absolute left-[703px] top-96 text-xl font-medium text-left text-[#b0b7c3]">
          OR
        </p>
        <div className="w-[230px] h-0.5 absolute left-[449.5px] top-[397.5px] bg-[#f0f5fa]" />
        <div className="w-[230px] h-0.5 absolute left-[759.5px] top-[396.5px] bg-[#f0f5fa]" />
      </div>
    
      <EmailLogo/>
      <div className="w-[540px] h-[58px]">
        <div className="w-[540px] h-[58px] absolute left-[449.5px] top-[544.5px] rounded-2xl bg-white border border-[#f3f3f3]" />
        <p className="absolute left-[501px] top-[565px] text-base font-medium text-left text-[#b0b7c3]">
          Your Name
        </p>
        <Emoji/>
      </div>
      <div className="w-[540px] h-[58px]">
        <div className="w-[540px] h-[58px] absolute left-[449.5px] top-[632.5px] rounded-2xl bg-white border border-[#f3f3f3]" />
        <p className="absolute left-[501px] top-[653px] text-base font-medium text-left text-[#b0b7c3]">
          Create Password
        </p>
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 absolute left-[469px] top-[652px]"
          preserveAspectRatio="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.61905 14.0108V15.9326C9.61905 16.1335 9.79576 16.2963 10 16.2963C10.2104 16.2963 10.381 16.1275 10.381 15.9326V14.0108C10.8248 13.8583 11.1429 13.4467 11.1429 12.963C11.1429 12.3493 10.6312 11.8519 10 11.8519C9.36882 11.8519 8.85714 12.3493 8.85714 12.963C8.85714 13.4467 9.17516 13.8583 9.61905 14.0108ZM4.28571 8.14816V5.55499C4.28571 2.48645 6.84409 0 10 0C13.1495 0 15.7143 2.48705 15.7143 5.55499V8.14816C16.9784 8.15167 18 9.14838 18 10.3774V14.0741C18 17.3402 15.2714 20 11.9054 20H8.09456C4.73232 20 2 17.3469 2 14.0741V10.3774C2 9.14043 3.02273 8.15164 4.28571 8.14816ZM6.57143 8.14815V5.55619C6.57143 3.71055 8.10645 2.22222 10 2.22222C11.8897 2.22222 13.4286 3.71489 13.4286 5.55619V8.14815H6.57143Z"
            fill="#C1C7D0"
          />
        </svg>
        
      </div>
      <div className="w-[68px] h-1 absolute left-[467px] top-[715px] rounded-sm bg-[#38cb89]" />
      <div className="w-[68px] h-1 absolute left-[554px] top-[715px] rounded-sm bg-[#38cb89]" />
      <div className="w-[68px] h-1 absolute left-[641px] top-[715px] rounded-sm bg-[#38cb89]" />
      <div className="w-[68px] h-1 absolute left-[728px] top-[715px] rounded-sm bg-[#38cb89]" />
      <div className="w-[68px] h-1 absolute left-[815px] top-[715px] rounded-sm bg-[#38cb89]" />
      <div className="w-[68px] h-1 absolute left-[903px] top-[715px] rounded-sm bg-[#f3f3f3]" />
      <p className="absolute left-[495px] top-[755px] text-base font-medium text-left text-[#b0b7c3]">
        I agree to the Terms &amp; Conditions
      </p>
      <div className="w-7 h-7 absolute left-[449px] top-[749px] rounded-lg bg-[#edeff1]" />
      <div className="w-[540px] h-[58px]">
        <div className="w-[540px] h-[58px] absolute left-[449.5px] top-[808.5px] rounded-2xl bg-[#377dff] border border-[#377dff]" />
        <p className="absolute left-[690px] top-[829px] text-base font-medium text-left text-white">
          Sign Up
        </p>
      </div>
      <p className="absolute left-[593px] top-[902px] text-base font-medium text-left">
        <span className="text-base font-medium text-left text-[#b0b7c3]">
          Already have an account?{" "}
        </span>
        <span className="text-base font-medium text-left text-[#377dff]">
          Sign In
        </span>
      </p>
      <div className="w-[159.06px] h-[45.82px]">
       
        <Logo/>
        <p className="w-[98.06px] h-[36.82px] absolute left-[90px] top-[37px] text-[28px] font-bold text-left text-[#4e5d78]">
          Stack
        </p>
      </div>
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 absolute left-[949px] top-[652px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <g clip-path="url(#clip0_16_154)">
          <path
            d="M10 4.03906C6.17879 4.03906 2.71351 6.12968 0.15649 9.52541C-0.0521632 9.80361 -0.0521632 10.1923 0.15649 10.4705C2.71351 13.8703 6.17879 15.9609 10 15.9609C13.8212 15.9609 17.2865 13.8703 19.8435 10.4746C20.0522 10.1964 20.0522 9.8077 19.8435 9.5295C17.2865 6.12968 13.8212 4.03906 10 4.03906ZM10.2741 14.1976C7.73755 14.3572 5.64284 12.2665 5.80239 9.72588C5.93331 7.63117 7.63118 5.9333 9.72589 5.80238C12.2625 5.64283 14.3572 7.73345 14.1976 10.2741C14.0626 12.3647 12.3647 14.0626 10.2741 14.1976ZM10.1473 12.2584C8.78081 12.3443 7.65163 11.2192 7.74164 9.85271C7.81119 8.72353 8.72763 7.81118 9.85681 7.73754C11.2233 7.65162 12.3525 8.77671 12.2625 10.1432C12.1888 11.2765 11.2724 12.1888 10.1473 12.2584Z"
            fill="#DCDFE5"
          />
        </g>
        <defs>
          <clippath id="clip0_16_154">
            <rect width={20} height={20} fill="white" />
          </clippath>
        </defs>
      </svg>
  
    </div>
  );
}
