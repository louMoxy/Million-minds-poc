// @ts-ignore
import data from './data.json'
// @ts-ignore
import reports from './reportData.json'

export class dataSource {
  static getAllSymptom(): {
    symptomName: string
    symptom: string
    id: number
  }[] {
    return data.map(({ symptomName, symptom, id }: Data) => ({
      symptomName,
      symptom,
      id,
    }))
  }

  static getHighlightedTerms(id: number): string {
    const selectedData = data.find((d: Data) => d.id === id);
    let result = selectedData.symptom;
    selectedData.terms.forEach((term) => {
      result = result.replace(term, `<span>${term}</span>`)
    })
    return result;
  }

  static getSearchQuery(id: number): string {
    return data.find((d: Data) => d.id === id).terms.join(' AND/OR ')
  }

  static getReports(id: number): ReportData[] {
    const {symptomName} = data.find((d: Data) => d.id === id);
    return reports.filter(({focus}) => cleanString(focus) === cleanString(symptomName))
  }
}

const cleanString = (str: string) => {
  return str.toLowerCase().trim();
}

interface Data {
  id: number
  symptom: string
  symptomName: string
  terms: string[]
}

export interface ReportData {
  sourceType: string
  focus: string
  date: string
  authors: string
  network?: string
  text: string
  url: string
  score: number
}
