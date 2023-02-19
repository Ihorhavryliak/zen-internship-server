import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreatePostDto {
  @ApiProperty({ example: "Ben", description: "name" })
  @IsString({ message: "Should be string" })
  readonly name: string;
  @ApiProperty({ example: "exam@gmail.com", description: "Email" })
  @IsString({ message: "Should be string" })
  @IsEmail({}, { message: "Not correct email" })
  readonly email: string;
  @ApiProperty({ example: "Hello word!", description: "message" })
  @IsString({ message: "Should be string" })
  readonly message: string;
  @ApiProperty({
    example: "https://example.com",
    description: "homePage - url",
  })
  @IsString({ message: "Should be string" })
  readonly homePage: string;
  @ApiProperty({ example: "34", description: "userId - force on user id" })
  @IsNumber({}, { message: "Should be number" })
  readonly userId: number| null;
  @ApiProperty({
    example: "34",
    description: "childId  - force on main post id",
  })
  @IsNumber({}, { message: "Should be number" })
  readonly childId: number | null;
}
