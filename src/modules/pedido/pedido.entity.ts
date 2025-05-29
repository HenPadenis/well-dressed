import { Entity, Column, PrimaryGeneratedColumn, CannotAttachTreeChildrenEntityError } from 'typeorm';

@Entity({ name: 'pedido' })
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;
  
  @Column()
  status: string;

  @Column()
  quantidade_total: number;

  @Column()
  metodo_pagamento: string;

  @Column()
  status_pagamento: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
  created_at: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'})
  updated_at: Date;

}