import * as React from 'react'
import styled from 'styled-components'
import { Card, Typography, CardContent } from '@material-ui/core'
import { colours } from '../components/GlobalStyles'
import Info from '@material-ui/icons/Info'

export const InfoCard = ({ text }: { text: string }) => {
  return (
    <StyledCard>
      <CardContent>
        <Info />
        <Typography variant="caption">{text}</Typography>
      </CardContent>
    </StyledCard>
  )
}

const StyledCard = styled(Card)`
  margin-right: 30px;
  height: fit-content;
  svg {
    margin-right: 5px;
    fill: ${colours.blue};
  }
  .MuiCardContent-root {
    display: flex;
    background: ${colours.offWhite};
  }
`
