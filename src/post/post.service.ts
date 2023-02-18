import { EventsGateway } from "./../events/events.gateway";
import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Posts } from "./Post.model";
import { FilesService } from "../files/files.service";

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Posts) private postRepository: typeof Posts,
    private fileService: FilesService,
    private eventsGateway: EventsGateway
  ) {}

  async create(dto: CreatePostDto, file: any) {
    const fileName = await this.fileService.createFile(file);
    const post = await this.postRepository.create({ ...dto, file: fileName });
    this.eventsGateway.sendMessage(post);
    return post;
  }

  async getAllPosts() {
    return await this.postRepository.findAll({
      include: { all: true },
      where: { childId: null },
    });
  }
}
