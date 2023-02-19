import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Posts } from "src/post/post.model";
interface UserCreatorsAttrs {
  name: string;
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreatorsAttrs> {
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

  @ApiProperty({ example: "1234", description: "Password" })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @HasMany(() => Posts)
  posts: Posts[];
}
