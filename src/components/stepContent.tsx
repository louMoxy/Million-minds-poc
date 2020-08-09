import { SearchResults } from './searchResults'
import { StepperButtons } from './stepperButtons'
import { Container } from '@material-ui/core'
import * as React from 'react'
import { SymptomCapture } from './symptomCapture'
import { EntityRecog } from './entityRecog'
import { StepperContext } from '../context/stepperContext'

export const stepContent = [<SymptomCapture />, <EntityRecog />, <SymptomCapture />]

export const StepContent = () => {
  const { activeStep } = React.useContext(StepperContext);
  return (
    <Container component="div">
      {stepContent[activeStep]}
      {activeStep === stepContent.length && <SearchResults />}
      {activeStep < stepContent.length && (
        <StepperButtons />
      )}
    </Container>
  )
}