import { IsString, IsNumber } from 'class-validator';

export class CreatePedidoDto {
      @IsNumber()
      user_id: number;
      
      @IsString()
      status: string;
    
      @IsNumber()
      quantidade_total: number;
    
      @IsString()
      metodo_pagamento: string;
    
      @IsString()
      status_pagamento: string;
    
}