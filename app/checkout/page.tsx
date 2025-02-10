
"use client";

// import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { urlFor } from "@/sanity/lib/image";
import {Trash} from "lucide-react";


import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";

// function CheckoutPage() {
//   const [checkoutItems, setCheckoutItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [formDetails, setFormDetails] = useState({
//     firstName: "",
//     lastName: "",
//     addressLine1: "",
//     addressLine2: "",
//     postalCode: "",
//     locality: "",
//     state: "",
//     email: "",
//     phoneNumber: "",
//     pan: "",
//   });

//   useEffect(() => {
//     const storedItems = localStorage.getItem("checkoutCart");
//     if (storedItems) {
//       setCheckoutItems(JSON.parse(storedItems));
//     }
//   }, []);

//   useEffect(() => {
//     const total = checkoutItems.reduce(
//       (sum: any, item: any) => sum + item.price * item.quantity,
//       0
//     );
//     setTotalPrice(total);
//   }, [checkoutItems]);

//   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
 
//     const orderDetails = {
//       ...formDetails,
//       items: checkoutItems,
//       totalPrice: totalPrice,
//     };

//     const handleRemoveItem = (indexToRemove: number) => {
//         const updatedItems = checkoutItems.filter((_, index) => index !== indexToRemove);
//         setCheckoutItems(updatedItems);
//         localStorage.setItem("checkoutCart", JSON.stringify(updatedItems));
//       };
      
      
     
//     const existingOrders = JSON.parse(localStorage.getItem("shippedOrder") || "[]");
//     existingOrders.push(orderDetails);
//     localStorage.setItem("shippedOrder", JSON.stringify(existingOrders));

//     localStorage.removeItem("checkoutCart");   

//     alert("Order placed successfully!");
//   };

function CheckoutPage() {
    const [formDetails, setFormDetails] = useState({
        firstName: "",
        lastName: "",
        addressLine1: "",
        addressLine2: "",
        postalCode: "",
        locality: "",
        state: "",
        email: "",
        phoneNumber: "",
        pan: "",
      });
    const [checkoutItems, setCheckoutItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(() => {
      const storedItems = localStorage.getItem("checkoutCart");
      if (storedItems) {
        setCheckoutItems(JSON.parse(storedItems));
      }
    }, []);
  
    useEffect(() => {
      const total = checkoutItems.reduce(
        (sum: any, item: any) => sum + item.price * item.quantity,
        0
      );
      setTotalPrice(total);
    }, [checkoutItems]);
  
   
    const handleRemoveItem = (indexToRemove: number) => {
      const updatedItems = checkoutItems.filter((_, index) => index !== indexToRemove);
      setCheckoutItems(updatedItems);
      localStorage.setItem("checkoutCart", JSON.stringify(updatedItems));
    };
  
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormDetails((prev) => ({ ...prev, [name]: value }));
      };
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      const orderDetails = {
        items: checkoutItems,
        totalPrice: totalPrice,
      };
  
      const existingOrders = JSON.parse(localStorage.getItem("shippedOrder") || "[]");
      existingOrders.push(orderDetails);
      localStorage.setItem("shippedOrder", JSON.stringify(existingOrders));
  
      localStorage.removeItem("checkoutCart");   
      alert("Order placed successfully!");
    };
  
  return (
    <div className="bg-gray-100 min-h-screen font-poppins">
      {/* <Header /> */}
      <Navbar />

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

      <main className="py-[18vmin] px-4">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-4">How would you like to get your order?</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Customs regulation for India requires a copy of the recipient&apos;s KYC...{" "}
              <a href="#" className="text-blue-500 underline">Learn More</a>
            </p>

            <form onSubmit={handleSubmit}>
              <h3 className="text-lg font-semibold mb-4">Enter your name and addresss:</h3>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formDetails.firstName}
                  onChange={handleFormChange}
                  className="input w-full"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formDetails.lastName}
                  onChange={handleFormChange}
                  className="input w-full"
                />
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="addressLine1"
                  placeholder="Address Line 1"
                  value={formDetails.addressLine1}
                  onChange={handleFormChange}
                  className="input w-full"
                />
                <input
                  type="text"
                  name="addressLine2"
                  placeholder="Address Line 2"
                  value={formDetails.addressLine2}
                  onChange={handleFormChange}
                  className="input w-full"
                />
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formDetails.postalCode}
                  onChange={handleFormChange}
                  className="input w-full"
                />
                <input
                  type="text"
                  name="locality"
                  placeholder="Locality"
                  value={formDetails.locality}
                  onChange={handleFormChange}
                  className="input w-full"
                />
              </div>
              <div className="mb-4">
                <select
                  name="state"
                  value={formDetails.state}
                  onChange={handleFormChange}
                  className="input w-full"
                >
                  <option value="">State/Territory</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Saudia Arabia">Saudia Arabia</option>
                  <option value="India">India</option>
                  <option value="Germany">Germany</option>
                  <option value="USA">USA</option>
                </select>
              </div>

              <h3 className="text-lg font-semibold mb-4">What&apos;s your contact information?</h3>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formDetails.email}
                  onChange={handleFormChange}
                  className="input w-full"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formDetails.phoneNumber}
                  onChange={handleFormChange}
                  className="input w-full"
                />
              </div>
              <h3 className="text-lg font-semibold mb-4">What&apos;s your PAN?</h3>
              <input
                type="text"
                name="pan"
                placeholder="PAN"
                value={formDetails.pan}
                onChange={handleFormChange}
                className="input w-full mb-4"
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Order Summary</h2>
            {checkoutItems.length > 0 ? (
              <div>
                {checkoutItems.map((item: any, index) => (
                  <div key={index} className="flex items-center gap-4 mb-4">
                    <Image
                      src={urlFor(item.image).url()}
                      alt="Product Image"
                      width={60}
                      height={60}
                      className="rounded-md"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm">{item.productName}</p>
                      <p className="text-sm">{`$${item.price * item.quantity}`}</p>
                      <p className="text-sm">{item.quantity}</p>
                    {/* <div  className="flex justify-between items-start"><Trash onClick={()=>handleRemoveItem(index)} size={15} color="red"/></div> */}

                    <div className="flex justify-between items-start">
  <Trash
    size={15}
    color="red"
    className="cursor-pointer"
    onClick={() => handleRemoveItem(index)}
  />
</div>


                    </div>
                    
                   
                  </div>
                ))}
                <hr className="my-4" />
                <p className="text-sm sm:text-base">
                  Subtotal: <span className="font-bold">₹ {totalPrice.toFixed(2)}</span>
                </p>
                <p className="text-sm sm:text-base">
                  Delivery/Shipping: <span className="font-bold">Free</span>
                </p>
                <p className="text-sm sm:text-base">
                  Total: <span className="font-bold">₹ {totalPrice.toFixed(2)}</span>
                </p>
              </div>
            ) : (
              <p>No items available for checkout.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CheckoutPage;









