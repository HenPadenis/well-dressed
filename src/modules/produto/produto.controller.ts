// src/modules/produto/produto.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.entity';
import { CreateProdutoDto } from './produto.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Produto | null> {
    return this.produtoService.findOne(id);
  }

  @Post()
  create(@Body() createProdutoDto: CreateProdutoDto): Promise<CreateProdutoDto> {
    return this.produtoService.create(createProdutoDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<Produto>,
  ): Promise<Produto | null> {
    return this.produtoService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.produtoService.remove(id);
  }
}
