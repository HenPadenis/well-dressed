// src/modules/produto/produto.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from './produto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
  ) {}

  async findAll(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  async findOne(id: number): Promise<Produto | null> {
    return this.produtoRepository.findOneBy({ id });
  }

  async create(data: Partial<Produto>): Promise<Produto> {
    const produto = this.produtoRepository.create(data);
    return this.produtoRepository.save(produto);
  }

  async update(id: number, data: Partial<Produto>): Promise<Produto | null> {
    await this.produtoRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.produtoRepository.delete(id);
  }
}
