import { Entity, Column, PrimaryGeneratedColumn, CannotAttachTreeChildrenEntityError } from 'typeorm';

@Entity({ name: 'carrinho' })
export class Carrinho {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;
  
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
  created_at: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'})
  updated_at: Date;
}