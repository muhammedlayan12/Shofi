
// export default DetailPage;










"use client"




import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Check, Instagram, Github, Linkedin, Facebook,X } from "lucide-react";



function DetailPage() {
  const [isCartShow, setIsCartShow] = useState(false);
  const [isLimitShow, setIsLimitShow] = useState(false);
  const [addedProductName, setAddedProductName] = useState("");
  const [product, setProduct] = useState<ProductData | null>(null);
  const [isQuantity, setIsQuantity] = useState(0);
  const params = useParams();

  const addToCart = (product: any) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  
    const productIndex = cart.findIndex((item: any) => item.name === product.name);
  
    if (productIndex > -1) {
      cart[productIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
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
  };

 
  const increaseQuantity = () => {
   if(isQuantity <= 5){
    const newQuantity = isQuantity + 1;
    setIsQuantity(newQuantity);
 
   }
  };






  const decreaseQuantity = () => {
if(isQuantity > 0){
  const newQuantity = isQuantity - 1;
  setIsQuantity(newQuantity);
 
}
  };
   
useEffect(() => {
    const fetchProduct = async () => {
      const query = `
    *[_type=="productsData"]{
    id,name,image,price,oldPrice,description,rating,stockStatus
  }
      `;
  
      try {
        const products: ProductData[] = await client.fetch(query);
  
      
        
        const productId = Array.isArray(params.id) ? params.id[0] : params.id;
  
        const selectedProduct = products.find(
          (product) => String(product.id) === productId
        );
  
        setProduct(selectedProduct || null);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
  
    fetchProduct();
  }, [params.id]);
  
  const cartToggler = (productName: string) => {
    setAddedProductName(productName);
    setIsCartShow(!isCartShow);
    setTimeout(() => setIsCartShow(false), 1500);
  };

  const limitToggler = ( ) => {
    if(isQuantity > 4){
      setIsLimitShow(!isLimitShow);
    }
    else{
      setIsLimitShow(false);
    }

    setTimeout(() => setIsLimitShow(false), 1000);
  };

  return (
    <div>
      <Navbar />
      {!product ? (
          <div className=" flex items-center justify-center h-screen bg-white">
          <div role="status" className="flex items-center">
            <svg
              aria-hidden="true"
              className="inline w-10 h-10 text-green-200 animate-spin dark:text-gray-600 fill-greenBase"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ): (
        <div className="my-28 ">
          <div className="mt-28 py-6 px-4   bg-[#ecffec]">
            <div className="sm:ml-[12%] ml-0">
              <h1 className="text-[2em] font-[500]">{product.name}</h1>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink  href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Shop</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{product.name}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>

          <div
            key={product.id}
            className="flex py-28   sm:justify-evenly justify-center md:text-start text-center md:flex-row flex-col items-center"
          >
           
              <Image
              src={urlFor(product.image).url()}
              width={500}
              height={500}
              alt={product.name}
              className="xl:w-[30%]"
          />
            <div className="flex     flex-col gap-2 px-2">
              <span className="text-[#737373] text-[1em]">{product.name}</span>
              <h1 className="sm:text-[2.1em] text-[1.5em] font-[500]">
                {product.name}
              </h1>
              <p className={`${product.stockStatus === "In Stock" ? "text-green-700" :"text-red-500"}  text-md`}>{product.stockStatus}</p>

              <span className="text-[#111] text-[1em]">{`${product.rating} Rating`}</span>
              {/* <div
                className={`${
                  product.stock === "In Stock"
                    ? "text-green-700"
                    : "text-red-600"
                } flex gap-3 justify-center md:justify-start text-[1em] text-center`}
              >
                <p>{product.stock}</p>
              </div> */}
              <p className="md:text-[1em]  text-[0.9em] lg:w-[450px] sm:w-[370px]  w-[90%] text-[#737373]">
                {product.description}
              </p>
              <div className="flex justify-center md:justify-start gap-6 items-end">
                <h2 className="sm:text-3xl text-2xl font-[500] ">
                  {`$${product.price.toFixed(2)}`}
                </h2>
                <span className="sm:text-xl text-sm line-through text-[#838383]">
                  {`$${product.oldPrice.toFixed(2)}`}
                </span>
              </div>

              <p className="text-[1.1em]">Quantity</p>
              <div className="flex justify-center md:justify-start sm:flex-row flex-col gap-10">
                <div className="flex gap-5 justify-center">
                  <span className="text-[1.5em] cursor-pointer" onClick={decreaseQuantity}>-</span>
                  <span className="text-[1.5em]">{isQuantity}</span>
                  <span className="text-[1.5em] cursor-pointer" onClick={increaseQuantity} onClickCapture={limitToggler}>+</span>
                </div>
                <button
                  onClick={() => cartToggler(product.name)}
                  className="py-2 rounded-full px-12 text-[1em] bg-greenBase text-white"
                  onClickCapture={() => addToCart(product)}>
                 
 
                   
                  Add To Cart
                </button>
              </div>
              <div className="flex justify-center md:justify-start gap-5">
                <Linkedin size={30} className="py-2 rounded-full  px-2 bg-greenBase text-white" />
                <Instagram size={30} className="py-2  rounded-full px-2 bg-greenBase text-white" />
                <Facebook size={30} className="py-2 rounded-full  px-2 bg-greenBase text-white" />
                <Github size={30} className="py-2 rounded-full  px-2 bg-greenBase text-white" />
              </div>
              {/* <div
                className={`${
                  isCartShow ? "translate-y-2" : "translate-y-[-200%]"
                } fixed py-[0.5vmin] px-4 rounded-xl`}
              >
                <Check size={35} className="text-white py-[0.35vmin]" />
                <p className="sm:text-lg text-sm">
                  {`${addedProductName} Added To Cart`}
                </p>
              </div> */}

<div
  className={`${
    isCartShow ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0"
  } fixed flex items-center top-[12%] sm:w-[300px] w-[70%] left-1/2 transform -translate-x-1/2 py-2 justify-center px-2 rounded-xl bg-white text-black shadow-md transition-all duration-200 ease-in-out`}
>
  <Check size={35} className="text-white mr-3 py-2 px-2 rounded-full bg-green-500"/>
  <p className="sm:text-lg text-sm">{`${addedProductName} Added To Cart`}</p>
</div>

<div
  className={`${
    isLimitShow ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0"
  } fixed flex items-center top-[12%] sm:w-[220px] w-[70%] left-1/2 transform -translate-x-1/2 py-2 justify-center px-2 rounded-xl bg-white text-black shadow-md transition-all duration-200 ease-in-out`}
>
  <X size={35} className="text-white mr-3 py-2 px-2 rounded-full bg-red-500"/>
  <p className="sm:text-lg text-sm">{`Reach Limit Max`}</p>
</div>


 



            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default DetailPage;
