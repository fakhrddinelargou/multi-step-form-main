import { useState } from "react";

function SelectPlan() {
  const [toggled, setToggled] = useState(false);

  const [sCard, setScard] = useState<string[]>([]);

  type CardItem = {
    image: string;
    name: string;
    price: number;
    duration: string;
  };

  const cardData: CardItem[] = [
    {
      image: "/src/public/icon-arcade.svg",
      name: "Arcede",
      price: 90,
      duration: "2 months free",
    },
    {
      image: "/src/public/icon-advanced.svg",
      name: "Advanced",
      price: 120,
      duration: "2 months free",
    },
    {
      image: "/src/public/icon-pro.svg",
      name: "Pro",
      price: 150,
      duration: "2 months free",
    },
  ];

  function handleShooseCard({ card }: { card: string }): void {
    setScard([card]);
  }

  const planType = !toggled ? "Yearly" : "Monthly";
  console.log(sCard);
  console.log(planType);

  return (
    <div className="  w-full h-full py-5 text-[1.1rem] flex flex-col">
      <h1 className="text-4xl font-bold text-[var(--Blue-950)] pb-3">
        Select your plan
      </h1>
      <p className=" text-[var(--Grey-500)] pb-8">
        You have the option of monthly or yearly biling.
      </p>

      <div className="radio-inputs flex gap-4">
        {cardData.map((card, index) => (
          <label
            key={index}
            onClick={() => handleShooseCard({ card: card.name })}
          >
            <input className="radio-input" type="radio" name="engine" />
            <span className="radio-tile flex  flex-col  items-start  p-4 text-[var(--Blue-950)] pr-7">
              <img src={card.image} className="mb-7 w-[2rem] " />
              <span className="font-bold text-[1rem] ">{card.name}</span>
              <span className="text-[var(--Grey-500)] text-[.8rem]">
                ${card.price}/yr
              </span>
              <span className="font-medium text-[.85rem]">2 months free</span>
            </span>
          </label>
        ))}
      </div>
      <div className="p-3 bg-[var(--Blue-100)] rounded-[.4rem] mt-8 flex items-center justify-center gap-6">
        <span
          className={`font-medium ${
            toggled ? "text-[var(--Blue-950)]" : "text-[var(--Grey-500)]"
          } `}
        >
          Monthly
        </span>
        <div className="app  flex items-center justify-center h-full ">
          <button
            className={` cursor-pointer relative bg-[var(--Blue-950)] toggle-btn  rounded-[50rem] w-[2.5rem] h-[1.3rem] ${
              toggled ? "toggled" : ""
            }`}
            onClick={() => setToggled(!toggled)}
          >
            <div
              className={`absolute top-[10.6%] w-[1rem] h-[1rem] bg-white rounded-full transition-all duration-300 ${
                toggled ? "right-[1.4rem]" : "right-[.1rem]"
              }`}
            ></div>
          </button>
        </div>
        <span
          className={`font-medium ${
            toggled ? "text-[var(--Grey-500)]" : "text-[var(--Blue-950)]"
          } `}
        >
          Yearly
        </span>
      </div>
     <div className=" h-full flex items-end justify-between ">
        <span className="text-[1.1rem] text-[var(--Grey-500)]">Go Back</span>
         <button
          className="  cursor-pointer bg-[var(--Blue-950)] transition duration-200 hover:bg-[var(--Purple-600)] py-3 px-8 text-[1.1rem] text-[var(--White)] rounded-[.3rem]   "
          >
        Next Step
        </button>
      </div>
    </div>
    
  );
}

export default SelectPlan;
