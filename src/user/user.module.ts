import { User } from "./user.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { forwardRef, Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { AuthModule } from "src/auth/auth.module";
import { Posts } from "src/post/post.model";

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [
    SequelizeModule.forFeature([User, Posts]),
    forwardRef(() => AuthModule),
  ],
  exports: [UserService],
})
export class UserModule {}
