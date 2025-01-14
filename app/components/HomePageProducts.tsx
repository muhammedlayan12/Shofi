






// "use client";

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import Link from "next/link";
// import Image from "next/image";
// import img1 from "../../public/images/product-1.webp";
// import img2 from "../../public/images/product-3.webp";
// import img3 from "../../public/images/product-5.webp";
// import img4 from "../../public/images/product-6.webp";
// import img7 from "../../public/images/product-7.webp";
// import img8 from "../../public/images/product-8.webp";
// import img5 from "../../public/images/examplecart1.webp";
// import img6 from "../../public/images/examplecart2.webp";
// import { Heart, Eye, ShoppingCart} from "lucide-react";


// function HomePageProducts() {

//   const products = [
//     {
//       id: 1,
//       image: img1,
//       alt: "Walnut",
//       name: "Walnut",
//       description: "Ergonomic Linen Pants",
//       price: "$25.00",
//       originalPrice: "$54.00",
//       review: "I purchased these walnuts and was amazed by their quality. They are fresh, crunchy, and packed with flavor. Perfect for baking or just snacking. The packaging is great and keeps the nuts fresh for a long time. Delivery was prompt, and customer service was very responsive. These walnuts are a must-have for anyone looking for premium quality nuts. Highly recommended for their freshness and taste."
//     },
//     {
//       id: 2,
//       image: img2,
//       alt: "Cauliflower",
//       name: "Cauliflower",
//       description: "Eat Fresh & Stay Fresh",
//       price: "$30.00",
//       originalPrice: "$55.00",
//       review: "This cauliflower was exceptionally fresh and had a vibrant, healthy look. It cooked perfectly and retained its crunch and flavor. Ideal for soups, curries, or even roasting. The size was generous, and it arrived without any blemishes. This is my go-to choice for fresh produce now. Definitely worth the price and a healthier alternative to frozen options. Highly impressed with the quality!"
//     },
//     {
//       id: 3,
//       image: img3,
//       alt: "Hot Chocolate",
//       name: "Hot Chocolate",
//       description: "Chocolate Protein Booster",
//       price: "$20.00",
//       originalPrice: "$50.00",
//       review: "This hot chocolate mix is a treat for chocolate lovers! The flavor is rich and creamy, making every sip a delight. It dissolves quickly and evenly in milk or water. Perfect for cold winter nights or a quick comfort drink. The packaging is convenient and keeps the mix fresh for multiple uses. Excellent value for money, and it's a hit with both kids and adults. I can't recommend this enough!"
//     },
//     {
//       id: 4,
//       image: img4,
//       alt: "Onion",
//       name: "Onion",
//       description: "Whole Red Onion",
//       price: "$22.00",
//       originalPrice: "$48.00",
//       review: "The onions I received were fresh, juicy, and perfectly ripe. They added a rich flavor to my meals and were easy to peel. I was surprised by how long they stayed fresh compared to store-bought ones. They were delivered on time and packaged securely to avoid any damage. I highly recommend these for their quality and reasonable price. Perfect for daily cooking needs!"
//     },
//     {
//       id: 5,
//       image: img5,
//       alt: "Meat",
//       name: "Meat",
//       description: "Raw Meat on White",
//       price: "$18.00",
//       originalPrice: "$45.00",
//       review: "The meat was incredibly fresh and well-packaged. It was tender, juicy, and had no unpleasant smell. Cooking it was a breeze, and the taste was outstanding. This is some of the best quality meat I've ever purchased online. The delivery was prompt and hygienic, which is very important to me. The portion size was generous and great value for the price. Definitely a repeat customer!"
//     },
//     {
//       id: 6,
//       image: img6,
//       alt: "Oranges",
//       name: "Oranges",
//       description: "Grapefruit fun facts",
//       price: "$25.00",
//       originalPrice: "$50.00",
//       review: "These oranges are juicy, sweet, and bursting with flavor. Perfect for a refreshing snack or making fresh orange juice. They arrived in perfect condition, and the aroma was irresistible. The size and color were excellent, indicating their freshness. A great addition to my healthy lifestyle. Highly recommend this for anyone who loves fresh and premium quality citrus!"
//     },
//     {
//       id: 7,
//       image: img7,
//       alt: "Ginger",
//       name: "Ginger",
//       description: "1kg Fresh Ginger",
//       price: "$23.00",
//       originalPrice: "$49.00",
//       review: "The ginger was exceptionally fresh and aromatic. It had a firm texture and added a great kick to my dishes. I use ginger regularly in my cooking, and this is by far the best quality I've come across. It lasted a long time without losing its freshness. Perfect for teas, curries, and stir-fries. I am delighted with my purchase and will definitely order again."
//     },
//     {
//       id: 8,
//       image: img8,
//       alt: "Turnip",
//       name: "Turnip",
//       description: "1kg Fresh Turnip",
//       price: "$21.00",
//       originalPrice: "$47.00",
//       review: "The turnips were fresh, crisp, and had a vibrant color. Perfect for making stews, soups, or even salads. They were delivered in excellent condition, and the size was just right for my needs. They have a delightful sweetness when cooked. This is a staple in my kitchen now, and I highly recommend it for anyone looking for quality vegetables. Very impressed with the service and quality!"
//     }
//   ];
  
