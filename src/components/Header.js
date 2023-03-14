import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function Header() {
  const productData = useSelector((state) => state.cart.productData);

  return (
    <div className=" w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className=" max-w-screen-xl h-full mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link to={"/"}>
          <div className="">
            <h1 className=" font-light text-2xl">Mohamed</h1>
          </div>
        </Link>

        {/* MENU */}
        <div className=" flex items-center gap-8">
          <ul className=" flex items-center gap-8">
            <li className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 transition">
              Home
            </li>
            <li className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 transition">
              Pages
            </li>
            <li className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 transition">
              Shop
            </li>
            <li className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 transition">
              Contact
            </li>
          </ul>

          {/* ICONS */}
          <Link to={"./cart"}>
            <div className=" relative">
              <AiOutlineShoppingCart fontSize={25} />
              <span className=" absolute bg-red-700 w-5 top-[-12px] left-[15px] text-sm flex items-center justify-center font-semibold rounded-full text-white">
                {productData.length}
              </span>
            </div>
          </Link>

          <img
            className=" w-8 h-8 rounded-full"
            src="https://res.cloudinary.com/dpakxje91/image/upload/v1667974590/Screenshot_2022-11-09_114447_xl7pvt.png"
            alt=""
          />
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Header;
