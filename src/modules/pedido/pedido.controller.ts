// src/modules/produto/produto.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido.entity';

@Controller('pedido')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Get()
  findAll(): Promise<Pedido[]> {
    return this.pedidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Pedido | null> {
    return this.pedidoService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Pedido>): Promise<Pedido> {
    return this.pedidoService.create(data);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<Pedido>,
  ): Promise<Pedido | null> {
    return this.pedidoService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.pedidoService.remove(id);
  }
}
