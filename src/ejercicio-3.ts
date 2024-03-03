import * as fs from 'fs';

abstract class FileHandler {
  constructor(protected filePath: string) {
  }
}

class FileReader extends FileHandler {
  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, 'utf-8');
      return content;
    } catch (error) {
      console.error('Error al leer el archivo:', error.message);
      return '';
    }
  }
}

class FileWriter extends FileHandler {
  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, 'utf-8');
      console.log('Archivo escrito exitosamente.');
    } catch (error) {
      console.error('Error al escribir en el archivo:', error.message);
    }
  }
}

const fileReader = new FileReader('example.txt');
const fileWriter = new FileWriter('example.txt');

const currentContent = fileReader.readFile();
console.log('Current content:', currentContent);

const newData = 'This is new to be written into the file.'
fileWriter.writeFile(newData);

const updatedContent = fileReader.readFile();
console.log('Updated content:', updatedContent);