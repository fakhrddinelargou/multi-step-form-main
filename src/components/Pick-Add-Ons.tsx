import { useState } from "react";
import { Link } from "react-router-dom";

type AddOn = {
  title: string;
  description: string;
  price: number;
};

const addOns: AddOn[] = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    price: 1,
  },
  {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    price: 2,
  },
];

export default function AddOns() {
  const [selected, setSelected] = useState<boolean[]>([false, false, false]);
  const [items, setItems] = useState<AddOn[]>([]);

  const toggle = (addOn: AddOn, index: number) => {
    setSelected((prevSelected) => {
      const updatedSelected = prevSelected.map((isSelected, i) =>
        i === index ? !isSelected : isSelected
      );

      if (!prevSelected[index]) {
        setItems((prevItems) => [...prevItems, addOn]);
      } else {
   
        setItems((prevItems) =>
          prevItems.filter((item) => item.title !== addOn.title)
        );
      }

      return updatedSelected; 
    });
  };

  console.log(items)
  return (
    <div className=" w-[60%] h-full min-h-[35rem]">
 
    <div className=" w-[80%] h-full py-5 text-[1.1rem] flex flex-col ">
      <h1 className="text-4xl font-bold text-[var(--Blue-950)] pb-3">
        Pick add-ons
      </h1>
      <p className="text-[var(--Grey-500)] pb-8">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="flex flex-col gap-4">
        {addOns.map((addOn, index) => (
          <label
          key={index}
          className={`flex justify-between items-center border rounded-lg p-4 cursor-pointer transition ${
            selected[index]
            ? "border-blue-600 bg-blue-50"
            : "border-gray-300"
          }`}
          
          >
            <div className="flex gap-4 items-center">
              <input
                type="checkbox"
                checked={selected[index]}
                onChange={() => toggle(addOn, index)}
                readOnly
                className="w-5 h-5 accent-blue-600"
                />
              <div>
                <h3 className="font-bold text-blue-950">{addOn.title}</h3>
                <p className="text-sm text-gray-500">{addOn.description}</p>
              </div>
            </div>
            <span className="text-blue-700 font-semibold">+${addOn.price}/mo</span>
          </label>
        ))}
      </div>

        <div className=" mt-auto h-[20%]  flex items-end justify-between ">
          <Link to={"/select-plan"}>
            <button className=" text-[1.4rem] text-[var(--Grey-500)] ">
              Back
            </button>
          </Link>
        <Link to={"/finishing-up"}>
         <button
             
             
             className="  cursor-pointer bg-[var(--Blue-950)] transition duration-200 hover:bg-[var(--Purple-600)] py-3 px-8 text-[1.1rem] text-[var(--White)] rounded-[.3rem]   "
             >
            Next Step
        </button>
               </Link>
               
      </div>
    </div>
               </div>
  );
}
