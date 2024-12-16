import Image from "next/image";
import playstore from "../../public/images/playstore.svg";
import applestore from "../../public/images/applestore.svg";
import img from "../../public/images/cta.webp";
import desing1 from "../../public/images/cta-shape-1.webp";
import desing2 from "../../public/images/cta-shape-2.webp";

function App() {
  return (
    <div>
        
        <section className="flex md:flex-row flex-col justify-evenly py-16 px-4 w-full bg-greenBase my-20  relative">
            <div className="absolute left-0 bottom-0">
                <Image src={desing1} alt="" className="mix-blend-color-burn  opacity-20"/>
            </div>
            <div className="absolute right-0 top-0">
                <Image src={desing2} alt="" className="mix-blend-color-burn  opacity-20"/>
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="sm:text-5xl text-3xl font-semibold text-white">Get the app & get Your <br/>Groceries from home</h1>
                <div className="flex gap-7">
                <button className="text-white rounded-full px-10 py-3 bg-[#010f1c] flex gap-2 items-center">
        <Image src={playstore} className="h-auto w-[2.9vmin]" alt="Playstore available app shofy" />
        <div className="flex flex-col gap-0 text-sm">
          <span>GET IT ON</span>
          <p className="text-[1.2em] font-[500]">Google Play</p>
        </div>
      </button>
      <button className="text-[#010f1c] rounded-full px-10 py-3 bg-[#ffffff] flex gap-2 items-center">
        <Image src={applestore} className="h-auto w-[2.9vmin]" alt="Playstore available app shofy" />
        <div className="flex flex-col gap-0 text-sm">
          <span>DOWNLOAD ON THE</span>
          <p className="text-[1.2em] font-[500]">App Store</p>
        </div>
      </button>
                </div>
            </div>



<div>
    
<Image src={img} alt="" className="absolute bottom-[-3%] border-[4px] rounded-[30px] border-r-[#010f1c] border-l-[#010f1c] border-t-[#010f1c]  "/>

</div>
     
     

        </section>
    </div>
  )
}

export default App;