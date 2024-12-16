import Image from "next/image";
import logo from "../../public/images/footerlogo.svg";
import payment from "../../public/images/payment.webp";
import {Github,Instagram,Linkedin,Facebook,Mail,MapPin}  from "lucide-react";


function Footer() {
  return (
    <div>
   <footer className="flex flex-col gap-28 py-12 px-4 justify-evenly border ">



<div className="flex justify-evenly flex-wrap py-6 px-2">

<div className="flex flex-col gap-5">
      <Image src={logo} alt="logo feat Shofy"/>
      <p className="sm:text-[1.2em] text-[1em] text-[#010f1c]">We are a team of designers<br/>and developers that create high quality<br/> Website</p>
      <div className="flex gap-5">
        <Linkedin size={30} className="py-2 px-2 bg-greenBase rounded-full transition-all duration-500 hover:bg-[#010f1c] text-white "/>
        <Instagram  size={30}className="py-2 px-2 bg-greenBase rounded-full transition-all duration-500 hover:bg-[#010f1c] text-white "/>
        <Facebook size={30} className="py-2 px-2 bg-greenBase rounded-full transition-all duration-500 hover:bg-[#010f1c] text-white "/>
        <Github size={30} className="py-2 px-2 bg-greenBase rounded-full transition-all duration-500 hover:bg-[#010f1c] text-white "/>
      </div>
    </div>


    <div className="flex flex-col gap-8">
      <h3 className="font-[500] sm:text-[1.3em]">My Account</h3>
      <ul className="flex flex-col gap-2">
        <li className="text-[#737373]">Track Order</li>
        <li className="text-[#737373]">Shipping</li>
        <li className="text-[#737373]">WishList</li>
        <li className="text-[#737373]">My Account</li>
        <li className="text-[#737373]">Order History</li>
        <li className="text-[#737373]">Return</li>
      </ul>
    </div>



    <div className="flex flex-col gap-3">
      <h3 className="font-[500] sm:text-[1.3em]">Information</h3>
      <ul className="flex flex-col gap-2">
        <li className="text-[#737373]">Our Story</li>
        <li className="text-[#737373]">Careers</li>
        <li className="text-[#737373]">Privacy & Policy</li>
        <li className="text-[#737373]">Terms & Condition</li>
        <li className="text-[#737373]">Latest News</li>
        <li className="text-[#737373]">Contact Us</li>
      </ul>
    </div>




    <div className="flex flex-col gap-3">
      <h3 className="font-[500] sm:text-[1.3em]">Talk To Us</h3>
      <div className="call">
        
       <p className="text-[#737373]">Got Questions? Call us</p>
       <span className="text-2xl font-[500]">+03128854302</span>
      </div>

      <div className="flex gap-4">
        <Mail size={25} className="text-[#737373]"/>
        <span className="text-[#737373]">muhammedlayan12@gmail.com</span>
      </div>

      
      <div className="flex gap-4">
        <MapPin size={25} className="text-[#737373]"/>
        <span className="text-[#737373]">79 Sleepy Hollow St.<br/>
        Jamaica, New York 1432</span>
      </div>

    </div>

</div>


<div className="flex justify-around gap-8 flex-wrap py-2 px-2">
  <p className="text-[#434343]"> &#169; Shofy 2024 All rights reserved | Next Js Website Template By <span className="text-greenBase">Muhammad Layan</span></p>
  <Image src={payment} alt="payment"/>
</div>

   </footer>
      
    </div>
  )
}

export default Footer;