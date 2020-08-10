import * as React from 'react'
import { dataSource } from '../dataSource/dataSource'
import { SelectedIdContext } from '../context/selectedIdContext'
import { Container } from './GlobalStyles'
import styled from 'styled-components'
import { Card, CardContent, Typography } from '@material-ui/core'
import { InfoCard } from './infoCard'
import { Phone } from './phone'

export const QueryCreated = () => {
  const { selectedId } = React.useContext(SelectedIdContext)
  const searchQuery = dataSource.getSearchQuery(selectedId)
  return (
    <Container>
      <Columns>
        <InfoCard text={infoText} />
        <div>
          <Typography variant="body1" style={{ padding: '20px 0' }}>
            The following search query has been generated:
          </Typography>
          <Card>
            <CardContent>
              <p>{searchQuery}</p>
            </CardContent>
          </Card>
        </div>
      </Columns>
      <Phone />
    </Container>
  )
}

const infoText =
  'Info panel explaining what the tech is doing in the back end. E.g. using John Snow Labs entity recognition model, topic expansion, referencing synonyms'

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
