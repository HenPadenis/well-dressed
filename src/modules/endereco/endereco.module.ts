import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Endereco } from './endereco.entity';
import { EnderecoService } from './endereco.service';
import { EnderecoController } from './endereco.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Endereco])],
  controllers: [EnderecoController],
  providers: [EnderecoService],
})
export class EnderecoModule {}