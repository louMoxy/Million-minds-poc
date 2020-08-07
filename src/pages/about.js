import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '@material-ui/core/Container'

const AboutPage = () => (
  <Layout>
    <SEO title="About Page" />
    <Container component='div'>
      <h1>Components</h1>
      <p>Welcome to the components page.</p>
    </Container>
  </Layout>
)

export default AboutPage
