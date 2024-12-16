import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"  
import Image from "next/image";
import img1 from "../../public/images/category-1.jpg";
import img2 from "../../public/images/category-2.jpg";
import img3 from "../../public/images/category-3.jpg";
import img4 from "../../public/images/category-4.jpg";
import img5 from "../../public/images/category-5.jpg";
import img6 from "../../public/images/category-6.jpg";
// import {Phone} from "lucide-react";

function Catogaries() {

    let categories = [
        {
          id: 1,
          p: "Frozen Food",
          img: img1,
          alt: "Frozen Food category"
        },
        {
          id: 2,
          p: "Meat & Fish",
          img: img2,
          alt: "Meat & Poultry category"
        },
        {
          id: 3,
          p: "Milk & Dairy",
          img: img3,
          alt: "Milk & Dairy category"
        },
        {
          id: 4,
          p: "Beverages",
          img: img4,
          alt: "Beverages category"
        },
        {
          id: 5,
          p: "Vegetable",
          img: img5,
          alt: "Vegetable category"
        },
        {
          id: 6,
          p: "Fruits",
          img: img6,
          alt: "Fruits category"
        }
      ];
      
      
  return (
    <div>
        <section className="flex flex-col justify-center m-auto  py-16 px-6 text-center">
            <span className="uppercase tracking-widest text-greenBase text-sm font-normal">Shop By Category</span>
            <h1 className="xl:text-[3em] lg:text-[2.6em] md:text-[2.2em] sm:text-[1.85em] text-[1.75em] font-[500]">Popular on the Shofi store.</h1>
      





            <Carousel className="m-auto xl:w-[70%] lg:w-[80%] md:w-[85%] sm:w-[95%] w-[100%] px-4 mt-16">
  <CarouselContent className="justify-center m-auto flex gap-4 px-4">
   {categories.map((items)=>(
     <div className="xl:w-[25%] md:w-[33%] sm:w-[40%] xs:w-[50%] w-[100%] m-auto flex-shrink-0" key={items.id} >
    
     <CarouselItem className="relative text-center">
                      <p className="top-4 right-[35%] left-[35%] absolute text-center">{items.p}</p>
                      <Image src={items.img} alt={items.alt} className="w-full h-auto"/>
      </CarouselItem>
     </div>
   ))}
  </CarouselContent>
  <CarouselPrevious className="py-2 px-2 border border-black mx-8"/>
  <CarouselNext className="py-2 px-2 border border-black mx-8"/>
</Carousel>



  
        </section>
    </div>
  )
}

export default Catogaries;