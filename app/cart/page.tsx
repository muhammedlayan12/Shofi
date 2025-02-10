"use client"


import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
 


import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";
import {urlFor}  from "../../sanity/lib/image";

 
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

function Cart() {
  const [cartItems, setCartsItems] = useState<CartItem[]>([]);
  useEffect(() => {
    const savedCart = localStorage.getItem("cartProducts");
    if (savedCart) {
      setCartsItems(JSON.parse(savedCart));
    }
  }, []);

     useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartProducts", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  
  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartsItems(updatedCart);
  };
 
  const updateQuantity = (id: string, newQuantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartsItems(updatedCart);
  };

  
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // const clearAllStorage = () => {
  //   localStorage.clear(); // Clears everything in localStorage
  //   setCartsItems([]); // Reset cart state
  // };

  // window.addEventListener("load",clearAllStorage)
  
  
  const proceedToCheckout = () => {
    localStorage.setItem("checkoutCart", JSON.stringify(cartItems));
    localStorage.removeItem("cartProducts");
    setCartsItems([]);
};


  return (
    <div>
        <Navbar></Navbar>
        <div className="mt-28 py-6 px-4 bg-[#ecffec]">
       <div className="sm:ml-[12%] ml-0">
       <h1 className="text-[2em] font-[500]">Shopping Cart</h1>
     <Breadcrumb>
  <BreadcrumbList>  
    <BreadcrumbItem>
  <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Cart</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
       </div>
     </div>
<section  className="flex lg:flex-row flex-col gap-11 lg:justify-evenly justify-center items-start xl:gap-14 lg:gap-7 py-20 px-4">



<div className="flex justify-center lg:m-0 m-auto">
    <ul className="flex justify-center flex-col">
  
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="mt-10 flex md:flex-row flex-col xl:gap-[11vmin] lg:gap-[5vmin] gap-[6vmin] items-center"
              >
                <div className="xl:gap-[11vmin] lg:gap-[5vmin] gap-[6vmin] flex items-center">
                  <div className="flex items-center sm:gap-5 gap-3">
                    <Image
                      src={urlFor(item.image).url()}
                      width={100}
                      height={100}
                      className="sm:w-[100px] w-[90px]"
                      alt={item.name}
                    />
                    <p className="sm:text-[0.9em] text-[0.8em]">{item.name}</p>
                  </div>
                  <div>
                    <p className="sm:text-[0.9em] text-[0.8em]">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center xl:gap-[11vmin] lg:gap-[5vmin] gap-[6vmin]">
                  <div className="flex gap-5 py-2 sm:px-10 px-6 bg-white border border-[#010f1c] rounded-full">
                    <button
                      onClick={() =>
                        item.quantity > 1 && updateQuantity(item.id, item.quantity - 1)
                      }
                      className="sm:text-[1.2em] text-[1em]"
                    >
                      -
                    </button>
                    <p className="sm:text-[1.2em] text-[1em]">{item.quantity}</p>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="sm:text-[1.2em] text-[1em]"
                    >
                      +
                    </button>
                  </div>

                  <div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="flex gap-4 bg-red-600 sm:text-[0.9em] text-[0.8em] text-white py-2 sm:px-8 px-6 rounded-full"
                    >
                      <X size={20} />
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))} 
    </ul>
</div>

{/* <div className="flex gap-10 flex-col justify-center lg:m-0 m-auto">
    <div className="flex justify-between gap-20 items-center"><h2  className="sm:text-[1.25em] text-[1em] font-[500]">Subtotal</h2>
    <p className="sm:text-[1em] text-[0.85em] text-[#838383]">$490.00</p></div>
    <div className="flex justify-between gap-10 items-center"><h2 className="sm:text-[1.25em] text-[1em] font-[500]">Total</h2>
    <p className="sm:text-[1em] text-[0.85em] text-[#838383]">$490.00</p></div>
    <button className="py-2 px-18 text-white font-[400] bg-[#010f1c]  transition-all duration-500 hover:bg-greenBase">Proceed to Checkout</button>
</div> */}

<div className="flex gap-10 flex-col justify-center lg:m-0 m-auto">
          <div className="flex justify-between gap-20 items-center">
            <h2 className="sm:text-[1.25em] text-[1em] font-[500]">Subtotal</h2>
            <p className="sm:text-[1em] text-[0.85em] text-[#838383]">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-between gap-10 items-center">
            <h2 className="sm:text-[1.25em] text-[1em] font-[500]">Total</h2>
            <p className="sm:text-[1em] text-[0.85em] text-[#838383]">${totalPrice.toFixed(2)}</p>
          </div>
          <Link href="/checkout" onClick={proceedToCheckout}  className="py-2 text-center px-18 text-white font-[400] bg-[#010f1c] transition-all duration-500 hover:bg-greenBase">
             Checkout 
          </Link>
        </div>

