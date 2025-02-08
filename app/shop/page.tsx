// "use client"

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import Link from "next/link";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { Heart, Eye, ShoppingCart, Star,Check} from "lucide-react";
// import { useState, useEffect } from "react";
 

 

// function Shop() {
//   const [datas, setDatas] = useState<ProductData[]>([]);
//   const [isCartShow, setIsCartShow] = useState(false);
//   const [addedProductName, setAddedProductName] = useState("");
//   const [isWishShow, setIsWishShow] = useState(false);
//   const [wishProductName, setWishProductName] = useState("");
//   useEffect(()=>{
//     async function getData(){
//       try{
//         const query = `*[_type=="productsData"]{
//           id,name,image,price,oldPrice,description,rating,stockStatus
//         }`;
//         const data = await client.fetch(query);
//         console.log(data);
//         setDatas(data);
//       } catch(error){
//         console.error(error);
//       }
//     }
//     getData();
//   },[datas])

//   type ProductData = {
//     image: string;
//     price: number;
//     id:number;
//     stockStatus:string;
//     rating:number;
//     name:string;
//     description:string;
//     oldPrice: number;
//   };;
  

//   const cartToggler = (productName: string) => {
//     setAddedProductName(productName);
//     setIsCartShow(!isCartShow);
//     setTimeout(() => setIsCartShow(false), 3000);
//   };

//   const wishToggler = (wishName: string) => {
//     setWishProductName(wishName);
//     setIsWishShow(!isWishShow);
//     setTimeout(() => setIsWishShow(false), 3000);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="mt-[15vmin] w-full py-6 px-4 bg-[#ecffec]">
//           <div className="sm:ml-[12%] ml-0">
//             <h1 className="text-[2em] font-[500]">Shop</h1>
//             <Breadcrumb>
//               <BreadcrumbList>
//                 <BreadcrumbItem>
//                   <BreadcrumbLink href="/">Home</BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator />
//                 <BreadcrumbItem>
//                   <BreadcrumbPage>Shop</BreadcrumbPage>
//                 </BreadcrumbItem>
//               </BreadcrumbList>
//             </Breadcrumb>
//           </div>
//         </div>
//       <div>
//         <div className=" my-[10vmin] justify-center grid xl:grid-cols-3 md:grid-cols-2 py-16 px-6 grid-cols-1 gap-4">
//           {datas.map((data) => (
//             <div
//             className="m-auto cursor-pointer overflow-hidden relative group"
//             key={data.id}
//           >
//             <div className="flex flex-col gap-3 absolute top-6 left-2 z-50 transition-all duration-500 opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
//             <ShoppingCart
// className="py-2 px-2 rounded-full transition-all duration-500 hover:bg-greenHover"
// size={40}
// onClickCapture={() => cartToggler(data.name)}




// />

//               <Heart
//                 className="py-2 px-2 bg-white rounded-full transition-all duration-500 hover:bg-greenHover"
//                 size={40}
//                 onClick={() => wishToggler(data.name)}
//               />
//               <Dialog>
//                 <DialogTrigger> <Eye
//                   className="py-2 px-2 bg-white rounded-full transition-all duration-500 hover:bg-greenHover"
//                   size={40}
//                 /></DialogTrigger>
//                 <DialogContent>
//                   <DialogHeader className="flex justify-center gap-8 py-6 px-6">
//                     <Image src={urlFor(data.image).url()}
//                        width={300} height={300} className="sm:w-[300px] w-[95%]" alt=" products img"/>
//                     <div className="flex flex-col gap-3">
//                       {/* <p className="text-[#838383] text-md">{data.category}</p> */}
//                       <p className="sm:text-3xl text-2xl font-semibold transition-all cursor-pointer duration-500 hover:text-greenBase">
//                         {data.name}
//                       </p>
//                       <div className="flex gap-4 items-center">
//                         {/* <span className={`${data.stock > "In Stock" ? "text-green-600" : "text-red-600"}`}>{data.stock}</span> */}
//                         <Star size={15} className="border text-yellow-400"/>
//                         <Star size={15} className="border text-yellow-400"/>
//                         <Star size={15} className="border text-yellow-400"/>
//                         <Star size={15} className="border text-yellow-400"/>
//                         <span>(0) Reviews</span>
//                       </div>
//                       <p className="text-[#838383] sm:text-sm text-xs">{data.description}</p>
//                       <p className="sm:text-2xl text-xl font-[500]">
//                         {`$${data.price.toFixed(2)}`}
//                         <span className=" text-[#838383] sm:text-lg text-sm ml-3 line-through">
//                           {`$${data.oldPrice.toFixed(2)}`}
//                         </span>
//                       </p>
//                       <div className="flex gap-8">
//                         <div className="flex gap-3"><button className="py-2 px-2 sm:text-xl text-md">-</button> <p className="py-2 px-2 sm:text-2xl text-xl">1</p> <button className="py-2 px-2 sm:text-xl text-md">+</button> </div>
//                         <button className="py-3 sm:px-10 px-5 sm:text-lg text-xs text-white bg-[#010f1c] transition-all duration-500 hover:bg-greenHover" onClick={() => cartToggler(data.name)}>Add To Cart</button>
//                       </div>
//                     </div>
//                   </DialogHeader>
//                 </DialogContent>
//               </Dialog>
//             </div>

