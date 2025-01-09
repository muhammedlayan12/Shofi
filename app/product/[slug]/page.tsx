// "use client" 



// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
 
 
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { Check,Instagram,Github,Linkedin,Facebook} from "lucide-react";
// import React, { useState } from "react";
 
// type ProductData = {
//   image: string;
//   name: string;
//   title: string;
//   price: number;
//   description:string;
//   stock:string;
//   orignalPrice: number;
//   slug: string;
// };



 

 
  

// async function DynamicRouting({params}:{params:any}) {


//     const [isCartShow, setIsCartShow] = React.useState(false);
//     const [addedProductName, setAddedProductName] = React.useState("");
//     // const [isWishShow, setIsWishShow] = useState(false);
//     // const [wishProductName, setWishProductName] = useState("");
   
//     const query = `
//     *[_type == "product"] | order(__updatedAt asc){
//   image,name,title,price,orignalPrice,description,stock,
//     "slug":Slug.current
// }
//   `;

//   const cartToggler = (productName: string) => {
//     setAddedProductName(productName);
//     setIsCartShow(!isCartShow);
//     setTimeout(() => setIsCartShow(false), 3000);
//   };

 
//   console.log(query)
 
//   const products: ProductData[] = await client.fetch(query);
//   const product = products.find((product) => product.slug === params.slug);

//   return (
//    <div>
//      <Navbar></Navbar>
//      {
//      product &&(
//         <div>
//             <div className="mt-28 py-6 px-4 bg-[#ecffec]">
//        <div className="sm:ml-[12%] ml-0">
//        <h1 className="text-[2em] font-[500]">{product.name}</h1>
//      <Breadcrumb>
//   <BreadcrumbList>
//     <BreadcrumbItem>
//       <BreadcrumbLink href="/">Home</BreadcrumbLink>
//     </BreadcrumbItem>
//     <BreadcrumbSeparator />
//     <BreadcrumbItem>
//       <BreadcrumbLink href="/">Shop</BreadcrumbLink>
//     </BreadcrumbItem>
//     <BreadcrumbSeparator />
//     <BreadcrumbItem>
//       <BreadcrumbPage>{product.name}</BreadcrumbPage>
//     </BreadcrumbItem>
//   </BreadcrumbList>
// </Breadcrumb>
//        </div>
//      </div>


//      <div className="flex sm:justify-evenly justify-center md:text-start text-center md:flex-row flex-col items-center">
//         <Image src={urlFor(product.image).url()} width={500} height={500} alt={product.name} className="xl:w-[30%]"/>
//         <div className="flex flex-col gap-2 px-2">
//             <span className="text-[#737373] text-[1em]">{product.name}</span>
//             <h1 className="sm:text-[2.1em] text-[1.5em] font-[500]">{product.title}</h1>
//             <div className={`${product.stock === "In Stock" ? "text-green-700" : "text-red-600" } flex gap-3 text-[1em] text-center md:text-start md:m-0 m-auto`}>{product.stock}</div>
//             <p className="md:text-[1em] text-[0.9em] lg:w-[400px] sm:w-[300px] w-[80%] justify-center flex m-auto text-[#737373]">{product.description}</p>
//             <div className="flex gap-6 items-end md:m-0 m-auto">
                
//             <h2 className="sm:text-3xl text-2xl font-[500] ">{`$${product.price}.00`}</h2>
//             <span className="sm:text-xl text-sm line-through text-[#838383]">{`$${product.orignalPrice}.00`}</span>
//             </div>

//             <p className="text-[1.1em]">Quantity</p>
//             <div className="flex sm:flex-row flex-col gap-10 md:m-0 m-auto">
//               <div className="flex gap-5 md:m-0 m-auto">
//                 <span className="text-[1.5em] transition-all duration-500 hover:text-greenBase cursor-pointer">-</span>
//                 <span className="text-[1.5em] transition-all duration-500 hover:text-greenBase cursor-pointer">1</span>
//                 <span className="text-[1.5em] transition-all duration-500 hover:text-greenBase cursor-pointer">+</span>
//               </div>
//               <button  onClick={() => cartToggler(product.name)} className="py-2 px-12 text-[1em] bg-greenBase transition-all duration-500 hover:bg-[#010f1c] text-white">Add To Cart</button> 
//             </div>
//             <div className="flex gap-5 md:m-0 my-10 m-auto">
//         <Linkedin size={30} className="py-2 px-2 bg-greenBase rounded-full transition-all duration-500 hover:bg-[#010f1c] text-white "/>
//         <Instagram  size={30}className="py-2 px-2 bg-greenBase rounded-full transition-all duration-500 hover:bg-[#010f1c] text-white "/>
//         <Facebook size={30} className="py-2 px-2 bg-greenBase rounded-full transition-all duration-500 hover:bg-[#010f1c] text-white "/>
//         <Github size={30} className="py-2 px-2 bg-greenBase rounded-full transition-all duration-500 hover:bg-[#010f1c] text-white "/>
//       </div>
//       <div className={`${isCartShow ? "translate-y-2" : "translate-y-[-200%]"} xl:w-[25%] lg:w-[35%] md:w-[50%] sm:w-[60%] w-[100%] mx-2 z-50 transition-all duration-500 flex gap-5 bg-white fixed py-[0.5vmin] px-4 m-auto rounded-xl md:right-[40%] md:left-[40%] sm:right-[20%] sm:left-[20%] items-center top-2 justify-center`}>
//                 <Check size={35} className="text-white py-[0.35vmin] rounded-full px-2 bg-green-500"/>
//                 <p className="sm:text-lg text-sm">{`${addedProductName} Added To Cart`}</p>
                
//               </div>
               
//         </div>
//      </div>
//         </div>
//      )
// }
//      <Footer></Footer>

//    </div>
//   )
// }

// export default DynamicRouting;



import React from 'react'

function page() {
  return (
    <div>Dynamic Routing Soon</div>
  )
}

export default page