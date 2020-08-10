import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { colours } from './GlobalStyles'
import { StepperContext } from '../context/stepperContext'

interface Props {
  appMessage?: string
  responseMessage?: string
}

export const Phone = ({ appMessage, responseMessage }: Props) => {
  const { setActiveStep } = React.useContext(StepperContext)

  return (
    <Container centered={!(appMessage && responseMessage)}>
      {appMessage && (
        <AppMessage>
          <p>{appMessage}</p>
        </AppMessage>
      )}
      {responseMessage && (
        <>
          <ResponseMessage
            dangerouslySetInnerHTML={{ __html: responseMessage }}
          />
          <SendButton
            onClick={() => setActiveStep(prevActiveStep => prevActiveStep + 1)}
          >
            <p>Send ></p>
          </SendButton>
        </>
      )}
      {!appMessage && !responseMessage && (
        <LoadingButton>
          <p>Finding Results</p>
          <Dots>
            <p>•</p>
            <p>•</p>
            <p>•</p>
          </Dots>
        </LoadingButton>
      )}
    </Container>
  )
}

const jump = keyframes`
  0% {
    transform: translate(0px, -4px);
  }
  50% {
    transform: translate(0px, 4px);
  }
  100% {
    transform: translate(0px, -4px);
  }
`

const Dots = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  p {
    transform: translate(0px, -4px);
    animation: ${jump} 1s ease-in infinite;
  }
  p:nth-child(2) {
    animation: ${jump} 1s 0.2s ease-in infinite;
  }
  p:nth-child(3) {
    animation: ${jump} 1s 0.4s ease-in infinite;
  }
`

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

const LoadingButton = styled(AppMessage)`
  text-align: center;
  width: 150px;
  padding: 10px;
  align-self: center;
  justify-self: center;
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
  justify-content: ${({ centered }) => (centered ? 'center' : 'flex-end')};
  padding: 20px;
  overflow: hidden;
  font-size: 14px;
  position: relative;
  max-width: 320px;
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
