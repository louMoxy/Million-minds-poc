import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import { Container, Button } from '@material-ui/core'
import { SymptomCapture } from '../components/symptomCapture'
import { BannerStepper } from '../components/Banner'
import { SelectedIdContextProvider } from '../context/selectedIdContext'
import { colours } from '../components/GlobalStyles'
import { EntityRecog } from '../components/entityRecog'

const stepContent = [<SymptomCapture />, <EntityRecog />, <SymptomCapture />]

const IndexPage = () => {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <SelectedIdContextProvider>
      <Layout>
        <SEO title="Home" />
        <BannerStepper activeStep={activeStep} setActiveStep={setActiveStep} />
        <Container component="div">
          {stepContent[activeStep]}
          {activeStep === stepContent.length && <p>Last view</p>}
          {activeStep < stepContent.length && (
            <Buttons>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === stepContent.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Buttons>
          )}
        </Container>
      </Layout>
    </SelectedIdContextProvider>
  )
}

export default IndexPage

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
