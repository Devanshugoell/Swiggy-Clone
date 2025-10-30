import React from "react";
import { Gamepad2, PowerOff } from "lucide-react";
import offlineImage from "../images/Offline.png";

export default function Offline() {
  return (
    <div className="flex flex-col justify-center mb-40 sm:mb-60 mt-6 px-4 sm:px-8 lg:flex-row lg:items-center">
      <div className="w-full max-w-2xl mx-auto">
        <div>
          <h1 className="mt-3 text-2xl sm:text-3xl text-center font-semibold text-red-500">
            Connect to the Internet
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-500 text-center px-2">
            You're offline. Check your connection.
          </p>
          <div className="grid place-items-center mt-6">
            <PowerOff size={40} className="text-red-500" />
          </div>
          <div className="mt-8 flex items-center justify-center px-4">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-black px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-bold text-black shadow-sm hover:bg-black hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <Gamepad2 size={20} className="sm:w-6 sm:h-6" /> &nbsp;
              <span className="text-base sm:text-lg md:text-xl">Wanna Play a Game?</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
