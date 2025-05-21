// src/modules/produto/produto.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { Endereco } from './endereco.entity';

@Controller('endereco')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) {}

  @Get()
  findAll(): Promise<Endereco[]> {
    return this.enderecoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Endereco | null> {
    return this.enderecoService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Endereco>): Promise<Endereco> {
    return this.enderecoService.create(data);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<Endereco>,
  ): Promise<Endereco | null> {
    return this.enderecoService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.enderecoService.remove(id);
  }
}
