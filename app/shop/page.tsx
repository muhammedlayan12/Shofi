"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Heart, Eye, ShoppingCart, Star,Check} from "lucide-react";
import { useState, useEffect } from "react";
 
type ProductData = {
  image: string;
  title: string;
  category:string;
  price: number;
  id:number;
  description:string;
  discountedPrice: number;
};

async function fetchProducts(): Promise<ProductData[]> {
  const query = `
    *[_type=="productsData"]{
  image,description,title,id,discountedPrice,price,category
}
  `;
  return client.fetch(query);
}

function Shop() {
  const [datas, setDatas] = useState<ProductData[]>([]);
  const [isCartShow, setIsCartShow] = useState(false);
  const [addedProductName, setAddedProductName] = useState("");
  const [isWishShow, setIsWishShow] = useState(false);
  const [wishProductName, setWishProductName] = useState("");
 
  useEffect(() => {
    fetchProducts().then(setDatas).catch(console.error);
  }, []);

  const cartToggler = (productName: string) => {
    setAddedProductName(productName);
    setIsCartShow(!isCartShow);
    setTimeout(() => setIsCartShow(false), 3000);
  };

  const wishToggler = (wishName: string) => {
    setWishProductName(wishName);
    setIsWishShow(!isWishShow);
    setTimeout(() => setIsWishShow(false), 3000);
  };

  return (
    <div>
      <Navbar />
      <div className="mt-[15vmin] w-full py-6 px-4 bg-[#ecffec]">
          <div className="sm:ml-[12%] ml-0">
            <h1 className="text-[2em] font-[500]">Shop</h1>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Shop</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      <div>
        <div className=" my-[10vmin] justify-center grid xl:grid-cols-3 md:grid-cols-2 py-16 px-6 grid-cols-1 gap-4">
          {datas.map((data) => (
            <div
            className="m-auto cursor-pointer overflow-hidden relative group"
            key={data.id}
          >
            <div className="flex flex-col gap-3 absolute top-6 left-2 z-50 transition-all duration-500 opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
            <ShoppingCart
className="py-2 px-2 rounded-full transition-all duration-500 hover:bg-greenHover"
size={40}
onClickCapture={() => cartToggler(data.title)}




/>

              <Heart
                className="py-2 px-2 bg-white rounded-full transition-all duration-500 hover:bg-greenHover"
                size={40}
                onClick={() => wishToggler(data.title)}
              />
              <Dialog>
                <DialogTrigger> <Eye
                  className="py-2 px-2 bg-white rounded-full transition-all duration-500 hover:bg-greenHover"
                  size={40}
                /></DialogTrigger>
                <DialogContent>
                  <DialogHeader className="flex justify-center gap-8 py-6 px-6">
                    <Image src={urlFor(data.image).url()}
                       width={300} height={300} className="sm:w-[300px] w-[95%]" alt=" products img"/>
                    <div className="flex flex-col gap-3">
                      <p className="text-[#838383] text-md">{data.category}</p>
                      <p className="sm:text-3xl text-2xl font-semibold transition-all cursor-pointer duration-500 hover:text-greenBase">
                        {data.title}
                      </p>
                      <div className="flex gap-4 items-center">
                        {/* <span className={`${data.stock > "In Stock" ? "text-green-600" : "text-red-600"}`}>{data.stock}</span> */}
                        <Star size={15} className="border text-yellow-400"/>
                        <Star size={15} className="border text-yellow-400"/>
                        <Star size={15} className="border text-yellow-400"/>
                        <Star size={15} className="border text-yellow-400"/>
                        <span>(0) Reviews</span>
                      </div>
                      <p className="text-[#838383] sm:text-sm text-xs">{data.description}</p>
                      <p className="sm:text-2xl text-xl font-[500]">
                        {`$${data.price.toFixed(2)}`}
                        <span className=" text-[#838383] sm:text-lg text-sm ml-3 line-through">
                          {`$${data.discountedPrice.toFixed(2)}`}
                        </span>
                      </p>
                      <div className="flex gap-8">
                        <div className="flex gap-3"><button className="py-2 px-2 sm:text-xl text-md">-</button> <p className="py-2 px-2 sm:text-2xl text-xl">1</p> <button className="py-2 px-2 sm:text-xl text-md">+</button> </div>
                        <button className="py-3 sm:px-10 px-5 sm:text-lg text-xs text-white bg-[#010f1c] transition-all duration-500 hover:bg-greenHover" onClick={() => cartToggler(data.title)}>Add To Cart</button>
                      </div>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>

      <Link href={`/products/${data.id}`}>
      
      <Image
              src={urlFor(data.image).url()}   width={300} height={300}
              alt={data.title}
              className="transition-all duration-1000 hover:transform hover:scale-75"
            /> </Link>

            <div className="flex flex-col gap-0">
              <p className="text-[#838383] text-md">{data.category}</p>
              <p className="text-xl transition-all duration-500 hover:text-greenBase">
                {data.title}
              </p>
              <p className="text-lg font-[500]">
              {`$${data.price.toFixed(2)}`}
                <span className="ml-3 text-[#838383] text-sm line-through">
                  {`$${data.discountedPrice.toFixed(2)}`}
                </span>
              </p>
            </div>
            <div
  className={`${
    isCartShow ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0"
  } fixed flex items-center top-[12%] sm:w-[300px] w-[70%] left-1/2 transform -translate-x-1/2 py-2 justify-center px-2 rounded-xl bg-white text-black shadow-md transition-all duration-500 ease-in-out`}
>
  <Check size={35} className="text-white mr-3 py-2 px-2 rounded-full bg-green-500"/>
  <p className="sm:text-lg text-sm">{`${addedProductName} Add To Cart`}</p>
</div>
<div
  className={`${
    isWishShow ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0"
  } fixed flex items-center top-[12%] sm:w-[300px] w-[70%] left-1/2 transform -translate-x-1/2 py-2 justify-center px-2 rounded-xl bg-white text-black shadow-md transition-all duration-500 ease-in-out`}
>
  <Heart size={35} className="text-white mr-3 py-2 px-2 rounded-full bg-red-500"/>
  <p className="sm:text-lg text-sm">{`${wishProductName} Add To Wish`}</p>
</div>
          </div>
          ))}
        </div>
      </div>
    
      <Footer />
    </div>
  );
}

export default Shop;
