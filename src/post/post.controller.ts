import { Posts } from "./post.model";

import { ApiResponse } from "@nestjs/swagger/dist";
import { ApiOperation } from "@nestjs/swagger/dist";
import {
  Get, Query,
} from "@nestjs/common";
import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostService } from "./post.service";

@Controller("post")
export class PostController {
  constructor(private postService: PostService) {}
  @ApiOperation({ summary: "create posts" })
  @Post()
  @UseInterceptors(FileInterceptor("file"))
  createPost(@Body() dto: CreatePostDto, @UploadedFile() file) {
    return this.postService.create(dto, file);
  }

  @ApiOperation({ summary: "Sort Name all posts and get all posts" })
  @ApiResponse({ status: 200, type: [Posts] })
  @Get('sort-name')
  sortName(@Query('query') query: string, @Query('page') page: number) {
    return this.postService.sortAllPosts(query, page);
  }
}
