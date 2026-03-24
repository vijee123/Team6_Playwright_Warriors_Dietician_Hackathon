import XLSX from 'xlsx';
import path from 'path';

export default class ExcelUtil {

    static filePath = path.resolve('testData/testData.xlsx');
    static uniqueColumn = 'ScenarioName'; 

    static getRow(sheetName, scenarioName) {
        const workbook = XLSX.readFile(this.filePath);
        const sheet = workbook.Sheets[sheetName];

        if (!sheet) {
            throw new Error(`Sheet "${sheetName}" not found`);
        }

        const data = XLSX.utils.sheet_to_json(sheet);

        const row = data.find(r => r[this.uniqueColumn] === scenarioName);

        if (!row) {
            throw new Error(`No row found with ${this.uniqueColumn} = ${scenarioName}`);
        }

        return row;
    }
}

