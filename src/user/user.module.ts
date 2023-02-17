import { User } from "./user.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { forwardRef, Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { AuthModule } from "src/auth/auth.module";
import { Post } from "src/post/post.model";

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [SequelizeModule.forFeature([User, Post]), 
  forwardRef(() => AuthModule),
],
  exports: [UserService],
})
export class UserModule {}
