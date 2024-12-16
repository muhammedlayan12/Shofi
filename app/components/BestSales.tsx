// "use client"


// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import {Heart,Eye,ShoppingCart,Star,Check} from "lucide-react";
// import { useState } from "react";


// import Link from "next/link";
// import Image from "next/image";
// import img1 from "../../public/images/product-1.webp";
// import img2 from "../../public/images/product-3.webp";
// import img3 from "../../public/images/product-5.webp";

// import img10 from "../../public/images/best-banner-1.jpg";

// function BestSales() {

//     let products = [
//         {
//           id: 1,
//           image: img1,
//           alt: "Walnut",
//           name: "Walnut",
//           description: "Ergonomic Linen Pants",
//           price: "$25.00",
//           originalPrice: "$54.00",
//           review: "I purchased these walnuts and was amazed by their quality. They are fresh, crunchy, and packed with flavor. Perfect for baking or just snacking. The packaging is great and keeps the nuts fresh for a long time. Delivery was prompt, and customer service was very responsive. These walnuts are a must-have for anyone looking for premium quality nuts. Highly recommended for their freshness and taste."
//         },
//         {
//           id: 2,
//           image: img2,
//           alt: "Cauliflower",
//           name: "Cauliflower",
//           description: "Eat Fresh & Stay Fresh",
//           price: "$30.00",
//           originalPrice: "$55.00",
//           review: "This cauliflower was exceptionally fresh and had a vibrant, healthy look. It cooked perfectly and retained its crunch and flavor. Ideal for soups, curries, or even roasting. The size was generous, and it arrived without any blemishes. This is my go-to choice for fresh produce now. Definitely worth the price and a healthier alternative to frozen options. Highly impressed with the quality!"
//         },
//         {
//           id: 3,
//           image: img3,
//           alt: "Hot Chocolate",
//           name: "Hot Chocolate",
//           description: "Chocolate Protein Booster",
//           price: "$20.00",
//           originalPrice: "$50.00",
//           review: "This hot chocolate mix is a treat for chocolate lovers! The flavor is rich and creamy, making every sip a delight. It dissolves quickly and evenly in milk or water. Perfect for cold winter nights or a quick comfort drink. The packaging is convenient and keeps the mix fresh for multiple uses. Excellent value for money, and it's a hit with both kids and adults. I can't recommend this enough!"
//         }
//     ];

//     const [setCartShow, setIsCartShow] = useState(false);
//   const [addedProductName, setAddedProductName] = useState("");
//   const [setWishShow, setIsWishShow] = useState(false);
//   const [wishProductName, setWishProductName] = useState("");

//   const cartToggler = (productName:any) => {
//     setAddedProductName(productName);
//     setIsCartShow(!setCartShow);
//     setTimeout(() => setIsCartShow(false), 3000);
//   }



//   const wishToggler = (wishName:any) => {
//     setWishProductName(wishName);
//     setIsWishShow(!setWishShow);
//     setTimeout(() => setIsWishShow(false), 3000);
//   }
  

//   return (
//     <div>
        

//         <section className="flex flex-col justify-center m-auto  py-16 px-6 text-center">
//         <span className="uppercase tracking-widest text-greenBase text-sm font-normal">More To Discover</span>
//  <h1 className="xl:text-[3em] lg:text-[2.6em] md:text-[2.2em] sm:text-[1.85em] text-[1.75em] font-[500]">Best Sales Of The Week</h1>
  


    
        
        
//                 <div className="m-auto grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center  text-start ">

                    
//               <Link href="/shop">
//               <Image src={img10} alt="offer 15%off banner"/></Link>
//           {products.map((product) => (
//             <div
//               className="cursor-pointer m-auto overflow-hidden relative group"
//               key={product.id}
//             >
//               <div className="flex flex-col gap-3 absolute top-6 left-2 z-50 transition-all duration-500 opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
//               <ShoppingCart
//   className="py-2 px-2 rounded-full transition-all duration-500 hover:bg-greenHover"
//   size={40}
//   onClickCapture={() => cartToggler(product.name)}


  
  
// />

