import { ApiProperty } from "@nestjs/swagger/dist/decorators";

export class CreateUserDto {
  @ApiProperty({ example: "exam@gmail.com", description: "Email" })
  readonly email: string;
  @ApiProperty({ example: "1234", description: "Password" })
  readonly password: string;
}
