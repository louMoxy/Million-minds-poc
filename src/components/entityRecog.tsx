import * as React from 'react'
import { dataSource } from '../dataSource/dataSource'
import { SelectedIdContext } from '../context/selectedIdContext'
import { Container, colours } from './GlobalStyles'
import styled from 'styled-components'
import { Card, CardContent, Typography } from '@material-ui/core'
import { InfoCard } from './infoCard'
import { Phone } from './phone'

export const EntityRecog = () => {
  const { selectedId } = React.useContext(SelectedIdContext)
  const highlightedText = dataSource.getHighlightedTerms(selectedId)
  return (
    <Container>
      <Columns>
        <InfoCard text={infoText} />
        <div>
          <Typography variant="body1" style={{ padding: '20px 0' }}>
            These keywords have been identified for use in the document search
          </Typography>
          <Card>
            <CardContent>
              <Text dangerouslySetInnerHTML={{ __html: highlightedText }} />
            </CardContent>
          </Card>
        </div>
      </Columns>
      <Phone appMessage='Describe in your own words how you feel today…' responseMessage={highlightedText}/>
    </Container>
  )
}

const infoText =
  'The free form text is analysed using an entity recognition model (we are currently evaluating those from John Snow Labs, Stanford University and AWS Comprehend) and terms for symptoms, body parts, drugs and conditions are identified. The synonyms for these terms are also included in order to conduct a more comprehensive search.'

const Columns = styled.div`
  display: flex;
  align-items: center;
  & > *:first-child {
    flex: 1;
  }
  & > *:nth-child(2) {
    flex: 3;
  }
`

const Text = styled.p`
  span {
    background: ${colours.blue};
    color: white;
    padding: 0 3px;
  }
`
