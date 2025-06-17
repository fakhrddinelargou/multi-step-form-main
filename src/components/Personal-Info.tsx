import { zodResolver } from "@hookform/resolvers/zod";
// import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import {  useNavigate } from "react-router-dom";
import {z} from "zod"



const schema = z.object({
  name: z.string().min(5 , "This field is required"),
  email: z.string().email("This field is required"),
   number: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be no more than 15 digits"),
})

type FormFields = z.infer<typeof schema> 




export default PresonalInfo;
function PresonalInfo() {
  const {
    register,
    handleSubmit,
    setError,
    // reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({resolver: zodResolver(schema)});

const onSubmit: SubmitHandler<FormFields> = async (data) => {
  console.log(data);

  try {

    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/select-plan");
    // reset();
    // throw new Error();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    setError("root", {
      type: "manual", 
      message: "This email is already taken",
    });
  }
};


const navigate = useNavigate()

// const handleNext = ()=>{
//   navigate("/select-plan")
// }

  return (
    <div className=" w-[60%] h-full min-h-[35rem]">
 
    <div className="  w-[80%] h-full py-5 text-[1.1rem] flex flex-col ">
      <h1 className="text-4xl font-bold text-[var(--Blue-950)] pb-3">
        Personal info
      </h1>
      <p className=" text-[var(--Grey-500)] pb-8">
        Please provide your name, email address, and phone number.
      </p>

      <form className=" h-full flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p className=" text-[var(--Blue-950)] font-medium pb-2 flex justify-between">
            Name
            {errors.name && (
              <span className="text-[var(--Red-500)]">
                {errors.name.message}
              </span>
            )}
          </p>
          <input
            {...register("name")}
            className={`outline-none focus:border-[var(--Purple-600)] border-2 rounded-[.5rem] p-3 w-full border-[var(--Purple-200)] mb-4 ${
              errors.name ? "border-[var(--Red-500)]" : ""
            }`}
            type="text"
            placeholder="e.g. Stephen King"
          />
        </label>
        <label htmlFor="">
          <p className=" text-[var(--Blue-950)] font-medium pb-2 flex justify-between">
            Email Address
            {errors.email && (
              <span className="text-[var(--Red-500)]">
                {errors.email.message}
              </span>
            )}
          </p>

          <input
            {...register("email")}
            className={`outline-none focus:border-[var(--Purple-600)] border-2 rounded-[.5rem] p-3 w-full border-[var(--Purple-200)] mb-4 ${
              errors.email ? "border-[var(--Red-500)]" : ""
            } `}
            type="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </label>
        <label htmlFor="">
          <p className=" text-[var(--Blue-950)] font-medium pb-2 flex justify-between">
            Phone Number{" "}
            {errors.number && (
              <span className="text-[var(--Red-500)]">
                {errors.number.message}
              </span>
            )}
          </p>

          <input
            {...register("number")}
            className={`outline-none focus:border-[var(--Purple-600)] border-2 rounded-[.5rem] p-3 w-full border-[var(--Purple-200)] mb-4 ${
              errors.number ? "border-[var(--Red-500)]" : ""
            } `}
            type="number"
            placeholder="e.g. +1 234 567 890"
            />
        </label>
       
        
      <div className=" mt-auto h-[20%]  flex items-end justify-between ">
        <span className="text-[1.1rem] text-[var(--Grey-500)]"></span>
        {/* <Link to={"/select-plan"}> */}
         <button
             disabled={isSubmitting}
             type="submit"
             className="  cursor-pointer bg-[var(--Blue-950)] transition duration-200 hover:bg-[var(--Purple-600)] py-3 px-8 text-[1.1rem] text-[var(--White)] rounded-[.3rem]   "
             >
            Next Step
        </button>
               {/* </Link> */}
      </div>
      </form>
    </div>
             </div>
  );
}