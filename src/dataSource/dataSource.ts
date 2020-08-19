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
      const regex = new RegExp(term,"g");
      result = result.replace(regex, `<span>${term}</span>`)
    })
    return result;
  }

  static getSearchQuery(id: number): string {
    return data.find((d: Data) => d.id === id).terms.join(' AND/OR ')
  }

  static getReports(id: number): ReportData[] {
    const {symptomName} = data.find((d: Data) => d.id === id);
    return reports.filter(({focus}) => focus === symptomName).sort((a: ReportData, b: ReportData) => (b.index || 0.8) - (a.index || 0.8))
  }
}

interface Data {
  id: number
  symptom: string
  symptomName: string
  terms: string[]
}

interface ReportData {
  sourceType: string
  focus: string
  date: string
  authors: string
  network?: string
  text: string
  url: string
  score: number
  index?: number
  terms?: string[]
}
