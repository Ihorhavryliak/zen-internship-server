import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "exam@gmail.com", description: "Email" })
  @IsString({message: 'Should be string'})
  @IsEmail({},{message: 'Not correct email'})
  readonly email: string;

  @IsString({message: 'Should be string'})
  @Length(4, 32, {message: 'Should be not more 32 symbols and not less 4 symbols'})
  @ApiProperty({ example: "1234", description: "password" })
  readonly password: string;
}
