"use client"

import Image from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"; ;  
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useState , useEffect} from "react";
import  img1 from "../../public/images/examplecart1.webp";
import  img2 from "../../public/images/examplecart2.webp";
import img3 from "../../public/images/product-1.webp";
import img4 from "../../public/images/product-6.webp";
import img5 from "../../public/images/product-3.webp";
import { urlFor } from "@/sanity/lib/image";

function Wishlist() {


  // const addToCart = (product: any) => {
  //   const cart = JSON.parse(localStorage.getItem("cartProducts") || "[]");
  
  //   const productIndex = cart.findIndex((item: any) => item.name === product.name);
  
  //   if (productIndex > -1) {
  //     cart[productIndex].quantity += 1;
  //   } else {
  //     cart.push({ ...product, quantity: 1 });
  //   }
  
  //   localStorage.setItem("cartProducts", JSON.stringify(cart));
  //   // cartToggler(product.name);
  //   };

  const [wishItems, setWishItems] = useState<WishItem[]>([]);

useEffect(() => {
  const savedWish = localStorage.getItem("wish");
  if (savedWish) {
    setWishItems(JSON.parse(savedWish));
  }
}, []);


console.log(wishItems);
  interface WishItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }

  const removeItem = (id: string) => {
    const updatedWish = wishItems.filter((item:any) => item.id !== id);
    setWishItems(updatedWish);
  };
 
  
  
  
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
     
    {wishItems.map((items=>(
      <li key={items.id} className="flex md:flex-row flex-col sm:m-0 m-auto xl:gap-[40vmin] justify-center  text-center  lg:gap-[20vmin] md:gap-[8.5vmin] gap-[2vmin]">
      <div className="flex  sm:gap-5 justify-center text-center gap-3 items-center">
      <Image src={urlFor(items.image).url()} height={100} width={100}  alt="wishlist product" className="sm:w-[100px] w-[90px]"/>
      <p>{items.name}</p>
      </div>

      <div className="flex flex-wrap justify-center text-center gap-7 items-center">
        <p>{`$${items.price}`}</p>
        {/* <button    className="py-2 rounded-full hover:bg-[#010f1c] transition-all duration-700 px-8 bg-greenBase text-white">Add To Cart</button> */}
        <button className="py-2 rounded-full px-8 bg-red-500 text-white" onClick={()=>{removeItem(items.id)}}>Remove</button>
      </div>
    </li>

    )))}
 </ul>

</section>
        <Footer></Footer>
    </div>
  )
}

export default Wishlist;