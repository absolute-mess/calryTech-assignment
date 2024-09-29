import * as fs from 'fs';
import * as path from 'path';

export class FileManager{

    private static filePath:string= path.join(__dirname, '../../data/data.json')
   
    static readFile(): any[] {
        try{
            const data = fs.readFileSync(this.filePath, 'utf-8');
            return JSON.parse(data);
        } catch (error){
            return []
        }
    }

    static writeFile(data: any[]): void {
        fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2), 'utf-8')
    }
}