</section>
        <Footer></Footer>
    </div>
  )
}

export default Cart;
 





// "use client";

// import {
//     Breadcrumb,
//     BreadcrumbItem,
//     BreadcrumbLink,
//     BreadcrumbList,
//     BreadcrumbPage,
//     BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { X } from "lucide-react";
// import Navbar from "../components/Navbar";
// import Link from "next/link";
// import Footer from "../components/Footer";
// import { urlFor } from "../../sanity/lib/image";

// interface CartItem {
//     id: string;
//     name: string;
//     price: number;
//     quantity: number;
//     image: string;
// }

// function Cart() {
//     const [cartItems, setCartItems] = useState<CartItem[]>([]);

//     useEffect(() => {
//         const savedCart = localStorage.getItem("cartProducts");
//         if (savedCart) {
//             setCartItems(JSON.parse(savedCart));
//         }
//     }, []);

//     useEffect(() => {
//         if (cartItems.length > 0) {
//             localStorage.setItem("cartProducts", JSON.stringify(cartItems));
//         }
//     }, [cartItems]);

//     const removeItem = (id: string) => {
//         const updatedCart = cartItems.filter((item) => item.id !== id);
//         setCartItems(updatedCart);
//     };

//     const updateQuantity = (id: string, newQuantity: number) => {
//         const updatedCart = cartItems.map((item) =>
//             item.id === id ? { ...item, quantity: newQuantity } : item
//         );
//         setCartItems(updatedCart);
//     };

//     const totalPrice = cartItems.reduce(
//         (total, item) => total + item.price * item.quantity,
//         0
//     );

//     const proceedToCheckout = () => {
//         localStorage.setItem("checkoutCart", JSON.stringify(cartItems));
//         localStorage.removeItem("cartProducts");
//         setCartItems([]);
//     };

//     return (
//         <div>
//             <Navbar />
//             <div className="mt-28 py-6 px-4 bg-[#ecffec]">
//                 <div className="sm:ml-[12%] ml-0">
//                     <h1 className="text-[2em] font-[500]">Shopping Cart</h1>
//                     <Breadcrumb>
//                         <BreadcrumbList>
//                             <BreadcrumbItem>
//                                 <BreadcrumbLink href="/">Home</BreadcrumbLink>
//                             </BreadcrumbItem>
//                             <BreadcrumbSeparator />
//                             <BreadcrumbItem>
//                                 <BreadcrumbPage>Cart</BreadcrumbPage>
//                             </BreadcrumbItem>
//                         </BreadcrumbList>
//                     </Breadcrumb>
//                 </div>
//             </div>
//             <section className="flex lg:flex-row flex-col gap-11 lg:justify-evenly justify-center items-start py-20 px-4">
//                 <div className="flex justify-center lg:m-0 m-auto">
//                     <ul className="flex justify-center flex-col">
//                         {cartItems.map((item) => (
//                             <li key={item.id} className="mt-10 flex md:flex-row flex-col items-center">
//                                 <div className="flex items-center gap-5">
//                                     <Image src={urlFor(item.image).url()} width={100} height={100} alt={item.name} />
//                                     <p>{item.name}</p>
//                                 </div>
//                                 <div>
//                                     <p>${item.price}</p>
//                                 </div>
//                                 <div className="flex gap-5 py-2 px-10 bg-white border border-[#010f1c] rounded-full">
//                                     <button onClick={() => item.quantity > 1 && updateQuantity(item.id, item.quantity - 1)}>-</button>
//                                     <p>{item.quantity}</p>
//                                     <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
//                                 </div>
//                                 <button onClick={() => removeItem(item.id)} className="bg-red-600 text-white py-2 px-6 rounded-full">
//                                     <X size={20} /> Remove
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="flex flex-col gap-4">
//                     <h2>Subtotal: ${totalPrice.toFixed(2)}</h2>
//                     <h2>Total: ${totalPrice.toFixed(2)}</h2>
//                     <Link href="/checkout">
//                         <button onClick={proceedToCheckout} className="bg-[#010f1c] text-white py-2 px-8 rounded-full hover:bg-greenBase">
//                             Proceed to Checkout
//                         </button>
//                     </Link>
//                 </div>
//             </section>
//             <Footer />
//         </div>
//     );
// }
// export default Cart;



 


