import {Truck ,DollarSign,Headset,Lock } from "lucide-react";


function Service() {
  return (
    <div>
        <section className="flex py-16 px-4 gap-20 flex-wrap justify-evenly">
            <div className="flex items-center gap-5">
                <Truck size={30} className="text-greenBase "/>
                <p className="text-[1em] text-black">Flexible Delivery</p>
            </div>

            <div className="flex items-center gap-5">
                <DollarSign size={30} className="text-greenBase "/>
                <p className="text-[1.1em] text-black">100% Money Back</p>
            </div>



            <div className="flex items-center gap-5">
                <Lock size={30} className="text-greenBase "/>
                <p className="text-[1.1em] text-black">Secure Payment</p>
            </div>




            <div className="flex items-center gap-5">
                <Headset size={30} className="text-greenBase "/>
                <p className="text-[1.1em] text-black">24/7 Hour Support</p>
            </div>


        </section>
    </div>
  )
}

export default Service;