//                 <Heart
//                   className="py-2 px-2 bg-white rounded-full transition-all duration-500 hover:bg-greenHover"
//                   size={40}
//                   onClick={() => wishToggler(product.name)}
//                 />
//                 <Dialog>
//                   <DialogTrigger> <Eye
//                     className="py-2 px-2 bg-white rounded-full transition-all duration-500 hover:bg-greenHover"
//                     size={40}
//                   /></DialogTrigger>
//                   <DialogContent>
//                     <DialogHeader className="flex justify-center gap-8 py-6 px-6">
//                       <Image src={product.image} alt="products img" />
//                       <div className="flex flex-col gap-3">
//                         <p className="text-[#838383] text-md">{product.name}</p>
//                         <p className="sm:text-3xl text-2xl font-semibold transition-all cursor-pointer duration-500 hover:text-greenBase">
//                           {product.description}
//                         </p>
//                         <div className="flex gap-4 items-center">
//                           <span className="text-greenBase">In Stock</span>
//                           <Star size={15} className="border text-yellow-400"/>
//                           <Star size={15} className="border text-yellow-400"/>
//                           <Star size={15} className="border text-yellow-400"/>
//                           <Star size={15} className="border text-yellow-400"/>
//                           <span>(0) Reviews</span>
//                         </div>
//                         <p className="text-[#838383] sm:text-sm text-xs">{product.review}</p>
//                         <p className="sm:text-2xl text-xl font-[500]">
//                           {product.price}{" "}
//                           <span className="text-[#838383] sm:text-lg text-sm line-through">
//                             {product.originalPrice}
//                           </span>
//                         </p>
//                         <div className="flex gap-8">
//                           <div className="flex gap-3"><button className="py-2 px-2 sm:text-xl text-md">-</button> <p className="py-2 px-2 sm:text-2xl text-xl">1</p> <button className="py-2 px-2 sm:text-xl text-md">+</button> </div>
//                           <button className="py-3 sm:px-10 px-5 sm:text-lg text-xs text-white bg-[#010f1c] transition-all duration-500 hover:bg-greenHover" onClick={() => cartToggler(product.name)}>Add To Cart</button>
//                         </div>
//                       </div>
//                     </DialogHeader>
//                   </DialogContent>
//                 </Dialog>
//               </div>

//               <Image
//                 src={product.image}
//                 alt={product.alt}
//                 className="transition-all duration-1000 hover:transform hover:scale-75 xs:w-[80%] w-[95%]"
//               />

//               <div className="flex flex-col gap-0">
//                 <p className="text-[#838383] text-md">{product.name}</p>
//                 <p className="text-xl transition-all duration-500 hover:text-greenBase">
//                   {product.description}
//                 </p>
//                 <p className="text-lg font-[500]">
//                   {product.price}{" "}
//                   <span className="text-[#838383] text-sm line-through">
//                     {product.originalPrice}
//                   </span>
//                 </p>
//               </div>
//               <div className={`${setCartShow ? "translate-y-2" : "translate-y-[-200%]"} xl:w-[25%] lg:w-[35%] md:w-[50%] sm:w-[60%] w-[100%] mx-2 z-50 transition-all duration-500 flex gap-5 bg-white fixed py-[0.5vmin] px-4 m-auto rounded-xl md:right-[40%] md:left-[40%] sm:right-[20%] sm:left-[20%] items-center top-2 justify-center`}>
//                 <Check size={35} className="text-white py-[0.35vmin] rounded-full px-2 bg-green-500"/>
//                 <p className="sm:text-lg text-sm">{`${addedProductName} Added To Cart`}</p>
                
//               </div>
//               <div className={`${setWishShow ? "translate-y-2" : "translate-y-[-200%]"} xl:w-[25%] lg:w-[35%] md:w-[50%] sm:w-[60%] w-[100%] mx-2 z-50 transition-all duration-500 flex gap-5 bg-white fixed py-[0.5vmin] px-4 m-auto rounded-xl md:right-[40%] md:left-[40%] sm:right-[20%] sm:left-[20%] items-center top-2 justify-center`}>
//                 <Heart size={35} className="text-white py-[0.35vmin] rounded-full px-2 bg-red-500"/>
//                 <p className="sm:text-lg text-sm">{`${wishProductName} Added To Wish List`}</p>
                
