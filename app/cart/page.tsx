import Image from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
import {X} from "lucide-react";  
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import  img1 from "../../public/images/examplecart1.webp";
import  img2 from "../../public/images/examplecart2.webp";
import img3 from "../../public/images/product-1.webp";
function Cart() {
  return (
    <div>
        <Navbar></Navbar>
        <div className="mt-28 py-6 px-4 bg-[#ecffec]">
       <div className="sm:ml-[12%] ml-0">
       <h1 className="text-[2em] font-[500]">Shopping Cart</h1>
     <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Cart</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
       </div>
     </div>
<section  className="flex lg:flex-row flex-col gap-11 lg:justify-evenly justify-center items-start xl:gap-14 lg:gap-7 py-20 px-4">



<div className="flex justify-center lg:m-0 m-auto">
    <ul className="flex justify-center flex-col">
        <li className="flex md:flex-row flex-col  xl:gap-[11vmin] lg:gap-[5vmin] gap-[6vmin] items-center">
        <div className="xl:gap-[11vmin] lg:gap-[5vmin] gap-[6vmin] flex items-center">
        <div className="flex items-center sm:gap-5 gap-3">
          <Image src={img1} className="sm:w-[100px] w-[90px]" alt="example cart 1"/>
          <p className="sm:text-[0.9em] text-[0.8em]">Fresh Meat 2kg Bag</p>
          </div>
         <div>
         <p className="sm:text-[0.9em] text-[0.8em]">
                $45.00
            </p>
         </div>
        </div>

            <div className="flex items-center xl:gap-[11vmin] lg:gap-[5vmin] gap-[6vmin]">
            <div className="flex gap-5 py-2 sm:px-10 px-6 bg-white  border border-[#010f1c] rounded-full">
                <p className="sm:text-[1.2em] text-[1em]">-</p>
                <p className="sm:text-[1.2em] text-[1em]">1</p>
                <p className="sm:text-[1.2em] text-[1em]">+</p>
            </div>

            <div>
            <button className=" flex gap-4 bg-red-600 sm:text-[0.9em] text-[0.8em] text-white py-2 sm:px-8 px-6 rounded-full"><X size={20}/>Remove</button>
            </div></div></li>

            <li className="flex md:flex-row flex-col  xl:gap-[11vmin] lg:gap-[5vmin] gap-[6vmin] items-center">
        <div className="xl:gap-[11vmin] lg:gap-[5vmin] gap-[6vmin] flex items-center">
        <div className="flex items-center sm:gap-5 gap-3">
          <Image src={img2} className="sm:w-[100px] w-[90px]" alt="example cart 1"/>
          <p className="sm:text-[0.9em] text-[0.8em]">Fresh Oranges 2kg</p>
          </div>
         <div>
         <p className="sm:text-[0.9em] text-[0.8em]">
                $89.00
            </p>
         </div>
        </div>

            <div className="flex items-center xl:gap-[11vmin] lg:gap-[5vmin] gap-[6vmin]">
            <div className="flex gap-5 py-2 sm:px-10 px-6 bg-white  border border-[#010f1c] rounded-full">
                <p className="sm:text-[1.2em] text-[1em]">-</p>
                <p className="sm:text-[1.2em] text-[1em]">1</p>
                <p className="sm:text-[1.2em] text-[1em]">+</p>
            </div>

            <div>
            <button className=" flex gap-4 bg-red-600 sm:text-[0.9em] text-[0.8em] text-white py-2 sm:px-8 px-6 rounded-full"><X size={20}/>Remove</button>
            </div></div></li>

            <li className="flex md:flex-row flex-col  xl:gap-[11vmin] lg:gap-[5vmin] gap-[6vmin] items-center">
        <div className="xl:gap-[11vmin] lg:gap-[5vmin] gap-[6vmin] flex items-center">
        <div className="flex items-center sm:gap-5 gap-3">
          <Image src={img3} className="sm:w-[100px] w-[90px]" alt="example cart 1"/>
          <p className="sm:text-[0.9em] text-[0.8em]">Walnuts Us Imported</p>
          </div>
         <div>
         <p className="sm:text-[0.9em] text-[0.8em]">
                $56.00
            </p>
         </div>
        </div>

            <div className="flex items-center xl:gap-[11vmin] lg:gap-[5vmin] gap-[6vmin]">
            <div className="flex gap-5 py-2 sm:px-10 px-6 bg-white  border border-[#010f1c] rounded-full">
                <p className="sm:text-[1.2em] text-[1em]">-</p>
                <p className="sm:text-[1.2em] text-[1em]">1</p>
                <p className="sm:text-[1.2em] text-[1em]">+</p>
            </div>

            <div>
            <button className=" flex gap-4 bg-red-600 sm:text-[0.9em] text-[0.8em] text-white py-2 sm:px-8 px-6 rounded-full"><X size={20}/>Remove</button>
            </div></div></li>
         
    </ul>
</div>

<div className="flex gap-10 flex-col justify-center lg:m-0 m-auto">
    <div className="flex justify-between gap-20 items-center"><h2  className="sm:text-[1.25em] text-[1em] font-[500]">Subtotal</h2>
    <p className="sm:text-[1em] text-[0.85em] text-[#838383]">$490.00</p></div>
    <div className="flex justify-between gap-10 items-center"><h2 className="sm:text-[1.25em] text-[1em] font-[500]">Total</h2>
    <p className="sm:text-[1em] text-[0.85em] text-[#838383]">$490.00</p></div>
    <button className="py-2 px-18 text-white font-[400] bg-[#010f1c]  transition-all duration-500 hover:bg-greenBase">Proceed to Checkout</button>
</div>

</section>
        <Footer></Footer>
    </div>
  )
}

export default Cart;