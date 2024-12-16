import img1 from "../../public/images/shape-4.webp";
import img2 from "../../public/images/shape-2.webp";
import img3 from "../../public/images/shape-3.webp";
import img4 from "../../public/images/shape-1.webp";
import Image from "next/image";
function Deals() {
  return (
    <div>
        <section className="flex flex-col relative lg:flex-row lg:gap-2 gap-12 justify-between py-4 bg-[#ebffeb] px-4 items-center text-center">
        <div className="absolute top-4 left-4">
<Image src={img4} alt="deals apple" className=""/> 
    </div>

    <div className="absolute lg:top-4 bottom-4 right-4">
<Image src={img3} alt="deals apple" className=""/> 
    </div>
            <Image src={img2} alt="deals gava" className=" z-40 lg:w-[25vw] h-auto"/>
       <div className="content">
       <span className="uppercase tracking-widest text-greenBase text-sm font-normal">Best Deals Of The Week</span>
       <h1 className="xl:text-[3.1em] lg:text-[2.55em] md:text-[2.4em] sm:text-[2.1em] text-[1.7em] font-[500]">Grab the best Offer Of<br/> this Week!</h1>
       <div className="flex gap-5 justify-center">
        <div className="flex flex-col py-3 px-3 sm:text-2xl text-xl font-semibold text-greenBase">
            31
            <span className="sm:text-lg text-sm text-[#636363] font-[400]">Days</span>
        </div>
        <div className="flex flex-col py-3 px-3 sm:text-2xl text-xl font-semibold text-greenBase">
            181
            <span className="sm:text-lg text-sm text-[#636363] font-[400]">Hours</span>
        </div>
        <div className="flex flex-col py-3 px-3 sm:text-2xl text-xl font-semibold text-greenBase">
            16
            <span className="sm:text-lg text-sm text-[#636363] font-[400]">Mins</span>
        </div>
        <div className="flex flex-col py-3 px-3 sm:text-2xl text-xl font-semibold text-greenBase">
            5
            <span className="sm:text-lg text-sm text-[#636363] font-[400]">Sec</span>
        </div>
       </div>
       </div>

<Image src={img1} alt="deals apple" className="z-40 lg:w-[25vw] h-auto"/>

        </section>
    </div>
  )
}

export default Deals;