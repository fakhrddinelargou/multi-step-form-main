import { Link, useSearchParams } from "react-router-dom";

export default function FinichingUp() {

    const [searchParams , setSearchParams] = useSearchParams()


  const paramsObj = Object.fromEntries(searchParams.entries());
console.log(paramsObj);

const paramsArray = [
  searchParams.get("optiontitle1"),
  searchParams.get("optiontitle2"),
  searchParams.get("optiontitle3"),
];

const total = paramsArray.reduce((sum, option) => {
  if (option === "Larger storage" || option === "Customizable profile") {
    return sum + 2;
  } else if (option === "Online service") {
    return sum + 1;
  }
  return sum; // إذا كان الخيار لا يدخل في الحساب
}, 0);


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
                <span className="font-medium text-[var(--Blue-950)]">Arcade ({paramsObj.plan})</span>
                <span className="font-medium text-[var(--Blue-950)]">${paramsObj.priceL}/mo</span>
            </div>
            <p>change</p>
        </div>
        <div className="py-6 flex flex-col gap-3">
            {/* <div className=" flex justify-between ">
                <span className="text-[var(--Grey-500)]">Online service</span>
                <span className=" text-[var(--Blue-950)]">$1/mo</span>
            </div> */}
{paramsArray.map((option, index) => {
  if (option === "Larger storage" || option === "Online service" || option === "Customizable profile") {
    return (
      <div key={index} className="flex justify-between">
        <span className="text-[var(--Grey-500)]">{option}</span>
        <span className="text-[var(--Blue-950)]">${(option === "Online service" ? 1 : 2)}/mo</span>
      </div>
    );
  }
  return null; 
})}

        </div>
        
    </div>
<div className="flex justify-between p-7">
  <span className="text-[var(--Grey-500)]">
    Total (per {paramsObj.plan === "Yearly" ? "year" : "month"})
  </span>
  <span className="text-[var(--Purple-600)] text-2xl font-bold">
    +${total + Number(paramsObj.priceL)}/{paramsObj.plan === "Yearly" ? "yr" : "mo"}
  </span>
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
