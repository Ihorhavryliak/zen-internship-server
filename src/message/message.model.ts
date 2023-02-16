import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import {
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
interface UserCreatorsAttrs {
  name: string;
  email: string;
  message: string;
}

@Table({ tableName: "messages" })
export class Message extends Model<Message, UserCreatorsAttrs> {
  @ApiProperty({ example: "1", description: "Uniq indemnificator" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Helen", description: "Name" })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ example: "exam@gmail.com", description: "Email" })
  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @ApiProperty({ example: "I want to do you...", description: "Message" })
  @Column({ type: DataType.STRING, defaultValue: false })
  message: string;
}
