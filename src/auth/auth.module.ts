import { forwardRef, Module } from "@nestjs/common";
import { UserModule } from "src/user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UserModule),
    JwtModule.register({
      secret: process.env.PRIVET_KEY || "SECRET",
      signOptions: {
        expiresIn: "32d",
      },
    }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
