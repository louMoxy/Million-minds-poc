// @ts-ignore
import data from './data.json'
// @ts-ignore
import reports from './reportData.json';

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

  static getHighlightedTerms(id: number): string[] {
    return data.find((d: Data) => d.id === id).terms;
  }

  static getSearchQuery(id: number): string {
    return data.find((d: Data) => d.id === id).terms.join(' AND/OR ');
  }

  static getReports(id: number): ReportData[] {
    const reportIds = data.find((d: Data) => d.id === id).reportIds;
    return reports.filter((report) => reportIds.includes(report.id));
  }
}


interface Data {
  id: number;
  symptom: string;
  symptomName: string;
  terms: string[];
  reportIds: number[];
}

interface ReportData {
  id: number;
  sourceType: string;
  focus: string;
  description: string;
  date: string;
  authors: string;
  network: string;
  text: string[];
  url: string;
  score: number;
}
