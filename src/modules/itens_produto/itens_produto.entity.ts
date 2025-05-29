import { Entity, Column, PrimaryGeneratedColumn, CannotAttachTreeChildrenEntityError } from 'typeorm';

@Entity({ name: 'itens_produto' })
export class ItensProduto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pedido_id: number;
  
  @Column()
  produto_id: number;

  @Column()
  quantidade: number;

  @Column()
  preco_unitario: number;

  @Column()
  preco_total: number;
}