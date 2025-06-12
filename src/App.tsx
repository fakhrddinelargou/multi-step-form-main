import "./App.css";
import { useState } from "react"
import PresonalInfo from "./components/Personal-Info";
// import SelectPlan from "./components/Select-Plan"


function App() {



  const [checks, setChecks] = useState([false, false, false, false]);
const [selectItem, setSelectItem] = useState("your-info");

const handleOption = (item: string, index: number) => {
  const updatedChecks = checks.map((_, i) => i === index);
  setChecks(updatedChecks);
  setSelectItem(item.split(" ").join("-").toLowerCase());
};

    console.log(selectItem);
  
  
  return (
    <div className=" w-full  rounded-2xl flex items-center justify-between  p-5 max-w-[75%] bg-[var(--White)]  ">
      <div className="relative z-10  pl-7 pt-7 back-img">
      <ul className="text-[var(--White)] flex flex-col gap-7">
        {["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"].map(
          (item, index) => (
            <li key={index} className=" cursor-pointer flex gap-5 items-center" onClick={() => handleOption(item,index)}
 >
              <span
                
                className={`   w-9 h-9 p-[.2rem] font-medium text-center rounded-[50%]  border-1 text-xl bab 
                    ${checks[index] ? "style-if-checked": ""}
            
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

<div className=" w-[60%] h-full min-h-[35rem]">
 <PresonalInfo />
 {/* <SelectPlan/> */}
  
   
</div>

    </div>


  );
}

export default App;
