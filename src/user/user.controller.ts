import { ValidationPipe } from "./../pipes/validation.pipe";
import { UserService } from "./user.service";
import { Body, Controller, Get, Post, Query, UseGuards, UsePipes } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger/dist";
import { User } from "./user.model";
import { ApiTags } from "@nestjs/swagger/dist/decorators/api-use-tags.decorator";
import { CreateUserDto } from "./dto/create-user.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@ApiTags("User")
@Controller("user")
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
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.UserService.getAllUsers();
  }

  @ApiOperation({ summary: "Get a user" })
  @ApiResponse({ status: 200, type: [User] })
  @UseGuards(JwtAuthGuard)
  @Get('/id')
  getUserId(@Query("id") id: number) {
    return this.UserService.getUserId(id);
  }
}
