import { CreateUserDto } from '#common/dto/create-user.dto';
import { IsOptional } from 'class-validator';

export class SecondStepData extends CreateUserDto {
  @IsOptional()
  username;

  @IsOptional()
  password;

  @IsOptional()
  email;
}