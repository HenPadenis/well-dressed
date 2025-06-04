import { IsString, IsNumber } from 'class-validator';

export class CreateItensCarrinhoDto {
  @IsNumber()
  carrinho_id: number;
  
  @IsNumber()
  produto_id: number;

  @IsNumber()
  quantidade: number;

  @IsNumber()
  preco_unitario: number;
    
}