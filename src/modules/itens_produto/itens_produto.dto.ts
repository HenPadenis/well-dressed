import { IsString, IsNumber } from 'class-validator';

export class CreateItensProdutoDto {
  @IsNumber()
  pedido_id: number;
  
  @IsNumber()
  produto_id: number;

  @IsNumber()
  quantidade: number;

  @IsNumber()
  preco_unitario: number;

  @IsNumber()
  preco_total: number;
    
}