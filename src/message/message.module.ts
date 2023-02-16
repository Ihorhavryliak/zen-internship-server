import { Message } from "./message.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { Module } from "@nestjs/common";
import { MessageController } from "./message.controller";
import { MessageService } from "./message.service";

@Module({
  controllers: [MessageController],
  providers: [MessageService],
  imports: [SequelizeModule.forFeature([Message])],
})
export class MessageModule {}
