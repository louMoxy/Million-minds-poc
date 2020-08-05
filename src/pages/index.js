import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '@material-ui/core/Container'
import {SymptomCapture} from '../components/symptomCapture';
import { BannerStepper } from '../components/Banner'


const getStepContent = [<SymptomCapture/>, <SymptomCapture/>, <SymptomCapture/>, <SymptomCapture/>]

const IndexPage = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <Layout>
      <SEO title="Home" />
      <BannerStepper activeStep={activeStep} setActiveStep={setActiveStep}/>
      <Container component='div'>
        {getStepContent[activeStep]}
      </Container>
    </Layout>
  )
}

export default IndexPage