//               </div>
//             </div>
//           ))}
//         </div>



            

           

//         </section>


//     </div>
//   )
// }

// export default BestSales;







"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Heart, Eye, ShoppingCart, Star, Check } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import img1 from "../../public/images/product-1.webp";
import img2 from "../../public/images/product-3.webp";
import img3 from "../../public/images/product-5.webp";
import img10 from "../../public/images/best-banner-1.jpg";

function BestSales() {
  const products = [
    {
      id: 1,
      image: img1,
      alt: "Walnut",
      name: "Walnut",
      description: "Ergonomic Linen Pants",
      price: "$25.00",
      originalPrice: "$54.00",
      review:
        "I purchased these walnuts and was amazed by their quality. They are fresh, crunchy, and packed with flavor. Perfect for baking or just snacking. The packaging is great and keeps the nuts fresh for a long time. Delivery was prompt, and customer service was very responsive. These walnuts are a must-have for anyone looking for premium quality nuts. Highly recommended for their freshness and taste.",
    },
    {
      id: 2,
      image: img2,
      alt: "Cauliflower",
      name: "Cauliflower",
      description: "Eat Fresh & Stay Fresh",
      price: "$30.00",
      originalPrice: "$55.00",
      review:
        "This cauliflower was exceptionally fresh and had a vibrant, healthy look. It cooked perfectly and retained its crunch and flavor. Ideal for soups, curries, or even roasting. The size was generous, and it arrived without any blemishes. This is my go-to choice for fresh produce now. Definitely worth the price and a healthier alternative to frozen options. Highly impressed with the quality!",
    },
    {
      id: 3,
      image: img3,
      alt: "Hot Chocolate",
      name: "Hot Chocolate",
      description: "Chocolate Protein Booster",
      price: "$20.00",
      originalPrice: "$50.00",
      review:
        "This hot chocolate mix is a treat for chocolate lovers! The flavor is rich and creamy, making every sip a delight. It dissolves quickly and evenly in milk or water. Perfect for cold winter nights or a quick comfort drink. The packaging is convenient and keeps the mix fresh for multiple uses. Excellent value for money, and it's a hit with both kids and adults. I can't recommend this enough!",
    },
  ];

  const [setCartShow, setIsCartShow] = useState(false);
  const [addedProductName, setAddedProductName] = useState("");
  const [setWishShow, setIsWishShow] = useState(false);
  const [wishProductName, setWishProductName] = useState("");

  const cartToggler = (productName: string) => {
    setAddedProductName(productName);
    setIsCartShow(!setCartShow);
    setTimeout(() => setIsCartShow(false), 3000);
  };

  const wishToggler = (wishName: string) => {
    setWishProductName(wishName);
    setIsWishShow(!setWishShow);
    setTimeout(() => setIsWishShow(false), 3000);
  };

  return (
    <div>
      <section className="flex flex-col justify-center m-auto py-16 px-6 text-center">
        <span className="uppercase tracking-widest text-greenBase text-sm font-normal">
          More To Discover
        </span>
        <h1 className="xl:text-[3em] lg:text-[2.6em] md:text-[2.2em] sm:text-[1.85em] text-[1.75em] font-[500]">
          Best Sales Of The Week
        </h1>
        <div className="m-auto grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center text-start ">
          <Link href="/shop">
            <Image src={img10} alt="offer 15%off banner" />
          </Link>
          {products.map((product) => (
            <div
              className="cursor-pointer m-auto overflow-hidden relative group"
              key={product.id}
            >
              <div className="flex flex-col gap-3 absolute top-6 left-2 z-50 transition-all duration-500 opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                <ShoppingCart
                  className="py-2 px-2 rounded-full transition-all duration-500 hover:bg-greenHover"
                  size={40}
                  onClickCapture={() => cartToggler(product.name)}
                />
                <Heart
                  className="py-2 px-2 bg-white rounded-full transition-all duration-500 hover:bg-greenHover"
                  size={40}
                  onClick={() => wishToggler(product.name)}
                />
                <Dialog>
                  <DialogTrigger>
                    <Eye
                      className="py-2 px-2 bg-white rounded-full transition-all duration-500 hover:bg-greenHover"
                      size={40}
                    />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader className="flex justify-center gap-8 py-6 px-6">
                      <Image src={product.image} alt="products img" />
                      <div className="flex flex-col gap-3">
                        <p className="text-[#838383] text-md">{product.name}</p>
                        <p className="sm:text-3xl text-2xl font-semibold transition-all cursor-pointer duration-500 hover:text-greenBase">
                          {product.description}
                        </p>
                        <div className="flex gap-4 items-center">
                          <span className="text-greenBase">In Stock</span>
                          <Star
                            size={15}
                            className="border text-yellow-400"
                          />
                          <Star
                            size={15}
                            className="border text-yellow-400"
                          />
                          <Star
                            size={15}
                            className="border text-yellow-400"
                          />
                          <Star
                            size={15}
                            className="border text-yellow-400"
                          />
                          <span>(0) Reviews</span>
                        </div>
                        <p className="text-[#838383] sm:text-sm text-xs">
                          {product.review}
                        </p>
                        <p className="sm:text-2xl text-xl font-[500]">
                          {product.price}{" "}
                          <span className="text-[#838383] sm:text-lg text-sm line-through">
                            {product.originalPrice}
                          </span>
                        </p>
                        <div className="flex gap-8">
                          <div className="flex gap-3">
                            <button className="py-2 px-2 sm:text-xl text-md">
                              -
                            </button>{" "}
                            <p className="py-2 px-2 sm:text-2xl text-xl">1</p>{" "}
                            <button className="py-2 px-2 sm:text-xl text-md">
                              +
                            </button>{" "}
                          </div>
                          <button
                            className="py-3 sm:px-10 px-5 sm:text-lg text-xs text-white bg-[#010f1c] transition-all duration-500 hover:bg-greenHover"
                            onClick={() => cartToggler(product.name)}
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
              <Image
                src={product.image}
                alt={product.alt}
                className="transition-all duration-1000 hover:transform hover:scale-75 xs:w-[80%] w-[95%]"
              />
              <div className="flex flex-col gap-0">
                <p className="text-[#838383] text-md">{product.name}</p>
                <p className="text-xl transition-all duration-500 hover:text-greenBase">
                  {product.description}
                </p>
                <p className="text-lg font-[500]">
                  {product.price}{" "}
                  <span className="text-[#838383] text-sm line-through">
                    {product.originalPrice}
                  </span>
                </p>
              </div>
              <div
                className={`${
                  setCartShow ? "translate-y-2" : "translate-y-[-200%]"
                } xl:w-[25%] lg:w-[35%] md:w-[50%] sm:w-[60%] w-[100%] mx-2 z-50 transition-all duration-500 flex gap-5 bg-white fixed py-[0.5vmin] px-4 m-auto rounded-xl md:right-[40%] md:left-[40%] sm:right-[20%] sm:left-[20%] items-center top-2 justify-center`}
              >
                <Check
                  size={35}
                  className="text-white py-[0.35vmin] rounded-full px-2 bg-green-500"
                />
                <p className="sm:text-lg text-sm">{`${addedProductName} Added To Cart`}</p>
              </div>
              <div
                className={`${
                  setWishShow ? "translate-y-2" : "translate-y-[-200%]"
                } xl:w-[25%] lg:w-[35%] md:w-[50%] sm:w-[60%] w-[100%] mx-2 z-50 transition-all duration-500 flex gap-5 bg-white fixed py-[0.5vmin] px-4 m-auto rounded-xl md:right-[40%] md:left-[40%] sm:right-[20%] sm:left-[20%] items-center top-2 justify-center`}
              >
                <Check
                  size={35}
                  className="text-white py-[0.35vmin] rounded-full px-2 bg-green-500"
                />
                <p className="sm:text-lg text-sm">{`${wishProductName} Added To Wishlist`}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BestSales;
