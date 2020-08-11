import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'

const AboutPage = () => (
  <Layout>
    <SEO title="About Page" />
    <StyledContainer component='div'>
      <h3>What does the Proof of Concept do?</h3>
      <p>Million Minds helps patients in 3 ways:</p>
      <ol>
        <li>Improving the capture and characterisation of symptoms</li>
        <li>Identifying patterns in lifestyle factors and symptoms to help the patient manage how they feel</li>
        <li>Using the information collected to search for potential diagnoses</li>
      </ol>
      <p>This version of the proof of concept will focus on the most difficult of these - number 3 - the search engine.</p>
      <p>We have identified 12 test conditions whose diagnosis ranges in complexity to tackle first.</p>
      <p>The POC inputs one of 15 patient symptom profiles (provided by patients who have been successfully diagnosed with one of the test conditions) and runs this through a 3 step process</p>
      <ol>
        <li>Identifying the pertinent terms within the symptom description</li>
        <li>Expanding on these terms to include synonyms and colloquial or medical terminology and then forming a search query</li>
        <li>Using this query to trawl a database of 100 medical journals and social data relating to the test conditions to provide a summary of literature relating to potential diagnoses</li>
      </ol>
      <h3>What are we proving?</h3>
      <p>We are assessing the concordance between clinician decisions and decisions made my Million Minds with the aim of proving that, in an accepted number of cases, Million Minds suggests the same diagnosis as a clinician.</p>
      <p>If a significant number of results from our search of 12 conditions relate to the condition that we know the patient was diagnosed with, we can begin to build up the knowledge graph which will help us expand this to a much wider group of conditions.</p>
      <h3>How do we see it being used and by who?</h3>
      <p>The POC will provide a window onto the Million Minds AI model allowing both internal and external stakeholders to scrutinise the results returned and start to develop the rules which will improve the accuracy of results and allow us to expand the list of test conditions.</p>
      <p>Clinicians will see which results are returned and why, helping us to understand the nuances of diagnosing particular conditions and allowing us to feed this clinical knowledge into the model.</p>
      <p>Over time clinicians will be able to enter their own symptom descriptions (based on patients they have treated) and see the results returned.</p>
    </StyledContainer>
  </Layout>
)

const StyledContainer = styled(Container)`
  font-size: 14px;
  line-height: 16px;
`;

export default AboutPage
