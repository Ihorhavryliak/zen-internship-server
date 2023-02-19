import { EventsGateway } from "./../events/events.gateway";
import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Posts } from "./Post.model";
import { FilesService } from "../files/files.service";
import * as sanitizeHtml from "sanitize-html";

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Posts) private postRepository: typeof Posts,
    private fileService: FilesService,
    private eventsGateway: EventsGateway
  ) {}

  async create(dto: CreatePostDto, file: any) {
    //sanitizeHtml
    const sanitizedInputValue = sanitizeHtml(dto.message, {
      allowedTags: ["a", "code", "i", "strong", "span"],
      allowedAttributes: {
        a: ["href", "title", "class"],
      },
    });

    const postObj = {
      name: dto.name,
      email: dto.email,
      message: sanitizedInputValue,
      homePage: dto.homePage,
      userId: dto.userId,
      childId: dto.childId,
    };

    const fileName = await this.fileService.createFile(file);
    const post = await this.postRepository.create({
      ...postObj,
      file: fileName,
    });
    this.eventsGateway.sendMessage(post);
    return post;
  }

  async sortAllPosts(query: string, page: number) {
    const limit = 25;
    const offset = page;

    switch (query) {
      case "name":
        return await this.postRepository.findAndCountAll({
          include: { all: true },
          where: { childId: null },
          order: [["name", "DESC"]],
          limit,
          offset,
        });
      case "nameAsc":
        return await this.postRepository.findAndCountAll({
          include: { all: true },
          where: { childId: null },
          order: [["name", "ASC"]],
          limit,
          offset,
        });

      case "email":
        return await this.postRepository.findAndCountAll({
          include: { all: true },
          where: { childId: null },
          order: [["email", "DESC"]],
          limit,
          offset,
        });
      case "emailAsc":
        return await this.postRepository.findAndCountAll({
          include: { all: true },
          where: { childId: null },
          order: [["email", "ASC"]],
          limit,
          offset,
        });

      case "date":
        return await this.postRepository.findAndCountAll({
          include: { all: true },
          where: { childId: null },
          order: [["createdAt", "DESC"]],
          limit,
          offset,
        });
      case "dateAsc":
        return await this.postRepository.findAndCountAll({
          include: { all: true },
          where: { childId: null },
          order: [["createdAt", "ASC"]],
          limit,
          offset,
        });
      default:
        return await this.postRepository.findAndCountAll({
          include: { all: true },
          where: { childId: null },
          order: [["id", "DESC"]],
          limit,
          offset,
        });
    }
  }
}
