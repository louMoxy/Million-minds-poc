import { Button } from '@material-ui/core'
import * as React from 'react'
import { StepperContext } from '../context/stepperContext'
import {stepContent} from './stepContent';
import styled from 'styled-components'
import { colours } from '../components/GlobalStyles'

export const StepperButtons = () => {
  const { activeStep, setActiveStep } = React.useContext(StepperContext);
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }
  return (
    <Buttons>
      <Button disabled={activeStep === 0} onClick={handleBack}>
        Back
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleNext}
      >
        {activeStep === stepContent.length - 1 ? 'Finish' : 'Next'}
      </Button>
    </Buttons>
  )
}

const Buttons = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  .MuiButton-containedPrimary {
    background: ${colours.peach};
    transition: background 0.4s;
    &:hover {
      background: ${colours.purple};
    }
  }
`