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
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { Container } from './GlobalStyles'
import { SelectedIdContext } from '../context/selectedIdContext'
import { Phone } from './phone'

const maxStringLength = 200
const symptomsData = dataSource.getAllSymptom()
const sortData = (a, b) => {
  if(b.symptomName === a.symptomName) {
    return a.id - b.id;
  }
  return a.symptomName.localeCompare(b.symptomName)
}

export const SymptomCapture = () => {
  const [symptoms, setSymptoms] = React.useState(
    symptomsData
      .map(data => ({
        ...data,
        text: data.symptom.substring(0, maxStringLength),
        clipped: data.symptom.length > maxStringLength,
      }))
      .sort(sortData)
  )
  const { selectedId, setSelectedId } = React.useContext(SelectedIdContext)
  const [selected, setSelected] = React.useState(false);

  React.useEffect(() => {
    setSelectedId(symptoms[0].id)
  }, [])

  const expandText = (clickedId: number) => {
    const selectedData = symptoms.find(({ id }) => id === clickedId)
    selectedData.text = selectedData.clipped
      ? selectedData.symptom
      : selectedData.symptom.substring(0, maxStringLength)
    selectedData.clipped = !selectedData.clipped
    const newData = [
      ...symptoms.filter(({ id }) => id !== clickedId),
      selectedData,
    ].sort(sortData);
    setSymptoms(newData)
  }
  const currentSymptom = symptoms.find(({ id }) => id === selectedId)

  return (
    <Container>
      <div>
        Display conditions&nbsp;
        <ToggleButton
        value="check"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
        }}>
          { selected ? <CheckIcon /> : <ClearIcon />}
      </ToggleButton>
        <Typography
          variant="body1"
          style={{ margin: '30px 20px', textAlign: 'center' }}
        >
          Select a patient’s symptoms description
        </Typography>
        <Columns>
          {symptoms.map(({ id, symptomName, patient, text, clipped }) => (
            <SymptomCard key={id} onClick={() => setSelectedId(id)}>
              <CardContent>
                <Typography variant="body1">{selected ? symptomName : '------------'}{patient ? ': ' + patient : ''}</Typography>
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
        <Phone appMessage='Describe in your own words how you feel today…' responseMessage={currentSymptom ? currentSymptom.symptom : ''}/>
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
  cursor: pointer;
  .MuiCardContent-root {
    border-radius: 30px;
  }
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #eee;
`
