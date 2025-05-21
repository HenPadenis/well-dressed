// src/modules/produto/produto.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ItensCarrinhoService } from './itens_carrinho.service';
import { ItensCarrinho } from './itens_carrinho.entity';

@Controller('itens_carrinho')
export class ItensCarrinhoController {
  constructor(private readonly itensCarrinhoService: ItensCarrinhoService) {}

  @Get()
  findAll(): Promise<ItensCarrinho[]> {
    return this.itensCarrinhoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ItensCarrinho | null> {
    return this.itensCarrinhoService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<ItensCarrinho>): Promise<ItensCarrinho> {
    return this.itensCarrinhoService.create(data);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<ItensCarrinho>,
  ): Promise<ItensCarrinho | null> {
    return this.itensCarrinhoService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.itensCarrinhoService.remove(id);
  }
}
