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
      <Top>
        <TopLeft>
          <Typography variant="caption" style={{ opacity: 0.6 }}>
            These are indexed, showing those with the strongest association at the
            top of the list. ​
          </Typography>
          <DownloadButton>
            <p>Export to CSV</p>
          </DownloadButton>
        </TopLeft>
        <TopRight>
          <List>
            <p>Source Type:</p>
            {sourceTypes.map(sourceType => (
              <div key={sourceType}>
                <div className="dot" />
                <p>{sourceType}</p>
              </div>
            ))}
          </List>
        </TopRight>
      </Top>
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
              ({ sourceType, focus, date, authors, network, text, url, index , terms}, i) => (
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
                  <TableCell className="description" dangerouslySetInnerHTML={{ __html: getHighlightedText(text, url, terms) }}>
                  </TableCell>
                  <TableCell align={'center'}>{index || 0.8}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

const getHighlightedText = (description: string, url: string, terms: string[] = []) => {
  let result = description;
  terms.forEach((term) => {
    const regex = new RegExp(term,"g");
    result = result.replace(regex, `<span>${term}</span>`)
  })
  return `${result} <a href={url} target="_blank">Continue reading ></a>`;
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
  .description {
    a {
     text-decoration: underline;
    }
    span {
      background: ${colours.blue};
      color: white;
      padding: 0 3px;
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

const DownloadButton = styled.div`
  background: ${colours.peach};
  color: white;
  padding: 0 10px;
  width: fit-content;
  align-self: flex-end;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  p {
    margin: 0;
    padding: 0;
  }
`

const Top = styled.div`
  display: flex;
`;

const TopLeft = styled.div`
  flex: 1;
`;

const TopRight = styled.div`
  flex: 1;
`;
