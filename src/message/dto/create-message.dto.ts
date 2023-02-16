import { ApiProperty } from "@nestjs/swagger/dist/decorators";

export class CreateMessageDto {
  @ApiProperty({ example: "Helen", description: "Name" })
  readonly name: string;
  @ApiProperty({ example: "exam@gmail.com", description: "Email" })
  readonly email: string;
  @ApiProperty({ example: "I want to do you...", description: "message" })
  readonly message: string;
}