//   // const [setCartShow, setIsCartShow] = useState(false);
//   // const [addedProductName, setAddedProductName] = useState("");
//   // const [setWishShow, setIsWishShow] = useState(false);
//   // const [wishProductName, setWishProductName] = useState("");

//   // const cartToggler = (productName: any) => {
//   //   setAddedProductName(productName);
//   //   setIsCartShow(!setCartShow);
//   //   setTimeout(() => setIsCartShow(false), 3000);
//   // };

//   // const wishToggler = (wishName: any) => {
//   //   setWishProductName(wishName);
//   //   setIsWishShow(!setWishShow);
//   //   setTimeout(() => setIsWishShow(false), 3000);
//   // };
  
//   return (
//     <div>
//       <section className="flex flex-col justify-center py-24 px-6 m-auto">
//         <div className="flex flex-col lg:text-start text-center lg:flex-row justify-evenly">
//           <div className="flex flex-col gap-2 lg:text-start text-center">
//             <span className="uppercase tracking-widest text-greenBase text-sm font-normal">All Products Shop</span>
//             <h1 className="xl:text-[3em] lg:text-[2.6em] md:text-[2.2em] sm:text-[1.85em] text-[1.75em] font-[500]">Featured Products</h1>
//           </div>
//           <div className="flex flex-wrap gap-8 justify-center lg:text-start text-center">
//             <div className="text-lg text-[#838383] active:text-black cursor-pointer">All Products</div>
//             <div className="text-lg text-[#838383] active:text-black cursor-pointer">Milk & Dairy</div>
//             <div className="text-lg text-[#838383] active:text-black cursor-pointer">Frozen Food</div>
//             <div className="text-lg text-[#838383] active:text-black cursor-pointer">Meat & Fish</div>
//           </div>
//         </div>

//         <div className="m-auto justify-center grid xl:grid-cols-4 md:grid-cols-3 py-16 px-6 grid-cols-1 gap-4 sm:grid-cols-2">
//           {products.map((product) => (
//             <div
//               className="cursor-pointer overflow-hidden relative group"
//               key={product.id}
//             >
//               <div className="flex flex-col gap-3 absolute top-6 left-2 z-50 transition-all duration-500 opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
//                 <ShoppingCart
//                   className="py-2 px-2 rounded-full transition-all duration-500 hover:bg-greenHover"
//                   size={40}
                  
//                 />
//                 <Heart
//                   className="py-2 px-2 bg-white rounded-full transition-all duration-500 hover:bg-greenHover"
//                   size={40}
                  
//                 />
//                 <Dialog>
//                   <DialogTrigger> 
//                     <Eye
//                       className="py-2 px-2 bg-white rounded-full transition-all duration-500 hover:bg-greenHover"
//                       size={40}
//                     />
//                   </DialogTrigger>
//                   <DialogContent>
//                     <DialogHeader>
//                       <DialogTitle>{product.name}</DialogTitle>
//                       <DialogDescription>{product.description}</DialogDescription>
//                     </DialogHeader>
//                   </DialogContent>
//                 </Dialog>
//               </div>
//               <div className="relative">
//                 <Link href={`/product/${product.id}`}><Image
//                   className="w-full h-full object-cover"
//                   src={product.image}
//                   alt={product.alt}
//                 /></Link>
//               </div>
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
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default HomePageProducts;
















"use client"
 
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
  } fixed flex items-center top-[12%] sm:w-[400px] w-[70%] left-1/2 transform -translate-x-1/2 py-2 justify-center px-2 rounded-xl bg-white text-black shadow-md transition-all duration-500 ease-in-out`}
>
  <Check size={35} className="text-white mr-3 py-2 px-2 rounded-full bg-green-500"/>
  <p className="sm:text-lg text-sm">{`${addedProductName} Add To Cart`}</p>
</div>
<div
  className={`${
    isWishShow ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0"
  } fixed flex items-center top-[12%] sm:w-[400px] w-[70%] left-1/2 transform -translate-x-1/2 py-2 justify-center px-2 rounded-xl bg-white text-black shadow-md transition-all duration-500 ease-in-out`}
>
  <Heart size={35} className="text-white mr-3 py-2 px-2 rounded-full bg-red-500"/>
  <p className="sm:text-lg text-sm">{`${wishProductName} Add To Wish`}</p>
</div>
          </div>
          ))}
        </div>
      </div>
    
 
    </div>
  );
}

export default Shop;
