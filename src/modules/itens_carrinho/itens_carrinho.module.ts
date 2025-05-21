import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItensCarrinho } from './itens_carrinho.entity';
import { ItensCarrinhoService } from './itens_carrinho.service';
import { ItensCarrinhoController } from './itens_carrinho.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ItensCarrinho])],
  controllers: [ItensCarrinhoController],
  providers: [ItensCarrinhoService],
})
export class ItensCarrinhoModule {}