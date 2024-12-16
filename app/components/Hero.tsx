import Link from "next/link";
import Image from "next/image";
import heroimg from "../../public/images/hero.webp";
import img1 from "../../public/images/herospecial.webp";
import offertag from "../../public/images/herotag.webp";
import img2 from "../../public/images/heroshape1.webp";
import img3 from "../../public/images/heroshape2.webp";
import img4 from "../../public/images/heroshape3.webp";
import img5 from "../../public/images/heroshape4.webp";

const Hero = () => {
  return (
    <div>
      

      <section className="flex flex-col-reverse lg:text-start text-center lg:gap-0 gap-12 lg:flex-row py-[28vmin] px-6 justify-evenly items-center">
  
        <div className="flex flex-col gap-5 relative py-4">
          <Image src={img1} alt="today special veges"/>
          <Image src={img2} alt="fruits" className="absolute top-2 right-0"/>
          <Image src={img3} alt="fresh stawberrys" className="absolute top-[80%] right-12"/>
          <Image src={img5} alt="fresh stawberrys" className="absolute bottom-[100%] left-0"/>
          <h1 className="xl:text-[5em] lg:text-[3.8em] md:text-[3.5em] sm:text-[2.4em] text-[2.5em] xl:leading-[65px]  lg:leading-[55px]  md:leading-[40px] sm:leading-[28px] leading-[30px] font-[500]">The Online<br/>
          Grocery Store</h1>
          <Link href="/shop" >
          <button className="py-2 px-12 rounded-full bg-greenBase text-white transition-all duration-500 hover:bg-greenHover">Shop Now</button></Link>
        </div>
       <div className="md:w-[70%] w-full lg:w-[60%] relative xl:w-[50%]" >
        <Image src={offertag} alt="fresh 20%off vegestable" className=" xl:w-[20%] w-[25%] absolute top-0 items-center z-50 left-[30%] flex justify-center"/>
       <Image src={heroimg} alt="heroimg fresh Vegetable" className="w-full" />
       <Image src={img4} alt="logo" className="absolute top-0 right-2"/>
       </div>
      </section>


    </div>
  )
}

export default Hero;