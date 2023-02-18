import { ValidationPipe } from './../pipes/validation.pipe';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { UserService } from "./user.service";
import { Body, Controller, Get, Post, UseGuards, UsePipes } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger/dist";
import { User } from "./user.model";
import { ApiTags } from "@nestjs/swagger/dist/decorators/api-use-tags.decorator";
import { CreateUserDto } from "./dto/create-user.dto";

@ApiTags("User")
@Controller("users")
export class UserController {
  constructor(private UserService: UserService) {}
  @ApiOperation({ summary: "Create user" })
  @ApiResponse({ status: 200, type: User })
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.UserService.createUser(userDto);
  }
  @ApiOperation({ summary: "Get all users" })
  @ApiResponse({ status: 200, type: [User] })
/*   @UseGuards(JwtAuthGuard) */
  @Get()
  getAll() {
    return this.UserService.getAllUsers();
  }
}
