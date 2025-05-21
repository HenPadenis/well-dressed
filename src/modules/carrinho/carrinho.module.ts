import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrinho } from './carrinho.entity';
import { CarrinhoService } from './carrinho.service';
import { CarrinhoController } from './carrinho.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Carrinho])],
  controllers: [CarrinhoController],
  providers: [CarrinhoService],
})
export class CarrinhoModule {}