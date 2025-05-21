// src/modules/produto/produto.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Carrinho } from './carrinho.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarrinhoService {
  constructor(
    @InjectRepository(Carrinho)
    private readonly carrinhoRepository: Repository<Carrinho>,
  ) {}

  async findAll(): Promise<Carrinho[]> {
    return this.carrinhoRepository.find();
  }

  async findOne(id: number): Promise<Carrinho | null> {
    return this.carrinhoRepository.findOneBy({ id });
  }

  async create(data: Partial<Carrinho>): Promise<Carrinho> {
    const produto = this.carrinhoRepository.create(data);
    return this.carrinhoRepository.save(produto);
  }

  async update(id: number, data: Partial<Carrinho>): Promise<Carrinho | null> {
    await this.carrinhoRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.carrinhoRepository.delete(id);
  }
}
