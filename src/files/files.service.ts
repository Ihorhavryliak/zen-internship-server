import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as path from "path";
import * as fs from "fs";
import * as uuid from "uuid";
const sharp = require("sharp");

@Injectable()
export class FilesService {
  async createFile(file): Promise<string> {
    //check is file
    if (!file) {
      return "";
    }
    //check
    if (
      !".jpg.jpeg.png.gif.txt.plain".includes(
        file.originalname.slice(file.originalname.lastIndexOf("."))
      )
    ) {
      throw new HttpException(
        "File should  be 'jpg/jpeg/png/gif/txt/plain' ",
        HttpStatus.FORBIDDEN
      );
    }
    //check is file txt
    if (
      file.originalname.slice(file.originalname.lastIndexOf(".")) === ".txt" &&
      file.size > 102400
    ) {
      throw new HttpException(
        "The file should have size of less than 100 KB",
        HttpStatus.FORBIDDEN
      );
    }

    try {
      //clean cache
      sharp.cache({ files: 0 });
      const fileName =
        uuid.v4() + file.originalname.slice(file.originalname.lastIndexOf("."));
      const filePath = path.resolve(__dirname, "..", "static");
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }

      const isFileTxt =
        file.originalname.slice(file.originalname.lastIndexOf(".")) !== ".txt";

      let metadata = { width: 0, height: 0 };
      if (isFileTxt) {
        const image = await sharp(file.buffer);
        metadata = await image.metadata();
      }
      // save image
      if (isFileTxt && (metadata.width > 320 || metadata.height > 240)) {
        await sharp(file.buffer)
          .resize(320, 240)
          .webp({ effort: 3 })
          .toFile(filePath + "/" + fileName);
      } else {
        fs.writeFileSync(path.join(filePath, fileName), file.buffer);
      }
      return fileName;
    } catch (e) {
      console.log(e);
      throw new HttpException("Error", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
