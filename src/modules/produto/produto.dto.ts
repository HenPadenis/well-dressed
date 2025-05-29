import { IsString, IsNumber } from 'class-validator';

export class CreateProdutoDto {
      @IsString()
      nome: string;
      
      @IsString()
      descricao: string;
    
      @IsNumber()
      price: number;
    
      @IsNumber()
      quantidade_estoque: number;
    
}