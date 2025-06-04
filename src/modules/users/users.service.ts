// src/modules/produto/produto.service.ts
import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './users.dto';
import * as bcrypt from 'bcrypt';
import { UserResponseDto } from './users.response-dto';

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

  async create(createUserDto: CreateUserDto): Promise<any> {
    const saltRounds = 10; //valor que equilibra o desempenho do hashing com a segurança. valor mais baixo menos seguro e mais rápido, valor mais alto mais seguro e mais lento.

    //faz o hash da senha antes de criar o usuário
    const hashedPassword = await bcrypt.hash(createUserDto.pass, saltRounds);

    //cria o objeto que será inserido no banco
    const user = this.usersRepository.create({
      ...createUserDto, //pega todos os atributos da entidade, incluindo o pass_hash
      pass: hashedPassword, //sobreescreve o valor de pass_hash com a senha hash agora
    });

    try{
      const savedUser = await this.usersRepository.save(user); //espera o retorno para usar posteriormente
       //remove o hash antes de devolver
      const { pass, ...userWithoutPassword } = savedUser;
      return userWithoutPassword;
    } catch(error){
      if(error.code === 'ER_DUP_ENTRY'){ //caso tente inserir um email já cadastrado retorna erro
        throw new ConflictException('Email já está em uso.'); //retorna statuscode 409 Conflict com mensagem de erro
      }
      else{
        throw new InternalServerErrorException();
      }
    }
    
  }

  async update(id: number, data: Partial<Users>): Promise<Users | null> {
    await this.usersRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

}
