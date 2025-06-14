import { type ReactElement , useState } from "react";

export function useMultistepForm(steps : ReactElement[]){

const [currentStepIndex , setCurrentStepIndex ] = useState(0)

function nextStep(){
 setCurrentStepIndex(i => (i >= steps.length - 1 ? i : i + 1));
}

function back(){
  setCurrentStepIndex(i => {
    if (i <= 0) {
      return i;
    }
    return i - 1;
  });
}

function goTo(index:number){
    setCurrentStepIndex(index)

}
return{
    currentStepIndex,
    step : steps[currentStepIndex],
    isFirstStep : currentStepIndex === 0 ,
    isLastStep : currentStepIndex === steps.length -1,
    steps,
    goTo,
    nextStep,
    back,
}

}