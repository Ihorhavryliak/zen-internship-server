import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "src/user/user.model";
interface PostCreatorsAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({ tableName: "posts" })
export class Post extends Model<Post, PostCreatorsAttrs> {
  @ApiProperty({ example: "1", description: "Uniq indemnificator" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Helen", description: "Name" })
  @Column({ type: DataType.STRING, allowNull: true })
  title: string;

  @ApiProperty({ example: "exam@gmail.com", description: "Email" })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @ApiProperty({ example: "1234", description: "Password" })
  @Column({ type: DataType.STRING, allowNull: false })
  image: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
