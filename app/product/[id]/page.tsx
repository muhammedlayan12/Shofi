"use client"



import { useState } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"; 
import {Github,Instagram,Linkedin,Facebook,Check,Heart}  from "lucide-react";
import Image from "next/image";
import img1 from "../../../public/images/product-1.webp";
import img2 from "../../../public/images/product-3.webp";
import img3 from "../../../public/images/product-5.webp";
import img4 from "../../../public/images/product-6.webp";
import img7 from "../../../public/images/product-7.webp";
import img8 from "../../../public/images/product-8.webp";
import img5 from "../../../public/images/examplecart1.webp";
import img6 from "../../../public/images/examplecart2.webp";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const productId = params.id;

 
  let products = [
    {
      id: "1",
      rating:"⋆ ⋆ ⋆ ⋆",
      image: img1,
      alt: "Walnut",
      name: "Walnut",
      description: "Ergonomic Linen Pants",
      price: "$25.00",
      originalPrice: "$54.00",
      review: "I purchased these walnuts and was amazed by their quality. They are fresh, crunchy, and packed with flavor. Perfect for baking or just snacking. The packaging is great and keeps the nuts fresh for a long time. Delivery was prompt, and customer service was very responsive. These walnuts are a must-have for anyone looking for premium quality nuts. Highly recommended for their freshness and taste."
    },
    {
      id: "2",
      image: img2,
      rating:"⋆ ⋆ ⋆ ⋆ ⋆",
      alt: "Cauliflower",
      name: "Cauliflower",
      description: "Eat Fresh & Stay Fresh",
      price: "$30.00",
      originalPrice: "$55.00",
      review: "This cauliflower was exceptionally fresh and had a vibrant, healthy look. It cooked perfectly and retained its crunch and flavor. Ideal for soups, curries, or even roasting. The size was generous, and it arrived without any blemishes. This is my go-to choice for fresh produce now. Definitely worth the price and a healthier alternative to frozen options. Highly impressed with the quality!"
    },
    {
      id: "3",
      image: img3,
      rating:" ⋆ ⋆ ⋆ ",
      alt: "Hot Chocolate",
      name: "Hot Chocolate",
      description: "Chocolate Protein Booster",
      price: "$20.00",
      originalPrice: "$50.00",
      review: "This hot chocolate mix is a treat for chocolate lovers! The flavor is rich and creamy, making every sip a delight. It dissolves quickly and evenly in milk or water. Perfect for cold winter nights or a quick comfort drink. The packaging is convenient and keeps the mix fresh for multiple uses. Excellent value for money, and it's a hit with both kids and adults. I can't recommend this enough!"
    },
    {
      id: "4",
      image: img4,
      rating:"⋆ ⋆ ⋆  ⋆ ⋆ ",
      alt: "Onion",
      name: "Onion",
      description: "Whole Red Onion",
      price: "$22.00",
      originalPrice: "$48.00",
      review: "The onions I received were fresh, juicy, and perfectly ripe. They added a rich flavor to my meals and were easy to peel. I was surprised by how long they stayed fresh compared to store-bought ones. They were delivered on time and packaged securely to avoid any damage. I highly recommend these for their quality and reasonable price. Perfect for daily cooking needs!"
    },
    {
      id: "5",
      image: img5,
      rating:" ⋆ ⋆ ⋆ ⋆",
      alt: "Meat",
      name: "Meat",
      description: "Raw Meat on White",
      price: "$18.00",
      originalPrice: "$45.00",
      review: "The meat was incredibly fresh and well-packaged. It was tender, juicy, and had no unpleasant smell. Cooking it was a breeze, and the taste was outstanding. This is some of the best quality meat I've ever purchased online. The delivery was prompt and hygienic, which is very important to me. The portion size was generous and great value for the price. Definitely a repeat customer!"
    },
    {
      id: "6",
      image: img6,
      rating:"⋆ ⋆ ⋆ ⋆ ⋆ ⋆",
      alt: "Oranges",
      name: "Oranges",
      description: "Grapefruit fun facts",
      price: "$25.00",
      originalPrice: "$50.00",
      review: "These oranges are juicy, sweet, and bursting with flavor. Perfect for a refreshing snack or making fresh orange juice. They arrived in perfect condition, and the aroma was irresistible. The size and color were excellent, indicating their freshness. A great addition to my healthy lifestyle. Highly recommend this for anyone who loves fresh and premium quality citrus!"
    },
    {
      id: "7",
      image: img7,
      rating:" ⋆ ⋆ ⋆",
      alt: "Ginger",
      name: "Ginger",
      description: "1kg Fresh Ginger",
      price: "$23.00",
      originalPrice: "$49.00",
      review: "The ginger was exceptionally fresh and aromatic. It had a firm texture and added a great kick to my dishes. I use ginger regularly in my cooking, and this is by far the best quality I've come across. It lasted a long time without losing its freshness. Perfect for teas, curries, and stir-fries. I am delighted with my purchase and will definitely order again."
    },
    {
      id: "8",
      image: img8,
      rating:" ⋆ ⋆ ⋆ ⋆ ⋆",
      alt: "Turnip",
      name: "Turnip",
      description: "1kg Fresh Turnip",
      price: "$21.00",
      originalPrice: "$47.00",
      review: "The turnips were fresh, crisp, and had a vibrant color. Perfect for making stews, soups, or even salads. They were delivered in excellent condition, and the size was just right for my needs. They have a delightful sweetness when cooked. This is a staple in my kitchen now, and I highly recommend it for anyone looking for quality vegetables. Very impressed with the service and quality!"
    }
  ];

  const product = products.find((prod) => prod.id === productId);
 
  const [setCartShow, setIsCartShow] = useState(false);
  const [addedProductName, setAddedProductName] = useState("");
  const [setWishShow, setIsWishShow] = useState(false);
  const [wishProductName, setWishProductName] = useState("");

  const cartToggler = (productName:string) => {
    setAddedProductName(productName);
    setIsCartShow(!setCartShow);
    setTimeout(() => setIsCartShow(false), 3000);
  }



  // const wishToggler = (wishName:any) => {
  //   setWishProductName(wishName);
  //   setIsWishShow(!setWishShow);
  //   setTimeout(() => setIsWishShow(false), 3000);
  // }
  
  if (!product) {
    return <div>
        <Navbar></Navbar><div className="text-center justify-center items-center mt-[20vmin] flex flex-col gap-4">
            <h1 className="sm:text-5xl text-2xl font-[500]">404</h1>
        <p className="">Product not found</p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
        <Footer></Footer></div></div>;
  }

  return (
   <div>
     <Navbar></Navbar>
     
     <div className="mt-28 py-6 px-4 bg-[#ecffec]">
       <div className="sm:ml-[12%] ml-0">
       <h1 className="text-[2em] font-[500]">{product.name}</h1>
     <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Product</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>{product.name}</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
       </div>
     </div>


     <div className="flex sm:justify-evenly justify-center md:text-start text-center md:flex-row flex-col items-center">
        <Image src={product.image} alt={product.alt} className="xl:w-[30%]"/>
        <div className="flex flex-col gap-2 px-2">
            <span className="text-[#737373] text-[1em]">{product.name}</span>
            <h1 className="sm:text-[2.1em] text-[1.5em] font-[500]">{product.description}</h1>
            <div className="flex gap-3 text-yellow-500 text-[2em] text-center md:text-start md:m-0 m-auto">{product.rating}</div>
            <p className="md:text-[1em] text-[0.9em] lg:w-[400px] sm:w-[300px] w-[80%] justify-center flex m-auto text-[#737373]">{product.review}</p>
            <div className="flex gap-6 items-end md:m-0 m-auto">
                
            <h2 className="sm:text-3xl text-2xl font-[500] ">{product.price}</h2>
            <span className="sm:text-xl text-sm line-through text-[#838383]">{product.originalPrice}</span>
            </div>

            <p className="text-[1.1em]">Quantity</p>
            <div className="flex sm:flex-row flex-col gap-10 md:m-0 m-auto">
              <div className="flex gap-5 md:m-0 m-auto">
                <span className="text-[1.5em] transition-all duration-500 hover:text-greenBase cursor-pointer">-</span>
                <span className="text-[1.5em] transition-all duration-500 hover:text-greenBase cursor-pointer">1</span>
                <span className="text-[1.5em] transition-all duration-500 hover:text-greenBase cursor-pointer">+</span>
              </div>
              <button  onClick={() => cartToggler(product.name)} className="py-2 px-12 text-[1em] bg-greenBase transition-all duration-500 hover:bg-[#010f1c] text-white">Add To Cart</button> 
            </div>
            <div className="flex gap-5 md:m-0 my-10 m-auto">
        <Linkedin size={30} className="py-2 px-2 bg-greenBase rounded-full transition-all duration-500 hover:bg-[#010f1c] text-white "/>
        <Instagram  size={30}className="py-2 px-2 bg-greenBase rounded-full transition-all duration-500 hover:bg-[#010f1c] text-white "/>
        <Facebook size={30} className="py-2 px-2 bg-greenBase rounded-full transition-all duration-500 hover:bg-[#010f1c] text-white "/>
        <Github size={30} className="py-2 px-2 bg-greenBase rounded-full transition-all duration-500 hover:bg-[#010f1c] text-white "/>
      </div>
      <div className={`${setCartShow ? "translate-y-2" : "translate-y-[-200%]"} xl:w-[25%] lg:w-[35%] md:w-[50%] sm:w-[60%] w-[100%] mx-2 z-50 transition-all duration-500 flex gap-5 bg-white fixed py-[0.5vmin] px-4 m-auto rounded-xl md:right-[40%] md:left-[40%] sm:right-[20%] sm:left-[20%] items-center top-2 justify-center`}>
                <Check size={35} className="text-white py-[0.35vmin] rounded-full px-2 bg-green-500"/>
                <p className="sm:text-lg text-sm">{`${addedProductName} Added To Cart`}</p>
                
              </div>
              <div className={`${setWishShow ? "translate-y-2" : "translate-y-[-200%]"} xl:w-[25%] lg:w-[35%] md:w-[50%] sm:w-[60%] w-[100%] mx-2 z-50 transition-all duration-500 flex gap-5 bg-white fixed py-[0.5vmin] px-4 m-auto rounded-xl md:right-[40%] md:left-[40%] sm:right-[20%] sm:left-[20%] items-center top-2 justify-center`}>
                <Heart size={35} className="text-white py-[0.35vmin] rounded-full px-2 bg-red-500"/>
                <p className="sm:text-lg text-sm">{`${wishProductName} Added To Wish List`}</p>
                
              </div>
        </div>
     </div>
     <Footer></Footer>

   </div>
  );
}










































