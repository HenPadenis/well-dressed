import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItensProduto } from './itens_produto.entity';
import { ItensProdutoService } from './itens_produto.service';
import { ItensProdutoController } from './itens_produto. controller';

@Module({
  imports: [TypeOrmModule.forFeature([ItensProduto])],
  controllers: [ItensProdutoController],
  providers: [ItensProdutoService],
})
export class ItensProdutoModule {}