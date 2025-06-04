import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateEnderecoDto {
  @IsNumber()
  user_id: number;
  
  @IsString()
  nome: string;

  @IsString()
  cep: string;

  @IsString()
  rua: string;

  @IsString()
  numero: string;

  @IsString()
  complemento: string;

  @IsString()
  bairro: string;

  @IsString()
  cidade: string;

  @IsString()
  estado: string;

  @IsString()
  pais: string;

  @IsBoolean()
  is_default: boolean;
    
}