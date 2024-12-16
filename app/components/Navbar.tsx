


"use client"


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronDown, FaHeart, FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import logo from "../../public/images/logo.svg";
import cart1 from "../../public/images/examplecart1.webp";
import cart2 from "../../public/images/examplecart2.webp";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen,setIsCartOpen] = useState(false);


  
  const [hoveredMenu, setHoveredMenu] = useState<"shop" | "pages" | null>(null);
  const [clickedMenu, setClickedMenu] = useState<"shop" | "pages" | null>(null);

 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <nav
        className="fixed z-50 navbar top-0 left-0 right-0 text-white sm:py-4 py-2 sm:px-6 md:px-10 px-4 bg-greenBase flex items-center justify-between"
      >
        <div onClick={toggleMenu} className="sm:text-xl text-lg font-light py-[0.5vmin] px-2 bg-white bg-opacity-10 rounded-lg lg:hidden block">
          ☰
        </div>

        <div className="">
          <Image src={logo} alt="shofi fresh grocery logo" className=" sm:w-full w-[30vw]" />
        </div>

        <ul className="lg:flex hidden gap-7">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li
            onMouseEnter={() => setHoveredMenu("shop")}
            onMouseLeave={() => setHoveredMenu(null)}
            className="relative"
          >
            <Link href="/shop" className="items-center flex">
              Shop <FaChevronDown className="ml-1 text-xs" />
            </Link>
            {hoveredMenu === "shop" && (
              <div className="absolute flex flex-col pr-24 top-full left-0 bg-white text-black p-4 gap-4 shadow-lg">
                <Link href="/cart" className="block">Cart</Link>
                <Link href="/wishlist" className="block">Wishlist</Link>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => setHoveredMenu("pages")}
            onMouseLeave={() => setHoveredMenu(null)}
            className="relative"
          >
            <Link href="/about" className="items-center flex">
              Pages <FaChevronDown className="ml-1 text-xs" />
            </Link>
            {hoveredMenu === "pages" && (
              <div className="absolute flex flex-col pr-24 top-full left-0 bg-white text-black p-4 gap-4 shadow-lg">
             <Link href="/about" className="block">Cart</Link>
             <Link href="/login" className="block">Login</Link>
             <Link href="/register" className="block">Register</Link>
             <Link href="/profile" className="block">Profile</Link>
             <Link href="/checkout" className="block">Checkout</Link>
              </div>
            )}
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <form action="" className="hidden xl:flex ">
  <input type="text" name="" placeholder="Search Products Here..." className="outline-none py-2 pl-4 text-black pr-[32%] bg-white rounded-l-full" id="" />
  <button className="bg-black text-center py-2 px-6 rounded-r-full border border-black transition-all duration-500 hover:bg-transparent hover:text-black">Search</button>
</form>

        <div className="flex sm:gap-5 gap-2">
          <Link
            href="/profile"
            aria-label="Profile"
            className="py-2 px-2 hidden sm:block bg-white bg-opacity-10 rounded-full"
          >
            <FaUser className="sm:text-xl text-lg text-white" />
          </Link>
          <Link
            href="/wishlist"
            aria-label="Favorites"
            className="py-2 px-2 hidden sm:block bg-white bg-opacity-10 rounded-full"
          >
            <FaHeart className="sm:text-xl text-lg text-white" />
          </Link>
          <Link
            href=""
            aria-label="Search"
            className="py-2 px-2 xl:hidden block bg-white bg-opacity-10 rounded-full"
            onClick={toggleSearch}
          >
            <FaSearch className="sm:text-xl text-lg text-white" />
          </Link>
          <Link
            href=""
            aria-label="Shopping Bag"
            className="py-2 px-2 bg-white bg-opacity-10 rounded-full"
            onClick={toggleCart}
          >
            <FaShoppingBag className="sm:text-xl text-lg text-white" />
          </Link>
        </div>
      </nav>

 
 
      <div>
        <div
          className={`${
            isMenuOpen ? "opacity-50 visible" : "opacity-[0.1] invisible"
          } fixed top-0 left-0 w-full h-full bg-black transition-all duration-700 z-40`}
          onClick={toggleMenu}
        ></div>

        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "translate-x-[-100%]"
          } fixed bg-white left-0 py-4 px-6 bottom-0 sm:w-[250px] w-[80%] transition-all duration-500 top-0 z-50`}
        >
          <div
            className="absolute top-4 right-5 text-xl cursor-pointer"
            onClick={toggleMenu}
          >
            &#x2716;
          </div>

          <ul className="absolute top-[15%] flex flex-col gap-10 sm:left-20 left-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>

                <div
                  onClick={() => setClickedMenu(clickedMenu === "shop" ? null : "shop")}
                  className="items-center flex gap-[10%] cursor-pointer"
                >
                 <Link href="/shop"> Shop</Link> <FaChevronDown className="font-light ml-1 text-sm" />
                </div>
                {clickedMenu === "shop" && (
                  <ul className="ml-4 mt-2 py-4 px-6  flex flex-col gap-4">
                    <li><Link href="/cart">Cart</Link></li>
                    <li><Link href="/wishlist">Wishlist</Link></li>
                  </ul>
                )}
   
            </li>
            <li>
              <div
                onClick={() => setClickedMenu(clickedMenu === "pages" ? null : "pages")}
                className="items-center flex gap-[10%] cursor-pointer"
              >
                <Link href="/about">Pages</Link> <FaChevronDown className="font-light ml-1 text-lg" />
              </div>
              {clickedMenu === "pages" && (
                <ul className="ml-4 flex flex-col gap-4 mt-2">
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/cart">Cart</Link></li>
                  <li><Link href="/login">Login</Link></li>
                  <li><Link href="/register">Register</Link></li>
                  <li><Link href="/profile">Profile</Link></li>
                  <li><Link href="/checkot">Checkout</Link></li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="flex sm:hidden flex-col absolute top-[50%] left-0 px-2 py-2 gap-3 w-[80%] justify-center bg-white">
            <Link className="py-2 px-6 text-white text-lg flex gap-3 justify-center items-center bg-greenBase rounded-r-full rounded-l-full" href="/profile"><FaUser/> Profile</Link>
            <Link className="py-2 px-6 text-white text-lg flex gap-3 justify-center items-center bg-greenBase rounded-r-full rounded-l-full" href="/wishlist"><FaHeart/> Wishlist</Link>
          </div>
        </div>
      </div>
      <form action="" className={`${isSearchOpen ? "translate-x-0": "translate-x-[-100%]" } flex w-[100%] top-12 fixed z-[9999] sm:right-4 right-0 transition-all duration-700`}>
  <input type="text" name="" placeholder="Search Products Here..." className="py-2  absolute shadow-xl shadow-[rgba(0,0,0,0.3)] outline-none sm:text-[0.9em] text-[0.7em] top-8 right-4 pl-4 text-black sm:w-[40%] w-[80%] bg-white rounded-l-full" id="" />
  <button className="bg-black text-center py-2 px-6 rounded-r-full border absolute top-8 shadow-xl shadow-[rgba(0,0,0,0.3)] right-4 border-black sm:text-[0.9em] text-[0.7em] text-white transition-all duration-500 hover:bg-transparent hover:text-black">Search</button>
</form>



<div
          className={`${
            isCartOpen ? "opacity-50 visible" : "opacity-[0.1] invisible"
          } fixed top-0 left-0 w-full h-full bg-black transition-all duration-700 z-40`}
          onClick={toggleCart}
        ></div>
 <div className={`${isCartOpen ? "translate-x-0" : "translate-x-full"} fixed bg-white h-full top-0 right-0 transition-all duration-500 bottom-0 z-50 sm:w-[300px] w-[80%]`}>
<div className="absolute top-4 left-4 text-lg cursor-pointer">Shopping Cart</div>
<div className="absolute top-4 right-4 text-xl font-extralight cursor-pointer" onClick={toggleCart}>&#x2716;</div>
  <ul className="flex flex-col absolute top-24 justify-center">
    
    <li className="flex items-center gap-3 px-2">
      <Image src={cart1} alt="product" width={85}/>
      <div className="flex flex-col">
        <h2 className="sm:text-[0.9em] text-[0.75em] flex gap-4">Raw Meat on White <button>&#x2716;</button></h2>
        <span className="text-greenBase text-sm">$190.00 <span className="text-xs text-[#737373]">x1</span></span>
      </div>
    </li>

    <li className="flex items-center gap-3 px-2">
      <Image src={cart2} alt="product" width={85}/>
      <div className="flex flex-col">
        <h2 className="sm:text-[0.9em] text-[0.75em] flex gap-4">Fresh Oranges Best Quality imported<button>&#x2716;</button></h2>
        <span className="text-greenBase text-sm">$220.00 <span className="text-xs text-[#737373]">x4</span></span>
      </div>
    </li>

  </ul>

  <div className="absolute top-[65%] flex flex-col gap-5 justify-center text-center w-[90%] py-2 px-2">
    <p className="flex justify-between">Subtotal: <span>$410.00</span></p>
    <Link className="py-3 rounded-full bg-greenBase text-white transition-all duration-500 hover:bg-greenHover" href="/cart">View Cart</Link>
    <Link className="py-3 rounded-full bg-greenBase text-white transition-all duration-500 hover:bg-greenHover" href="/checkout">Checkout</Link>
  </div>
</div>





    </div>
  );
}

export default Navbar;
