import React, { useState } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router";
// import { ToastContainer, toast } from 'react-toastify';
import {ToastContainer, toast} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Challenge = () => {
  const Navigate=useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [userInput,setUserInput] = useState("")
  const getDetails= async()=>{
    // const userDetails= await fetch("http://localhost:5500/heck/ctf/getDetails",{
    //   method:"POST",
    //   headers:{
    //     "content-type":"application/json",
    //     "authToken":localStorage.getItem("authKey")
    //   },
    //   referrerPolicy:"origin-when-cross-origin"
    // })
    // const finalUserDetails = await userDetails.json();
    // console.log(finalUserDetails);
  }

  const sendFlag = async ()=>{
    const flagRes= await fetch("http://localhost:5500/heck/ctf/add_flag",{
      method:"POST",
      headers:{
        "content-type":"application/json",
        "authToken":localStorage.getItem("authKey")
      },
      body:JSON.stringify({user_inpt:userInput}),
      referrerPolicy:"origin-when-cross-origin"
    })
    const finalFlagRes= await flagRes.json();
    console.log(finalFlagRes);
  }
  React.useEffect(()=>{
    if(localStorage.getItem("authKey"))
    {
      getDetails();
    }
    else{
      Navigate('/login');
    }
  })
  return (
    <div className=" flex flex-row absolute top-0 left-20">
      <ToastContainer/>
      {/* left */}

      <div className=" min-h-screen min-w-[40%] bg-gray-50 p-4 ">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/I/41cmywMOByL._SY445_SX342_QL70_ML2_.jpg"
          alt="img"
          className="h-full pt-4"
        />
      </div>

      {/* right */}

      <div className="flex flex-col min-w-[60%] ">
        {/* right top  */}

        <div className="min-w-screen bg-gray-100 min-h-[70%] shadow-md mx-auto p-12">
          {/* <FlagIcon className="h-10 w-10" /> */}
          <div className="text-gray-500 flex flex-row mt-4 space-x-4 items-center ml-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
              />
            </svg>
            <span className="text-lg text-slate-600 font-semibold atmosphere">
              Capture The Flag...
            </span>
          </div>
          <div className="px-4 text-justify mt-24">
            <div className="text-slate-600 text-2xl ">Task Number 01</div>
            <div className="text-base text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              totam placeat, atque odio omnis nihil. Optio illum quidem itaque
              non magni impedit quis veniam expedita recusandae incidunt
              corporis quos officia molestias accusamus eveniet, cupiditate
              tempora, aut natus, explicabo suscipit. Veritatis!
            </div>
            <div className="flex flex-row space-x-8 mt-12 ">
              <div className="bg-slate-300 cursor-pointer hover:bg-gray-300 shadow-lg rounded-xl px-6 py-2 border-b-2 hover:border-gray-800 border-gray-400 flex space-x-2 items-center text-slate-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
                <button
                  className="text-xl text-slate-700"
                  onClick={() => {
                    setModalOpen(true);
                  }}
                >
                  Hint 01.
                </button>
              </div>
              <div className="bg-slate-300 cursor-pointer hover:bg-gray-300 shadow-lg rounded-xl px-6 py-2 border-b-2 hover:border-gray-800 border-gray-400 flex space-x-2 items-center text-slate-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
                <button
                  className="text-xl text-slate-700"
                  onClick={() => {
                    setModalOpen(true);
                  }}
                >
                  Hint 02.
                </button>
              </div>
              <div className="bg-slate-300 cursor-pointer hover:bg-gray-300 shadow-lg rounded-xl px-6 py-2 border-b-2 hover:border-gray-800 border-gray-400 flex space-x-2 items-center text-slate-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
                <button
                  className="text-xl text-slate-700"
                  onClick={() => {
                    setModalOpen(true);
                  }}
                >
                  Hint 03.
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* right bottom  */}

        <div className="bg-gray-50 min-h-[30%] shadow-lg relative">
          <div className=" -rotate-90 absolute top-24 atmosphere text-2xl  flex items-center justify-center -ml-12 text-slate-600 ">
            Submission
          </div>

          <div className="flex flex-col items-center mt-16">
            {/* <div className="text-gray-600 text-xl justify-items-center">Submit here...</div> */}
            <div className="flex py-4 px-8 bg-gradient-to-t from-slate-200 to-slate-100 w-fit space-x-2 rounded-lg items-center justify-center mx-auto cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-700"
                onClick={()=>{
                  if(userInput.length<1)
                  {
                    toast.error("Enter a Valid Flag");
                    return;
                  }
                  sendFlag();
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                />
              </svg>

              <input
                type="text"
                className="outline-none bg-transparent flex w-full "
                placeholder="flag{example_flag}"
                onChange={(e)=>{e.preventDefault();setUserInput(e.target.value)}}
              />
            </div>
          </div>
        </div>
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}; 

export default Challenge;
