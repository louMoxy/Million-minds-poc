import * as React from 'react'

interface ContextProps {
  setActiveStep: any;
  activeStep: number;
}

export const StepperContext = React.createContext<ContextProps>({
  activeStep: 0,
  setActiveStep: () => null,
})

export const StepperContextProvider = ({ children }) => {
  const [activeStep, setActiveStep] = React.useState<number>(
    0
  )
  return (
    <StepperContext.Provider value={{ activeStep, setActiveStep }}>
      {children}
    </StepperContext.Provider>
  )
}
