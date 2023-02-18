import { EventsModule } from './../events/events.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { PostController } from './post.controller';

import { User } from 'src/user/user.model';
import { Posts } from './post.model';
import { FilesModule } from 'src/files/files.module';
import { PostService } from './post.service';

@Module({
  providers: [PostService],
  controllers: [PostController],
  imports: [
    SequelizeModule.forFeature([User, Posts]),
    FilesModule,
    EventsModule
  ]
})
export class PostModule {}


