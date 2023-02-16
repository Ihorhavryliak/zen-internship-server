import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateMessageDto } from "./dto/create-message.dto";
import { Message } from "./message.model";

@Injectable()
export class MessageService {
  constructor(@InjectModel(Message) private userRepository: typeof Message) {}
  async createMessage(dto: CreateMessageDto) {
    const user = await this.userRepository.create(dto);
    return user;
  }
  async getAllMessage() {
    return await this.userRepository.findAll();
  }
}
