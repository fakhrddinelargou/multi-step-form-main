import "./App.css";
import PresonalInfo from "./components/Personal-Info";
import SelectPlan from "./components/Select-Plan";
import AddOns from "./components/Pick-Add-Ons";
import FinichingUp from "./components/Finishing-Up";
import Steps from "./components/Steps";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from "./components/error-404";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Steps />
          <PresonalInfo />
        </>
      ),
    },
        {
      path: "/Personal-Info",
      element: (
        <>
          <Steps />
          <PresonalInfo />
        </>
      ),
    },
    {
      path: "/select-plan",
      element: (
        <>
          <Steps />
          <SelectPlan />
        </>
      ),
    },
    {
      path: "/add-ons",
      element: (
        <>
          <Steps />
          <AddOns />
        </>
      ),
    },
    {
      path: "/finishing-up",
      element: (
        <>
          <Steps />
          <FinichingUp />
        </>
      ),
    },
        {
      path: "*",
      element: (
        <>
       <Error404/>
        </>
      ),
    },
  ]);

  return (
    <div className="w-full rounded-2xl flex items-center justify-between p-5 max-w-[75%] bg-[var(--White)]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
