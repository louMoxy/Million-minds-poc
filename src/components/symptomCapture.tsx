import * as React from 'react'
import { dataSource } from '../dataSource/dataSource'
import styled from 'styled-components'
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Container } from './GlobalStyles'
import { SelectedIdContext } from '../context/selectedIdContext'

const maxStringLength = 200;
const symptomsData = dataSource.getAllSymptom()
const sortedData = (a, b) => a.symptomName.localeCompare(b.symptomName)

export const SymptomCapture = () => {
  const [symptoms, setSymptoms] = React.useState(
    symptomsData
      .map(data => ({
        ...data,
        text: data.symptom.substring(0, maxStringLength),
        clipped: data.symptom.length > maxStringLength,
      }))
      .sort(sortedData)
  )
  const {setSelectedId, selectedId} = React.useContext(SelectedIdContext);

  React.useEffect(() => {
    setSelectedId(symptoms[0].id);
  }, []);

  const expandText = (selectedId: number) => {
    const selectedData = symptoms.find(({ id }) => id === selectedId)
    selectedData.text = selectedData.clipped
      ? selectedData.symptom
      : selectedData.symptom.substring(0, maxStringLength)
    selectedData.clipped = !selectedData.clipped
    const newData = [
      ...symptoms.filter(({ id }) => id !== selectedId),
      selectedData,
    ]
    setSymptoms(newData.sort(sortedData))
  }

  console.log(selectedId)
  return (
    <Container>
      <div>
        <Typography
          variant="body1"
          style={{ margin: '30px 20px', textAlign: 'center' }}
        >
          Select a patient’s symptoms description
        </Typography>
        <Columns>
          {symptoms.map(({ id, symptomName, text, clipped }) => (
            <SymptomCard key={id} onClick={() => setSelectedId(id)}>
              <CardContent>
                <Typography variant="body1">{symptomName}</Typography>
              </CardContent>
              <Divider />
              <CardContent>
                <Typography gutterBottom variant="body2">
                  {text}
                  {clipped && '...'}
                </Typography>
                {clipped && (
                  <CardActions>
                    <Button
                      size="small"
                      style={{ marginLeft: 'auto' }}
                      onClick={() => expandText(id)}
                    >
                      <ExpandMoreIcon />
                    </Button>
                  </CardActions>
                )}
              </CardContent>
            </SymptomCard>
          ))}
        </Columns>
      </div>
      <div>
        <p>Mobile app</p>
      </div>
    </Container>
  )
}

const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SymptomCard = styled(Card)`
  width: 44%;
  margin: 20px;
  .MuiCardContent-root {
    border-radius: 30px;
  }
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #eee;
`
