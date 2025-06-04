// src/modules/produto/produto.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './pedido.entity';
import { Repository } from 'typeorm';
import { CreatePedidoDto } from './pedido.dto';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
  ) {}

  async findAll(): Promise<Pedido[]> {
    return this.pedidoRepository.find();
  }

  async findOne(id: number): Promise<Pedido | null> {
    return this.pedidoRepository.findOneBy({ id });
  }

  async create(createPedidoDto: CreatePedidoDto): Promise<CreatePedidoDto> {
    const produto = this.pedidoRepository.create(createPedidoDto);
    return this.pedidoRepository.save(produto);
  }

  async update(id: number, data: Partial<Pedido>): Promise<Pedido | null> {
    await this.pedidoRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.pedidoRepository.delete(id);
  }
}
