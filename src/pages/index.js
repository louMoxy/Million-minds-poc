import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { BannerStepper } from '../components/Banner'
import { SelectedIdContextProvider } from '../context/selectedIdContext'
import { StepperContextProvider } from '../context/stepperContext'
import {StepContent} from '../components/stepContent'


const IndexPage = () => {
  return (
    <StepperContextProvider>
      <SelectedIdContextProvider>
        <Layout>
          <SEO title="Home" />
          <BannerStepper/>
          <StepContent />
        </Layout>
      </SelectedIdContextProvider>
    </StepperContextProvider>
  )
}

export default IndexPage
