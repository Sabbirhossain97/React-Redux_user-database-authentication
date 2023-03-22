import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
export default function Notification() {
  const message = useSelector((state) => state.user.message);
  const [notification, setNotification] = useState(true);
  setTimeout(() => {
    setNotification(false);
  }, 2000);
  return (
    <div>
      {notification ? (
        <div className="flex justify-center items-center">
          <div
            className={`${
              message
                ? "top-10 transition-all duration-300 ease-in-out"
                : "-top-14 transition-all duration-300 ease-in-out"
            }  flex justify-around items-center rounded-md absolute  bg-slate-800 w-auto h-[50px] p-4`}
          >
            <p className="font-semibold text-white text-sm">{message}</p>
            <span
              onClick={() => setNotification(false)}
              className="cursor-pointer text-white ml-8 p-1 hover:bg-slate-700 rounded-md"
            >
              <AiOutlineClose />
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
