import { useState } from "react";
import { Link } from "react-router-dom";

function SelectPlan() {
  const [toggled, setToggled] = useState(false);

  type CardWithPlan = CardItem & {
    plan: string;
  };

  const [sCard, setScard] = useState<CardWithPlan[]>([]);

  type CardItem = {
    image: string;
    name: string;
    price: number;
    duration: string;
    monthlyPrice: number;
  };

  const cardData: CardItem[] = [
    {
      image: "/src/public/icon-arcade.svg",
      name: "Arcade",
      price: 90, // yearly
      duration: "2 months free",
      monthlyPrice: 9, // monthly
    },
    {
      image: "/src/public/icon-advanced.svg",
      name: "Advanced",
      price: 120,
      duration: "2 months free",
      monthlyPrice: 12,
    },
    {
      image: "/src/public/icon-pro.svg",
      name: "Pro",
      price: 150,
      duration: "2 months free",
      monthlyPrice: 15,
    },
  ];

  const planType = !toggled ? "Yearly" : "Monthly";

  function handleShooseCard({ card }: { card: CardItem }): void {
    const selectedPrice =
      planType === "Yearly" ? card.price : card.monthlyPrice;
    setScard([{ ...card, plan: planType, price: selectedPrice }]);
  }

  console.log(sCard);
  console.log(planType);

  return (
    <div className=" w-[60%] h-full min-h-[35rem]">
      <div className=" flex flex-col w-[80%] h-full py-5 text-[1.1rem]">
        <h1 className="text-4xl font-bold text-[var(--Blue-950)] pb-3">
          Select your plan
        </h1>
        <p className=" text-[var(--Grey-500)] pb-8">
          You have the option of monthly or yearly biling.
        </p>

        <div className="radio-inputs flex gap-4 w-full ">
          {cardData.map((card, index) => (
            <label
              className="w-full"
              key={index}
              onClick={() => handleShooseCard({ card })}
            >
              <input className="radio-input" type="radio" name="engine" />
              <span className="radio-tile flex  flex-col  items-start  p-4 text-[var(--Blue-950)] w-full">
                <img src={card.image} className="mb-15 " />
                <span className="font-bold text-[1.3rem] ">{card.name}</span>
                <span className="text-[var(--Grey-500)] text-[1.2rem]">
                  {" "}
                  ${planType === "Yearly" ? card.price : card.monthlyPrice}/
                  {planType === "Yearly" ? "yr" : "mo"}
                </span>
                <span className="font-medium text-[1.2rem]">2 months free</span>
              </span>
            </label>
          ))}
        </div>
        <div className="p-3 bg-[var(--Blue-100)] rounded-[.4rem] mt-8 flex items-center justify-center w-full gap-6">
          <span
            className={`font-medium ${
              toggled ? "text-[var(--Blue-950)]" : "text-[var(--Grey-500)]"
            } `}
          >
            Monthly
          </span>
          <div className="app  flex items-center justify-center h-full ">
            <div
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
            </div>
          </div>
          <span
            className={`font-medium ${
              toggled ? "text-[var(--Grey-500)]" : "text-[var(--Blue-950)]"
            } `}
          >
            Yearly
          </span>
        </div>
        <div className="   mt-auto  h-[20%]  flex items-end justify-between ">
          <Link to={"/Personal-Info"}>
            <button className=" text-[1.4rem] text-[var(--Grey-500)] ">
              Back
            </button>
          </Link>
          <Link to={"/add-ons"}>
            <button className="  cursor-pointer bg-[var(--Blue-950)] transition duration-200 hover:bg-[var(--Purple-600)] py-3 px-8 text-[1.1rem] text-[var(--White)] rounded-[.3rem]   ">
              Next Step
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SelectPlan;
