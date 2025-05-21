// src/modules/produto/produto.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';
import { Carrinho } from './carrinho.entity';

@Controller('carrinho')
export class CarrinhoController {
  constructor(private readonly carrinhoService: CarrinhoService) {}

  @Get()
  findAll(): Promise<Carrinho[]> {
    return this.carrinhoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Carrinho | null> {
    return this.carrinhoService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Carrinho>): Promise<Carrinho> {
    return this.carrinhoService.create(data);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<Carrinho>,
  ): Promise<Carrinho | null> {
    return this.carrinhoService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.carrinhoService.remove(id);
  }
}
