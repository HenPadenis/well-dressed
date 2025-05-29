import { Entity, Column, PrimaryGeneratedColumn, CannotAttachTreeChildrenEntityError } from 'typeorm';

@Entity({ name: 'produto' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
  
  @Column()
  descricao: string;

  @Column()
  price: number;

  @Column()
  quantidade_estoque: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
  created_at: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'})
  updated_at: Date;

}