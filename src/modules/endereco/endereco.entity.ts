import { Entity, Column, PrimaryGeneratedColumn, CannotAttachTreeChildrenEntityError } from 'typeorm';

@Entity({ name: 'endereco' })
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;
  
  @Column()
  pass_hash: string;

  @Column()
  phone: string;

  @Column()
  cpf_cnpj: string;

  @Column({ type: 'date'})
  birthdate: Date;

  @Column({ type: 'datetime'})
  created_at: Date;

  @Column({ type: 'datetime'})
  updated_at: Date;

  @Column()
  is_admin: boolean;

  @Column()
  status: string;
}