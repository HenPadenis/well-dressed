// src/modules/produto/produto.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<Users | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async create(data: Partial<Users>): Promise<any> {
    const user = this.usersRepository.create(data);
    let retorno: any;
    retorno = {
      status_code: "teste",
      message: "Usuário criado com sucesso!"
    }
    this.usersRepository.save(user);
    return retorno;
  }

  async update(id: number, data: Partial<Users>): Promise<Users | null> {
    await this.usersRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
