import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "src/user/user.model";
interface PostCreatorsAttrs {
  name: string;
  email: string;
  message: string;
  homePage: string;
  userId: number;
  file: string;
}

@Table({ tableName: "post" })
export class Posts extends Model<Posts, PostCreatorsAttrs> {
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
  name: string;

  @ApiProperty({ example: "exam@gmail.com", description: "Email" })
  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @ApiProperty({ example: "Hello word!", description: "message" })
  @Column({ type: DataType.STRING, allowNull: false })
  message: string;

  @ApiProperty({
    example: "https://example.com",
    description: "homePage - url",
  })
  @Column({ type: DataType.STRING, allowNull: true })
  homePage: string;

  
  @ApiProperty({ example: "name.png", description: "file - File should  be 'jpg/jpeg/png/gif/txt/plain'" })
  @Column({ type: DataType.STRING })
  file: string;

  @ApiProperty({ example: "34", description: "userId - force on user id" })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;

  @ApiProperty({
    example: "null",
    description: "childId  - force on main post id",
  })
  @ForeignKey(() => Posts)
  @Column({ type: DataType.INTEGER })
  childId: number;

  @HasMany(() => Posts)
  child: Posts[];
}
