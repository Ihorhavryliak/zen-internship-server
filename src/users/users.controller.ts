import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger/dist";
import { User } from "./user.model";
import { ApiTags } from "@nestjs/swagger/dist/decorators/api-use-tags.decorator";

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private UsersService: UsersService) {}
  @ApiOperation({ summary: "Create user" })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.UsersService.createUser(userDto);
  }

  @ApiOperation({ summary: "Get all users" })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getAll() {
    return this.UsersService.getAllUsers();
  }
}
