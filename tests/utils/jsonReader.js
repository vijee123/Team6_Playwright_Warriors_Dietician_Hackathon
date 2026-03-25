import fs from 'fs';
import path from 'path';

export default class JsonUtil {

      static getData(filePath, scenarioName) {
        const fullPath = path.resolve(filePath);

        const rawData = fs.readFileSync(fullPath, 'utf-8');
        const jsonData = JSON.parse(rawData);

        if (!Array.isArray(jsonData)) {
            throw new Error('JSON should be an array');
        }

        const row = jsonData.find(
            r => r.ScenarioName === scenarioName
        );

        if (!row) {
            throw new Error(`No data found for ScenarioName = ${scenarioName}`);
        }

        return row;
    }
}


