import { MessageService } from "./message.service";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger/dist";
import { Message } from "./message.model";
import { ApiTags } from "@nestjs/swagger/dist/decorators/api-use-tags.decorator";
import { CreateMessageDto } from "./dto/create-message.dto";

@ApiTags("Message")
@Controller("message")
export class MessageController {
  constructor(private MessageService: MessageService) {}

  @ApiOperation({ summary: "Create message" })
  @ApiResponse({ status: 200, type: Message })
  @Post()
  create(@Body() messageDto: CreateMessageDto) {
    return this.MessageService.createMessage(messageDto);
  }

  @ApiOperation({ summary: "Get all message" })
  @ApiResponse({ status: 200, type: [Message] })
  @Get()
  getAll() {
    return this.MessageService.getAllMessage();
  }
}
