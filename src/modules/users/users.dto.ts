import { IsString, IsBoolean, IsDateString, IsOptional } from 'class-validator';

export class CreateUserDto {
      @IsString()
      username: string;
      
      @IsString()
      pass_hash: string;
    
      @IsString()
      phone: string;
    
      @IsString()
      cpf_cnpj: string;
    
      @IsDateString()
      birthdate: Date;
    
      @IsBoolean()
      is_admin: boolean;
    
      @IsString()
      status: string;
}