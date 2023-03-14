import React from "react";
import { AiFillFacebook, AiOutlineUser } from "react-icons/ai";

function Footer() {
  return (
    <div className=" bg-black text-[#949494] py-20">
      <div className=" max-w-screen-xl mx-auto grid grid-cols-4">
        {/* 1st */}
        <div className=" flex flex-col gap-7">
          <h1 className=" text-white text-3xl">Mohamed</h1>
          <p className=" text-white text-sm tracking-wide">
            &copy; mhd@gmail.com
          </p>
          <img className=" w-56" src="" alt="" />
          <div className=" flex gap-5 text-lg text-gray-500">
            <AiFillFacebook
              fontSize={30}
              className=" hover:text-white duration-300 cursor-pointer"
            />
            <AiFillFacebook
              fontSize={30}
              className=" hover:text-white duration-300 cursor-pointer"
            />
            <AiFillFacebook
              fontSize={30}
              className=" hover:text-white duration-300 cursor-pointer"
            />
            <AiFillFacebook
              fontSize={30}
              className=" hover:text-white duration-300 cursor-pointer"
            />
          </div>
        </div>

        {/* 2nd */}
        <div className="">
          <h2 className=" text-2xl font-semibold text-white mb-4">Locate us</h2>
          <div className=" text-base flex flex-col gap-2">
            <p>Kinniya</p>
            <p>Mobile: 1234568787</p>
            <p>Phone: 102456987</p>
            <p>EMail: mhd@gmail.com</p>
          </div>
        </div>

        {/* 3rd */}
        <div className="">
          <h2 className=" text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className=" flex flex-col gap-2 text-base">
            <p className=" flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <AiOutlineUser />
              </span>
              My Account
            </p>
            <p className=" flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <AiOutlineUser />
              </span>
              My Account
            </p>
            <p className=" flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <AiOutlineUser />
              </span>
              My Account
            </p>
          </div>
        </div>

        {/* 4th */}
        <div className="flex flex-col justify-center">
          <input
            className=" bg-transparent border px-4 py-2 text-sm"
            type="text"
            placeholder="E-Mail"
          />
          <button className=" text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
