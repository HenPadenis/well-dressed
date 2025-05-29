import { Entity, Column, PrimaryGeneratedColumn, CannotAttachTreeChildrenEntityError } from 'typeorm';

@Entity({ name: 'itens_carrinho' })
export class ItensCarrinho {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  carrinho_id: number;
  
  @Column()
  produto_id: number;

  @Column()
  quantidade: number;

  @Column()
  preco_unitario: number;

}