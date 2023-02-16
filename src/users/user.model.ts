import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
interface UserCreatorsAttrs {
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

  @ApiProperty({ example: "exam@gmail.com", description: "Email" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: "1234", description: "Password" })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: "true", description: "Is banned" })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({
    example: "For a lot of messages",
    description: "Reason block",
  })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;
}
