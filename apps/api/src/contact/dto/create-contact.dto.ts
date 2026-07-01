import { IsString, IsOptional, IsEmail, MinLength, MaxLength } from 'class-validator'

export class CreateContactDto {
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name: string

  @IsEmail()
  email: string

  @IsString()
  @MinLength(7)
  @MaxLength(20)
  phone: string

  @IsString()
  @MinLength(10)
  @MaxLength(500)
  message: string

  @IsOptional()
  @IsString()
  preferredTime?: string
}
