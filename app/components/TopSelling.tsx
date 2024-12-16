"use client"


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link";
import Image from "next/image";
import img1 from "../../public/images/product-1.webp";
import img2 from "../../public/images/product-3.webp";
import img3 from "../../public/images/product-5.webp";
import img4 from "../../public/images/product-6.webp";
import img7 from "../../public/images/product-7.webp";
import img8 from "../../public/images/product-8.webp";
import img5 from "../../public/images/examplecart1.webp";
import img6 from "../../public/images/examplecart2.webp";
import img9 from "../../public/images/pre-title.webp";
import img10 from "../../public/images/side-1.webp";
import {Heart,Eye,ShoppingCart,Star,Check} from "lucide-react";
import { useState } from "react";



function HomePageProducts() {

    let products2 = [
        {
            id: 1,
            image: img1,
            alt: "Walnut",
            name: "Walnut",
            description: "Ergonomic Linen Pants",
            price: "$25.00",
            originalPrice: "$54.00",
           
            
          },
          {
            id: 2,
            image: img2,
            alt: "Cauliflower",
            name: "Cauliflower",
            description: "Eat Fresh & Stay Fresh",
            price: "$30.00",
            originalPrice: "$55.00",
          
            
          },
          {
            id: 3,
            image: img3,
            alt: "Hot Chocolate",
            name: "Hot Chocolate",
            description: "Chocolate Protein Booster",
            price: "$20.00",
            originalPrice: "$50.00",
          
            
          },
    ]
  let products1 = [
   
    {
      id: 4,
      image: img4,
      alt: "Onion",
      name: "Onion",
      description: "Whole Red Onion",
      price: "$22.00",
      originalPrice: "$48.00",
    
      
    },
    {
      id: 5,
      image: img5,
      alt: "Meat",
      name: "Meat",
      description: "Raw Meat on White",
      price: "$18.00",
      originalPrice: "$45.00",
    
      
    },
    {
      id: 6,
      image: img6,
      alt: "Oranges",
      name: "Oranges",
      description: "Grapefruit fun facts",
      price: "$25.00",
      originalPrice: "$50.00",
    
      
    },
    
  ];
  

  

 
  
  return (
    <div>

        <section className="flex flex-wrap gap-10 justify-center py-7 px-4 items-center my-16">
            <div className="bg-green-100 py-10 px-8 justify-center gap-16 flex flex-col text-center">
                <div className="gap-5 text-center flex flex-col justify-center items-center">
              <div className="text-center">
              <Image src={img9} alt="Weekend Sale" className="text-center"/>
              </div>
                <h1 className="sm:text-[2em] text-[1.2em] font-semibold">Get Up to 26% Off<br/> Vegetables</h1>
                <div className="btn">
                <Link href="/shop" className="py-2 px-8 bg-greenBase rounded-full">Shop Now</Link>
                </div>
                
                </div>
                <Image src={img10} alt="Weekend Sale vegetable" />
            </div>
            <div className="py-10 px-8 justify-center gap-16 flex flex-col">
                <h1 className="text-start font-[500] sm:text-[2em] text-[1.2em]">Top Selling Products</h1>
                <div className="grids grids-cols-3 gap-5 text-start">
                
                {products1.map((items)=>(

                

                    <div className="flex gap-4 border hover:border-greenBase py-4 px-4 rounded-[20px] transition-all duration-500" key={items.id}>
                        <Image src={items.image} alt={items.alt} width={120}/>
                        <div className="flex flex-col gap-2">
                        <span className="text-[#737373]  sm:text-md text-sm">{items.name}</span>
                            <p className="sm:text-[1.2em] text-[0.9em]">{items.description}</p>
                            <div className="flex gap-2">
                            <Star size={12} className="text-yellow-500"/>
                            <Star size={12} className="text-yellow-500"/>
                            <Star size={12} className="text-yellow-500"/>
                            <Star size={12} className="text-yellow-500"/>
                            </div>
                            <p>{items.price}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            
            <div className="py-10 px-8 justify-center gap-16 flex flex-col">
                <h1 className="text-start font-[500] sm:text-[2em] text-[1.2em]">Top Rated Products</h1>
                <div className="grids grids-cols-3 gap-5 text-start">
                
                {products2.map((items)=>(

                

                    <div className="flex gap-4 border hover:border-greenBase py-4 px-4 rounded-[20px] transition-all duration-500" key={items.id}>
                        <Image src={items.image} alt={items.alt} width={120}/>
                        <div className="flex flex-col gap-2">
                            <span className="text-[#737373]  sm:text-md text-sm">{items.name}</span>
                            <p className="sm:text-[1.2em] text-[0.9em]">{items.description}</p>
                            <div className="flex gap-2">
                            <Star size={12} className="text-yellow-500"/>
                            <Star size={12} className="text-yellow-500"/>
                            <Star size={12} className="text-yellow-500"/>
                            <Star size={12} className="text-yellow-500"/>
                            </div>
                            <p>{items.price}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            

        </section>
    </div>
  )
}

export default HomePageProducts;