//       <Link href={`/products/${data.id}`}>
      
//       <Image
//               src={urlFor(data.image).url()}   width={350} height={350}
//               alt={data.name}
//               className="transition-all duration-1000 hover:transform hover:scale-75"
//             /> </Link>

//             <div className="flex flex-col gap-0">
//               {/* <p className="text-[#838383] text-md">{data.category}</p> */}
//               <p className="text-xl transition-all duration-500 hover:text-greenBase">
//                 {data.name}
//               </p>
//               <p className="text-lg font-[500]">
//               {`$${data.price.toFixed(2)}`}
//                 <span className="ml-3 text-[#838383] text-sm line-through">
//                   {`$${data.oldPrice.toFixed(2)}`}
//                 </span>
//               </p>
//             </div>
//             <div
//   className={`${
//     isCartShow ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0"
//   } fixed flex items-center top-[12%] sm:w-[300px] w-[70%] left-1/2 transform -translate-x-1/2 py-2 justify-center px-2 rounded-xl bg-white text-black shadow-md transition-all duration-500 ease-in-out`}
// >
//   <Check size={35} className="text-white mr-3 py-2 px-2 rounded-full bg-green-500"/>
//   <p className="sm:text-lg text-sm">{`${addedProductName} Add To Cart`}</p>
// </div>
// <div
//   className={`${
//     isWishShow ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0"
//   } fixed flex items-center top-[12%] sm:w-[300px] w-[70%] left-1/2 transform -translate-x-1/2 py-2 justify-center px-2 rounded-xl bg-white text-black shadow-md transition-all duration-500 ease-in-out`}
// >
//   <Heart size={35} className="text-white mr-3 py-2 px-2 rounded-full bg-red-500"/>
//   <p className="sm:text-lg text-sm">{`${wishProductName} Add To Wish`}</p>
// </div>
//           </div>
//           ))}
//         </div>
//       </div>
    
//       <Footer />
//     </div>
//   );
// }

// export default Shop;





 




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
import img1 from "../../public/images/product-6.webp";
import img2 from "../../public/images/product-3.webp";
import img3 from "../../public/images/product-1.webp";
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
 

 

