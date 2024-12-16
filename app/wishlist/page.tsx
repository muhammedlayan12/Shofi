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
import img4 from "../../public/images/product-6.webp";
import img5 from "../../public/images/product-3.webp";

function Cart() {
  return (
    <div>
        <Navbar></Navbar>
        <div className="mt-28 py-6 px-4 bg-[#ecffec]">
       <div className="sm:ml-[12%] ml-0">
       <h1 className="text-[2em] font-[500]">Wishlist</h1>
     <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Wishlist</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
       </div>
     </div>
<section  className="flex lg:flex-row flex-col gap-11  items-start xl:gap-14 lg:gap-7 py-20 pr-4 lg:pl-[10%] pl-4">


 <ul className="flex flex-col gap-10 py-6 px-4">
    <li className="flex md:flex-row flex-col sm:m-0 m-auto xl:gap-[40vmin] justify-center  text-center  lg:gap-[20vmin] md:gap-[8.5vmin] gap-[2vmin]">
      <div className="flex  sm:gap-5 justify-center text-center gap-3 items-center">
      <Image src={img1} alt="wishlist product" className="sm:w-[100px] w-[90px]"/>
      <p>Fresh Meat 2kg bag</p>
      </div>

      <div className="flex flex-wrap justify-center text-center gap-7 items-center">
        <p>$54.00</p>
        <button className="py-2 rounded-full hover:bg-[#010f1c] transition-all duration-700 px-8 bg-greenBase text-white">Add To Cart</button>
        <button className="py-2 rounded-full px-8 bg-red-500 text-white">Remove</button>
      </div>
    </li>

    <li className="flex md:flex-row flex-col sm:m-0 m-auto xl:gap-[40vmin] justify-center  text-center  lg:gap-[20vmin] md:gap-[8.5vmin] gap-[2vmin]">
      <div className="flex  sm:gap-5 justify-center text-center gap-3 items-center">
      <Image src={img2} alt="wishlist product" className="sm:w-[100px] w-[90px]"/>
      <p>Fresh Oranges 2kg</p>
      </div>

      <div className="flex flex-wrap justify-center text-center gap-7 items-center">
        <p>$95.00</p>
        <button className="py-2 rounded-full hover:bg-[#010f1c] transition-all duration-700 px-8 bg-greenBase text-white">Add To Cart</button>
        <button className="py-2 rounded-full px-8 bg-red-500 text-white">Remove</button>
      </div>
    </li>

    <li className="flex md:flex-row flex-col sm:m-0 m-auto xl:gap-[40vmin] justify-center  text-center  lg:gap-[20vmin] md:gap-[8.5vmin] gap-[2vmin]">
      <div className="flex  sm:gap-5 justify-center text-center gap-3 items-center">
      <Image src={img3} alt="wishlist product" className="sm:w-[100px] w-[90px]"/>
      <p>Walnuts Us Imported</p>
      </div>

      <div className="flex flex-wrap justify-center text-center gap-7 items-center">
        <p>$73.00</p>
        <button className="py-2 rounded-full hover:bg-[#010f1c] transition-all duration-700 px-8 bg-greenBase text-white">Add To Cart</button>
        <button className="py-2 rounded-full px-8 bg-red-500 text-white">Remove</button>
      </div>
    </li>

    <li className="flex md:flex-row flex-col sm:m-0 m-auto xl:gap-[40vmin] justify-center  text-center  lg:gap-[20vmin] md:gap-[8.5vmin] gap-[2vmin]">
      <div className="flex  sm:gap-5 justify-center text-center gap-3 items-center">
      <Image src={img4} alt="wishlist product" className="sm:w-[100px] w-[90px]"/>
      <p>Red Fresh Onion 1kg</p>
      </div>

      <div className="flex flex-wrap justify-center text-center gap-7 items-center">
        <p>$84.00</p>
        <button className="py-2 rounded-full hover:bg-[#010f1c] transition-all duration-700 px-8 bg-greenBase text-white">Add To Cart</button>
        <button className="py-2 rounded-full px-8 bg-red-500 text-white">Remove</button>
      </div>
    </li>

    <li className="flex md:flex-row flex-col sm:m-0 m-auto xl:gap-[40vmin] justify-center  text-center  lg:gap-[20vmin] md:gap-[8.5vmin] gap-[2vmin]">
      <div className="flex  sm:gap-5 justify-center text-center gap-3 items-center">
      <Image src={img5} alt="wishlist product" className="sm:w-[100px] w-[90px]"/>
      <p>Fresh green Cauliflower</p>
      </div>

      <div className="flex flex-wrap justify-center text-center gap-7 items-center">
        <p>$74.00</p>
        <button className="py-2 rounded-full hover:bg-[#010f1c] transition-all duration-700 px-8 bg-greenBase text-white">Add To Cart</button>
        <button className="py-2 rounded-full px-8 bg-red-500 text-white">Remove</button>
      </div>
    </li>

 </ul>

</section>
        <Footer></Footer>
    </div>
  )
}

export default Cart;