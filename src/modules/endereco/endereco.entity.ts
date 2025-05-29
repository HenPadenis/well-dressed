import { Entity, Column, PrimaryGeneratedColumn, CannotAttachTreeChildrenEntityError } from 'typeorm';

@Entity({ name: 'endereco' })
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;
  
  @Column()
  nome: string;

  @Column()
  cep: string;

  @Column()
  rua: string;

  @Column()
  numero: string;

  @Column()
  complemento: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  pais: string;

  @Column({type: 'boolean', default: true})
  is_default: boolean;
}