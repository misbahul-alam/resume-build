import { IsString, MinLength } from 'class-validator';
import { LoginDto } from './login.dto';

export class RegisterDto extends LoginDto {
  @IsString()
  name: string;

  @IsString()
  @MinLength(6)
  confirmPassword: string;
}
