import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoModule } from './modules/produto/produto.module';
import { ItensProdutoModule } from './modules/itens_produto/itens_produto.module';
import { CarrinhoModule } from './modules/carrinho/carrinho.module';
import { PedidoModule } from './modules/pedido/pedido.module';
import { ItensCarrinhoModule } from './modules/itens_carrinho/itens_carrinho.module';
import { UsersModule } from './modules/users/users.module';
import { EnderecoModule } from './modules/endereco/endereco.module';


@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '515253',
      database: 'well_dressed',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // ⚠️ NÃO sobrescreve seu banco
      autoLoadEntities: true, // Carrega automaticamente as entidades dos módulos
    }),
    ProdutoModule,
    ItensProdutoModule,
    ItensCarrinhoModule,
    CarrinhoModule,
    PedidoModule,
    UsersModule,
    EnderecoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