function Shop() {
  const [datas, setDatas] = useState<ProductData[]>([]);
  const [isCartShow, setIsCartShow] = useState(false);
  const [addedProductName, setAddedProductName] = useState("");
  const [isWishShow, setIsWishShow] = useState(false);
  const [wishProductName, setWishProductName] = useState("");
  const [isAlertShow, setIsAlertShow] = useState(false);

  

  const [sortBy, setSortBy] = useState("");
  const [activeStatus, setActiveStatus] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isActiveColor, setIsActiveColor] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const showResetAlert = () => {
    setIsAlertShow(!isAlertShow);
    setTimeout(() => {
      setIsAlertShow(false);
    }, 1500);
  };


  

  
  const [wishItems, setWishItems] = useState<WishItem[]>([]);

  const addToWish = (product:any) => {
    setWishItems((prevWish:any) => {
      const updatedWish = [...prevWish];
      const productIndex = updatedWish.findIndex((item) => item.id === product.id);
  
      if (productIndex > -1) {
        updatedWish[productIndex].quantity += 1;
      } else {
        updatedWish.push({ ...product, quantity: 1 });
      }
  
  
      localStorage.setItem("wish", JSON.stringify(updatedWish));
  
      return updatedWish;
    });
  };
  
  interface WishItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }

 
  useEffect(()=>{
    async function getData(){
      try{
        const query = `*[_type=="productsData"]{
          id,name,image,price,oldPrice,description,rating,stockStatus
        }`;
        const data = await client.fetch(query);
        console.log(data);
        setDatas(data);
      } catch(error){
        console.error(error);
      }
    }
    getData();
  },[datas])

  const sortedProducts = [...datas].sort((a, b) =>
    sortBy === "lowToHigh" ? a.price - b.price : sortBy === "highToLow" ? b.price - a.price : 0
  );

  const handleSort = (order: string) => setSortBy(order);

  
  const filteredProducts = sortedProducts.filter((product) => {
    const matchesSearch = product.name
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus = activeStatus ? product.stockStatus === activeStatus : true;
    return matchesSearch && matchesStatus ;
  });

  const addToCart = (product: any) => {
    const cart = JSON.parse(localStorage.getItem("cartProducts") || "[]");
  
    const productIndex = cart.findIndex((item: any) => item.name === product.name);
  
    if (productIndex > -1) {
      cart[productIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    localStorage.setItem("cartProducts", JSON.stringify(cart));
    cartToggler(product.name);
    };
  

  type ProductData = {
    image: string;
    price: number;
    id:number;
    stockStatus:string;
    rating:number;
    name:string;
    description:string;
    oldPrice: number;
  };;
  

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
          <Navbar></Navbar>
          <div className="mt-[12vmin] w-full py-6 px-4 bg-[#ecffec]">
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
          <section className="flex items-start lg:justify-evenly justify-between my-[10vmin] px-8 lg:flex-row-reverse flex-col-reverse">


          
      <div>
        <div className=" my-[10vmin] justify-center grid xl:grid-cols-3 md:grid-cols-2 py-16 px-6 grid-cols-1 gap-4">
          {filteredProducts.map((data) => (
            <div
            className="m-auto cursor-pointer overflow-hidden relative group"
            key={data.id}
          >
            <div className="flex flex-col gap-3 absolute top-6 left-2 z-50 transition-all duration-500 opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
            {/* <ShoppingCart
className="py-2 px-2 rounded-full transition-all duration-500 hover:bg-greenHover"
size={40}
onClickCapture={() => cartToggler(data.name)}





/> */}

<ShoppingCart
  className="py-2 px-2 rounded-full transition-all duration-500 hover:bg-greenHover"
  size={40}
  onClickCapture={() => addToCart(data)}
/>


              <Heart
                className="py-2 px-2 bg-white rounded-full transition-all duration-500 hover:bg-greenHover"
                size={40}
                onClick={() => {wishToggler(data.name),addToWish(data)}}
              />
              <Dialog>
                <DialogTrigger> <Eye
                  className="py-2 px-2 bg-white rounded-full transition-all duration-500 hover:bg-greenHover"
                  size={40}
                /></DialogTrigger>
                <DialogContent>
                  <DialogHeader className="flex justify-center gap-8 py-6 px-6">
                    <Image src={urlFor(data.image).url()}
                       width={400} height={400} className="sm:w-[300px] w-[95%]" alt=" products img"/>
                    <div className="flex flex-col gap-3">
              <p className={`${data.stockStatus === "In Stock" ? "text-green-700" :"text-red-500"}  text-md`}>{data.stockStatus}</p>

                      <p className="sm:text-3xl text-2xl font-semibold transition-all cursor-pointer duration-500 hover:text-greenBase">
                        {data.name}
                      </p>
                      <div className="flex gap-4 items-center">
                        {/* <span className={`${data.stock > "In Stock" ? "text-green-600" : "text-red-600"}`}>{data.stock}</span> */}
                        {/* <Star size={15} className="border text-yellow-400"/> */}
                        {/* <Star size={15} className="border text-yellow-400"/> */}
                        {/* <Star size={15} className="border text-yellow-400"/> */}
                        {/* <Star size={15} className="border text-yellow-400"/> */}
                        <span>({data.rating}) Rating</span>
                      </div>
                      <p className="text-[#838383] sm:text-sm text-xs">{data.description}</p>
                      <p className="sm:text-2xl text-xl font-[500]">
                        {`$${data.price.toFixed(2)}`}
                        <span className=" text-[#838383] sm:text-lg text-sm ml-3 line-through">
                          {`$${data.oldPrice.toFixed(2)}`}
                        </span>
                      </p>
                      <div className="flex gap-8">
                        <div className="flex gap-3"><button className="py-2 px-2 sm:text-xl text-md">-</button> <p className="py-2 px-2 sm:text-2xl text-xl">1</p> <button className="py-2 px-2 sm:text-xl text-md">+</button> </div>
                        <button className="py-3 sm:px-10 px-5 sm:text-lg text-xs text-white bg-[#010f1c] transition-all duration-500 hover:bg-greenHover" onClick={() => cartToggler(data.name)}>Add To Cart</button>
                      </div>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>

      <Link href={`/products/${data.id}`}>
  
  
      <Image
              src={urlFor(data.image).url()}   width={320} height={320}
              alt={data.name}
              className="transition-all duration-1000 hover:transform hover:scale-75"
            /> </Link>

            <div className="flex flex-col gap-0">
              <p className={`${data.stockStatus === "In Stock" ? "text-green-700" :"text-red-500"}  text-md`}>{data.stockStatus}</p>

               <p className="text-xl transition-all duration-500 hover:text-greenBase">
                {data.name}
              </p>
              <p className="text-lg font-[500]">
              {`$${data.price.toFixed(2)}`}
                <span className="ml-3 text-[#838383] text-sm line-through">
                  {`$${data.oldPrice.toFixed(2)}`}
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
  
  <div className="px-10 gap-10 flex   flex-col   lg:w-auto w-[100%] top-0 bg-white z-10">
  
  <div className="flex flex-col gap-5">
    <h2 className="text-[1.5em] font-[501] font-poppins">Search</h2>
    <input
      type="text"
      onChange={(e)=>setSearchTerm(e.target.value)}
      placeholder="Search for products..."
      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-poppins"
    />
  </div>


   

  <div className="flex flex-col gap-5">
    <h2 className="text-[1.5em] font-[501] font-poppins">Sort by Price</h2>
    <ul className="flex flex-col gap-2">
      <li className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500" onClick={()=>(handleSort("lowToHigh"))}>Low to High</li>
      <li className="font-poppins text-[0.9em] cursor-pointer hover:text-blue-500" onClick={()=>(handleSort("highToLow"))}>High to Low</li>
    </ul>
  </div>


  <div className="flex flex-col gap-5">
    <h2 className="text-[1.5em] font-[501] font-poppins">Filter by Status</h2>
    <ul className="flex flex-col gap-2">
      
      <li onClick={()=>(setActiveStatus("In Stock"))} className="font-poppins text-[0.9em] py-2 px-6 bg-greenBase text-white rounded-xl  text-center w-[100%] cursor-pointer">
      In Stock
      </li>
      <li onClick={()=>(setActiveStatus("Out of Stock"))} className="font-poppins text-[0.9em] py-2 px-6 bg-greenBase text-white rounded-xl  text-center w-[100%] cursor-pointer">
      Out Of Stock
      </li>
    </ul>
  </div>


  <div className="flex flex-col gap-5">
            <h2 className="text-[1.5em] font-[501] font-poppins">Top Rated Products</h2>
            <ul className="flex ml-2 flex-col gap-2">
              <li className="flex items-center justify-between gap-2">
                <Image src={img1} alt="fr" width={100}/>
                <div className="flex flex-col content">
                  <span className="text-[0.9em] text-[#535353]">(5.0) Rating</span>
                  <p className="font-semibold font-poppins text-md tracking-wider">Whole Red Onion</p>
                  <p className="  text-md text-[0.9em] text-[#535353]">$25.00</p>
                </div>
              </li>

              <li className="flex items-center justify-between gap-2">
                <Image src={img2} alt="fr" width={100}/>
                <div className="flex flex-col content">
                  <span className="text-[0.9em] text-[#535353]">(3.0) Rating</span>
                  <p className="font-semibold font-poppins text-md tracking-wider">Fresh Cauliflower</p>
                  <p className="  text-md text-[0.9em] text-[#535353]">$40.00</p>
                </div>
              </li>

              <li className="flex items-center justify-between gap-2">
                <Image src={img3} alt="fr" width={100}/>
                <div className="flex flex-col content">
                  <span className="text-[0.9em] text-[#535353]">(2.0) Rating</span>
                  <p className="font-semibold font-poppins text-md tracking-wider">Ergonomic Walnuts</p>
                  <p className="  text-md text-[0.9em] text-[#535353]">$30.00</p>
                </div>
              </li>

              
              
            </ul>
            <div
          
                className=" text-center flex justify-center py-2 rounded-xl mt-6 font-poppins text-[1em] text-white w-[100%] bg-greenBase cursor-pointer "
                onClick={() => {setActiveCategory(null);setIsActiveColor(null);setSortBy("");setActiveStatus(null);showResetAlert()}}
      
              >
                Clear Filters
              
          </div>
          </div>
          

  </div>
  

      <div id="toast-simple" className={`${isAlertShow ? "top-20" : "top-[-100%]"} transition-all duration-500 flex fixed top-20  items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-green-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800`} role="alert">
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
      <div className="ps-4 text-sm font-normal text-[#838383]">Filter Reset successfully.</div>
  </div>
  </section>
  {/* <div className="flex justify-center m-auto">
  <div id="toast-simple" className={`${isError ? "top-20" : "top-[-100%]"} fixed top-20 justify-center transition-all duration-500   m-auto flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800`} role="alert">
  <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
          </svg>
          <span className="sr-only">Warning icon</span>
      </div>
      <div className="ps-4 text-sm font-normal">Failed To Fetch Products</div>
  </div>
  </div> */}


  {/* <div className="m-auto flex justify-center">
  <div id="toast-simple" className={`${isCart ? "top-20" : "top-[-100%]"} transition-all m-auto duration-500 flex fixed top-20  items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-green-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800`} role="alert">
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
      <div className="ps-4 text-sm font-normal text-[#838383]">Add To Cart Successfully</div>
  </div>
  </div> */}

  
    
          <Footer></Footer>
      </div>
  );
}

export default Shop;





 



