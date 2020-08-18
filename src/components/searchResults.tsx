import * as React from 'react'
import { dataSource } from '../dataSource/dataSource'
import styled from 'styled-components'
import { SelectedIdContext } from '../context/selectedIdContext'
import { colours } from '../components/GlobalStyles'
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'

const colourArray = [
  colours.peach,
  colours.blue,
  colours.purple,
  colours.offWhite,
]

export const SearchResults = () => {
  const { selectedId } = React.useContext(SelectedIdContext)
  const [reports] = React.useState(dataSource.getReports(selectedId))
  let sourceTypes = []
  reports.forEach(({ sourceType }) => {
    if (!sourceTypes.includes(sourceType)) {
      return sourceTypes.push(sourceType)
    }
  })
  return (
    <Container>
      <Typography variant="body1">
        Below are relevant results (based on the symptoms described).​
      </Typography>
      <Typography variant="caption" style={{ opacity: 0.6 }}>
        These are indexed, showing those with the strongest association at the
        top of the list. ​
      </Typography>
      <List>
        <p>Source Type:</p>
        {sourceTypes.map(sourceType => (
          <div key={sourceType}>
            <div className="dot" />
            <p>{sourceType}</p>
          </div>
        ))}
      </List>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Source Type</TableCell>
              <TableCell width={'120px'}>Focus of Content </TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Authors</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Relevant passage text</TableCell>
              <TableCell width={'100px'}>Index Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.map(
              ({ sourceType, focus, date, authors, network, text, url }, i) => (
                <TableRow key={i}>
                  <TableCell
                    style={{
                      borderLeft: `solid 2px ${
                        colourArray[sourceTypes.indexOf(sourceType)]
                      }`,
                    }}
                  >
                    {sourceType}
                  </TableCell>
                  <TableCell>{focus}</TableCell>
                  <TableCell>{date}</TableCell>
                  <TableCell>{authors}</TableCell>
                  <TableCell>{network}</TableCell>
                  <TableCell style={{textDecoration: 'underline'}}>
                    <a href={url} target="_blank">
                      {text}
                    </a>
                  </TableCell>
                  <TableCell align={'center'}>0.8</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 0;
  .MuiTableContainer-root {
    overflow: inherit;
    margin: 40px 0;
  }
  .MuiTableRow-root {
    td {
      vertical-align: top;
    }
    td,
    th {
      padding: 5px;
      border: solid 1px #eee;
    }
  }
`

const List = styled.div`
  display: inline-flex;
  float: right;
  & > * {
    padding: 5px;
  }
  & > div {
    display: flex;
    .dot {
      background: ${colourArray[0]};
      height: 12px;
      width: 12px;
      border-radius: 50%;
      margin: 8px 5px 0 9px;
    }
    &:nth-child(3) .dot {
      background: ${colourArray[1]};
    }
    &:nth-child(4) .dot {
      background: ${colourArray[2]};
    }
  }
`
