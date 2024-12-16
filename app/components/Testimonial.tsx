import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
import Image from "next/image";
import {Star} from "lucide-react";
import img1 from "../../public/images/user-3.webp";
import img2 from "../../public/images/user-4.webp";
import img3 from "../../public/images/user-2.webp";

function Navbar() {
    const data = [
        {
            id: 1,
            alt: "testimonial 1",
            img: img1,
            review: "The tool X has really automated some of our company’s processes. We now spend less time doing manual work, and our workflow has become seamless. The integration with our existing systems was smooth, and it’s making [problem] very easy for us. I would highly recommend it to any team looking to improve efficiency and save time.",
            name: "Suel Mari",
            position: "SEO Expert"
        },
        {
            id: 2,
            alt: "testimonial 2",
            img: img2,
            review: "Using tool X, we've been able to increase efficiency across multiple teams. It has streamlined our operations, saving us countless hours of manual effort. The intuitive design made onboarding effortless for our team. It’s been a game-changer for our operations, and we’ve seen measurable improvements in productivity.",
            name: "Alex Johnson",
            position: "Operations Manager"
        },
        {
            id: 3,
            alt: "testimonial 3",
            img: img3,
            review: "Tool X is intuitive and powerful. It has greatly simplified tasks we struggled with before and provided incredible value. The analytics features have given us deeper insights into our processes, allowing us to make data-driven decisions. I can't imagine our work without it now; it's been a real boost to our performance.",
            name: "Priya Sharma",
            position: "Product Manager"
        }
    ];
    

  return (
    <div>
        <section className="flex flex-col justify-center m-auto  py-16 px-6 text-center">
 <span className="uppercase tracking-widest text-greenBase text-sm font-normal">Customer Reviews</span>
 <h1 className="xl:text-[3em] lg:text-[2.6em] md:text-[2.2em] sm:text-[1.85em] text-[1.75em] font-[500]">Our Happy Customer</h1>
           
<Carousel className="m-auto xl:w-[60%] lg:w-[80%] md:w-[75%] sm:w-[85%] w-[95%] py-4 px-4 my-10 ">
  <CarouselContent className="flex justify-center">
  {data.map((data)=>(
   <div className=" w-[100%]  flex-shrink-0" key={data.id} >

        <CarouselItem className="flex flex-col lg:flex-row gap-4 items-center lg:text-start text-center" key={data.id}>
        <Image src={data.img} alt={data.alt} className="rounded-full"/>
        <div className="flex flex-col gap-4">
            <div className="flex gap-2 justify-center"><Star size={15} className="text-yellow-500"/> <Star size={15} className="text-yellow-500"/><Star size={15} className="text-yellow-500"/><Star size={15} className="text-yellow-500"/><Star size={15} className="text-yellow-500"/></div>
            <p className="sm:text-[1.2em] text-[1em]">{data.review}</p>
            <p className="font-bold sm:text-[1.2em] text-[1em]">{data.name}</p>
            <p className="text-[#737373] text-md">{data.position}</p>
        </div>
    </CarouselItem>


    </div>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

 </section>
    </div>
  );
}

export default Navbar;
