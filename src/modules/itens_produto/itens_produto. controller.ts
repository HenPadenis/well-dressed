// src/modules/produto/produto.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ItensProdutoService } from './itens_produto.service';
import { ItensProduto } from './itens_produto.entity';
import { CreateItensProdutoDto } from './itens_produto.dto';

@Controller('itens_produto')
export class ItensProdutoController {
  constructor(private readonly itensProdutoService: ItensProdutoService) {}

  @Get()
  findAll(): Promise<ItensProduto[]> {
    return this.itensProdutoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ItensProduto | null> {
    return this.itensProdutoService.findOne(id);
  }

  @Post()
  create(@Body() createItensProdutoDto: CreateItensProdutoDto): Promise<CreateItensProdutoDto> {
    return this.itensProdutoService.create(createItensProdutoDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<ItensProduto>,
  ): Promise<ItensProduto | null> {
    return this.itensProdutoService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.itensProdutoService.remove(id);
  }
}
