import * as React from 'react'
import styled from 'styled-components'
import { colours } from './GlobalStyles'
import { StepperContext } from '../context/stepperContext'

interface Props {
  appMessage: string
  responseMessage?: string
}

export const Phone = ({ appMessage, responseMessage }: Props) => {
  const { setActiveStep } = React.useContext(StepperContext)
  return (
    <Container>
      <AppMessage>
        <p>{appMessage}</p>
      </AppMessage>
      {responseMessage && (
        <ResponseMessage
          dangerouslySetInnerHTML={{ __html: responseMessage }}
        />
      )}
      <SendButton
        onClick={() => setActiveStep(prevActiveStep => prevActiveStep + 1)}
      >
        <p>Send ></p>
      </SendButton>
    </Container>
  )
}

const SendButton = styled.div`
  background: ${colours.peach};
  color: white;
  padding: 5px 10px;
  width: max-content;
  align-self: flex-end;
  border-radius: 15px;
  font-size: 14px;
  cursor: pointer;
`

const ResponseMessage = styled.div`
  background: white;
  padding: 20px;
  border-radius: 20px;
  width: 80%;
  margin-left: auto;
  margin-bottom: 20px;
  box-shadow: 3px 2px 10px -1px #cecece;
  span {
    background: ${colours.blue};
    color: white;
    padding: 0 3px;
  }
`

const AppMessage = styled.div`
  background: linear-gradient(to right, ${colours.blue}, ${colours.purple});
  padding: 20px;
  color: white;
  border-radius: 20px;
  width: 80%;
  margin-bottom: 20px;
  box-shadow: 3px 2px 10px -1px #cecece;
`

const Container = styled.div`
  height: 600px;
  width: 320px;
  margin: 40px 20px;
  background: ${colours.offPurple};
  border: solid 9px black;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  overflow: hidden;
  font-size: 14px;
  max-width: 320px;
  position: sticky;
  top: 30px;
  p {
    margin-bottom: 0;
  }
  &:before {
    content: '';
    position: absolute;
    background: black;
    width: 40px;
    height: 5px;
    top: 12px;
    left: 131px;
    border-radius: 10px;
  }
`
