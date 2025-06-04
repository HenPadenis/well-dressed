// src/modules/produto/produto.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItensProduto } from './itens_produto.entity';
import { Repository } from 'typeorm';
import { CreateItensProdutoDto } from './itens_produto.dto';

@Injectable()
export class ItensProdutoService {
  constructor(
    @InjectRepository(ItensProduto)
    private readonly itensProdutoRepository: Repository<ItensProduto>,
  ) {}

  async findAll(): Promise<ItensProduto[]> {
    return this.itensProdutoRepository.find();
  }

  async findOne(id: number): Promise<ItensProduto | null> {
    return this.itensProdutoRepository.findOneBy({ id });
  }

  async create(createItensProdutoDto: CreateItensProdutoDto): Promise<CreateItensProdutoDto> {
    const produto = this.itensProdutoRepository.create(createItensProdutoDto);
    return this.itensProdutoRepository.save(produto);
  }

  async update(id: number, data: Partial<ItensProduto>): Promise<ItensProduto | null> {
    await this.itensProdutoRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.itensProdutoRepository.delete(id);
  }
}
