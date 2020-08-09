import * as React from 'react';
import Container from '@material-ui/core/Container'
import Stepper from '@material-ui/core/Stepper/Stepper'
import StepLabel from '@material-ui/core/StepLabel/StepLabel'
import Step from '@material-ui/core/Step/Step'
import { colours } from '../components/GlobalStyles'
import styled from 'styled-components'
import { StepperContext } from '../context/stepperContext'

const steps = [
  'Symptom capture',
  'Demo of entity recognition',
  'Query Created​',
  'Document Search Results​',
];

export const BannerStepper = () => {
  const { activeStep, setActiveStep } = React.useContext(StepperContext);
  return (
    <Banner>
      <Container component='div'>
        <StyledStepper activeStep={activeStep}>
          {steps.map((label, index) => {
            return (
              <StyledStep key={label}>
                <StyledLabel onClick={() => setActiveStep(index)}>{label}</StyledLabel>
              </StyledStep>
            )
          })}
        </StyledStepper>
      </Container>
    </Banner>
  )
}

const Banner = styled.div`
  background: linear-gradient(to right, ${colours.blue}, ${colours.purple});
  padding: 20px;
`

const StyledStepper = styled(Stepper)`
  &.MuiPaper-root {
    background-color: transparent;
  }
  .MuiStepConnector-line {
    border-color: white;
  }
`

const StyledLabel = styled(StepLabel)`
  .MuiStepLabel-label, .MuiStepLabel-label.MuiStepLabel-completed {
    color: white;
    opacity: 0.8;
    cursor: pointer;
  }
  .MuiStepLabel-label.MuiStepLabel-active {
    color: white;
    opacity: 1;
  }
`

const StyledStep = styled(Step)`
  .MuiStepIcon-root, .MuiStepIcon-root.MuiStepIcon-completed {
    opacity: 0.8;
    color: white;
    text {
      fill: ${colours.black};
    }
    &.MuiStepIcon-active {
      opacity: 1;
      color: ${colours.peach};
      text {
        fill: white;
      }
    }
  }
`
