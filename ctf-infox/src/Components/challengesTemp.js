import React from "react";


const Challenge = () => {
  return (
    <div className="overflow-hidden flex flex-row">
      {/* left */}

      <div className=" min-h-screen min-w-[40%] bg-gray-50 ">hi</div>

      {/* right */}

      <div className="flex flex-col min-w-[60%]">
        {/* right top  */}

        <div className="min-w-screen bg-gray-200 min-h-[70%] shadow-md ">
          {/* <FlagIcon className="h-10 w-10" /> */}
          <div className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
              />
            </svg>
            <span className="">Capture The Flag...</span>
          </div>
        </div>

        {/* right bottom  */}

        <div className="bg-gray-50 min-h-[30%] shadow-lg">aeron</div>
      </div>
    </div>
  );
};

export default Challenge;
