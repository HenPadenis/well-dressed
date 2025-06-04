import { IsNumber } from 'class-validator';

export class CreateCarrinhoDto {
  @IsNumber()
  user_id: number;
    
}