import { Entity, Column, PrimaryGeneratedColumn, CannotAttachTreeChildrenEntityError } from 'typeorm';

@Entity({ name: 'users' })
export class Users {
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

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
  created_at: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'})
  updated_at: Date;

  @Column( {type: 'boolean', default: false} )
  is_admin: boolean;

  @Column()
  status: string;
}