// src/modules/produto/produto.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Endereco } from './endereco.entity';
import { Repository } from 'typeorm';
import { CreateEnderecoDto } from './endereco.dto';

@Injectable()
export class EnderecoService {
  constructor(
    @InjectRepository(Endereco)
    private readonly enderecoRepository: Repository<Endereco>,
  ) {}

  async findAll(): Promise<Endereco[]> {
    return this.enderecoRepository.find();
  }

  async findOne(id: number): Promise<Endereco | null> {
    return this.enderecoRepository.findOneBy({ id });
  }

  async create(createEnderecoDto: CreateEnderecoDto): Promise<CreateEnderecoDto> {
    const produto = this.enderecoRepository.create(createEnderecoDto);
    return this.enderecoRepository.save(produto);
  }

  async update(id: number, data: Partial<Endereco>): Promise<Endereco | null> {
    await this.enderecoRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.enderecoRepository.delete(id);
  }
}
