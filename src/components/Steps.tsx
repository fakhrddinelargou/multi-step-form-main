

function Steps(){
  return (
<div className="relative z-10  pl-7 pt-7 back-img">
      <ul className="text-[var(--White)] flex flex-col gap-7">
        {["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"].map(
          (item, index) => (
            <li key={index} className=" cursor-pointer flex gap-5 items-center" 
 >
              <span
                
                className={`   w-9 h-9 p-[.2rem] font-medium text-center rounded-[50%]  border-1 text-xl bab 
                    
            
                 `}
              >
                {index + 1}
              </span>
              <div className="flex flex-col ">
                <span className="text-[var(--Grey-500)] font-medium text-[.7rem] ">
                  STEP {index + 1}
                </span>
                <span className="font-medium tracking-wider text-[1rem] ">
                  {item}
                </span>
              </div>
            </li>
          )
        )}
      </ul>
  
    </div>
  );
}

export default Steps;
