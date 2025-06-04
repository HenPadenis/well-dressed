// src/modules/produto/produto.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItensCarrinho } from './itens_carrinho.entity';
import { Repository } from 'typeorm';
import { CreateItensCarrinhoDto } from './itens_carrinho.dto';

@Injectable()
export class ItensCarrinhoService {
  constructor(
    @InjectRepository(ItensCarrinho)
    private readonly itensCarrinhoRepository: Repository<ItensCarrinho>,
  ) {}

  async findAll(): Promise<ItensCarrinho[]> {
    return this.itensCarrinhoRepository.find();
  }

  async findOne(id: number): Promise<ItensCarrinho | null> {
    return this.itensCarrinhoRepository.findOneBy({ id });
  }

  async create(createItensCarrinhoDto: CreateItensCarrinhoDto): Promise<CreateItensCarrinhoDto> {
    const produto = this.itensCarrinhoRepository.create(createItensCarrinhoDto);
    return this.itensCarrinhoRepository.save(produto);
  }

  async update(id: number, data: Partial<ItensCarrinho>): Promise<ItensCarrinho | null> {
    await this.itensCarrinhoRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.itensCarrinhoRepository.delete(id);
  }
}
