import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HttpStatusCode } from 'axios';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs'
import { User } from 'src/user/user.model';
@Injectable()
export class AuthService {

  constructor(private userService: UserService, private jwtService: JwtService){}

  async login( userDto: CreateUserDto){
    const user = await this.validateUser(userDto);
    return this.generateToken(user)
  }

  async registration( userDto: CreateUserDto){
    const candidate = await this.userService.getUserByEmail(userDto.email);
    if(candidate){
      throw new UnauthorizedException({message: 'Email already registered'})
    }
    const hashPassword = await bcrypt.hash(userDto.password, 10);
    const user = await this.userService.createUser({...userDto, password: hashPassword});
    return this.generateToken(user)
  }

  private async generateToken(user: User){
    const payload = {email: user.email, id: user.id}
    return {token: this.jwtService.sign(payload)}
  }
  
  private async validateUser (userDto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(userDto.email);
    const  passwordEquals = await bcrypt.compare(userDto.password, user.password);
    if(user && passwordEquals){
      return user;
    }
    throw new UnauthorizedException({message: 'Not correct email or password'})
  }
}
