import { HttpStatus } from '@nestjs/common';
import { Injectable, HttpException } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {

  async createFile(file): Promise<string>{
    try{
      const fileName = uuid.v4 + '.jpg';
      const filePatch = path.resolve(__dirname, '..', 'static');
      if(!fs.existsSync(filePatch)){
        fs.mkdirSync(filePatch, {recursive: true})
      }
      fs.writeFileSync(path.join(filePatch, fileName), file.buffer);
      return fileName;
    }catch(e){
      throw new HttpException('File error', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