// "use client"


// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { X } from "lucide-react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import {urlFor}  from "../../sanity/lib/image";

 
// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image: string;
// }

// function Cart () {
//   const [cartItems, setCartsItems] = useState<CartItem[]>([]);
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cartProducts");
//     if (savedCart) {
//       setCartsItems(JSON.parse(savedCart));
//     }
//   }, []);

//      useEffect(() => {
//     if (cartItems.length > 0) {
//       localStorage.setItem("cartProducts", JSON.stringify(cartItems));
//     }
//   }, [cartItems]);

  
//   const removeItem = (id: string) => {
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     setCartsItems(updatedCart);
//   };
 
//   const updateQuantity = (id: string, newQuantity: number) => {
//     const updatedCart = cartItems.map((item) =>
//       item.id === id ? { ...item, quantity: newQuantity } : item
//     );
//     setCartsItems(updatedCart);
//   };

  
//   const totalPrice = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

  
//   return (
//     <div>
//       <Navbar />
//       <div className="mt-28 py-6 px-4 bg-[#ecffec]">
//         <div className="sm:ml-[12%] ml-0">
//           <h1 className="text-[2em] font-[500]">Shopping Cart</h1>
//         </div>
//       </div>

//       <section className="flex lg:flex-row flex-col gap-11 lg:justify-evenly justify-center items-start xl:gap-14 lg:gap-7 py-20 px-4">
//         <div className="flex justify-center lg:m-0 m-auto">
          // <ul className="flex justify-center flex-col">
          //   {cartItems.map((item) => (
          //     <li
          //       key={item.id}
          //       className="mt-10 flex md:flex-row flex-col xl:gap-[11vmin] lg:gap-[5vmin] gap-[6vmin] items-center"
          //     >
          //       <div className="xl:gap-[11vmin] lg:gap-[5vmin] gap-[6vmin] flex items-center">
          //         <div className="flex items-center sm:gap-5 gap-3">
          //           <Image
          //             src={urlFor(item.image).url()}
          //             width={100}
          //             height={100}
          //             className="sm:w-[100px] w-[90px]"
          //             alt={item.name}
          //           />
          //           <p className="sm:text-[0.9em] text-[0.8em]">{item.name}</p>
          //         </div>
          //         <div>
          //           <p className="sm:text-[0.9em] text-[0.8em]">${item.price}</p>
          //         </div>
          //       </div>

          //       <div className="flex items-center xl:gap-[11vmin] lg:gap-[5vmin] gap-[6vmin]">
          //         <div className="flex gap-5 py-2 sm:px-10 px-6 bg-white border border-[#010f1c] rounded-full">
          //           <button
          //             onClick={() =>
          //               item.quantity > 1 && updateQuantity(item.id, item.quantity - 1)
          //             }
          //             className="sm:text-[1.2em] text-[1em]"
          //           >
          //             -
          //           </button>
          //           <p className="sm:text-[1.2em] text-[1em]">{item.quantity}</p>
          //           <button
          //             onClick={() =>
          //               updateQuantity(item.id, item.quantity + 1)
          //             }
          //             className="sm:text-[1.2em] text-[1em]"
          //           >
          //             +
          //           </button>
          //         </div>

          //         <div>
          //           <button
          //             onClick={() => removeItem(item.id)}
          //             className="flex gap-4 bg-red-600 sm:text-[0.9em] text-[0.8em] text-white py-2 sm:px-8 px-6 rounded-full"
          //           >
          //             <X size={20} />
          //             Remove
          //           </button>
          //         </div>
          //       </div>
          //     </li>
          //   ))}
          // </ul>
//         </div>

        // <div className="flex gap-10 flex-col justify-center lg:m-0 m-auto">
        //   <div className="flex justify-between gap-20 items-center">
        //     <h2 className="sm:text-[1.25em] text-[1em] font-[500]">Subtotal</h2>
        //     <p className="sm:text-[1em] text-[0.85em] text-[#838383]">${totalPrice.toFixed(2)}</p>
        //   </div>
        //   <div className="flex justify-between gap-10 items-center">
        //     <h2 className="sm:text-[1.25em] text-[1em] font-[500]">Total</h2>
        //     <p className="sm:text-[1em] text-[0.85em] text-[#838383]">${totalPrice.toFixed(2)}</p>
        //   </div>
        //   <button className="py-2 px-18 text-white font-[400] bg-[#010f1c] transition-all duration-500 hover:bg-greenBase">
        //     Proceed to Checkout
        //   </button>
        // </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Cart;
