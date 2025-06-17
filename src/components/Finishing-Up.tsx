import { Link } from "react-router-dom";

export default function FinichingUp() {
  return (
    <div className=" w-[60%] h-full min-h-[35rem]">
 
    <div className=" w-[80%] h-full py-5 text-[1.1rem] flex flex-col ">
      <h1 className="text-4xl font-bold text-[var(--Blue-950)] pb-3">
        Finishing up
      </h1>
      <p className="text-[var(--Grey-500)] pb-8">
        Double-check everything looks before confirming.
      </p>

<div>
    <div className=" px-8 bg-[var(--Blue-100)] rounded-[.5rem]">
        <div className=" flex flex-col gap-1 border-b-[.1rem] border-[var(--Purple-200)] py-6">
            <div className=" flex justify-between ">
                <span className="font-medium text-[var(--Blue-950)]">Arcade (Monthly)</span>
                <span className="font-medium text-[var(--Blue-950)]">$9/mo</span>
            </div>
            <p>change</p>
        </div>
        <div className="py-6 flex flex-col gap-3">
            <div className=" flex justify-between ">
                <span className="text-[var(--Grey-500)]">Online service</span>
                <span className=" text-[var(--Blue-950)]">$1/mo</span>
            </div>
                    <div className=" flex justify-between ">
                <span className="text-[var(--Grey-500)]">Larger storage</span>
                <span  className=" text-[var(--Blue-950)]">$2/mo</span>
            </div>
        </div>
        
    </div>
    <div className="flex justify-between p-7">
        <span className="text-[var(--Grey-500)]">Total (per month)</span>
        <span className="text-[var(--Purple-600)] text-2xl font-bold">+$12/mo</span>
    </div>
</div>
 


    <div className=" mt-auto h-[20%]  flex items-end justify-between ">
          <Link to={"/add-ons"}>
            <button className=" text-[1.4rem] text-[var(--Grey-500)] ">
              Back
            </button>
          </Link>
        <Link to={"*"}>
         <button
             
             
             className="  cursor-pointer bg-[var(--Blue-950)] transition duration-200 hover:bg-[var(--Purple-600)] py-3 px-8 text-[1.1rem] text-[var(--White)] rounded-[.3rem]   "
             >
            Confirm
        </button>
               </Link>
               
      </div>
    </div>
</div>
  );
}
