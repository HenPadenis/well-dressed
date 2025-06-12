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
import { ConfigModule, ConfigService } from '@nestjs/config'; //para o .env
import { AuthModule } from './modules/auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Importe ConfigModule aqui para acessá-lo
      useFactory: (configService: ConfigService) => ({ //atributo do forRootAsync
        type: configService.get<any>('DB_CONNECTION'),
        host: configService.get<string>('DB_HOST'),
        port: parseInt(configService.get<string>('DB_PORT', '3306'), 10),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: false, //NÃO sobrescreve o banco
      autoLoadEntities: true, // carrega automaticamente as entidades dos módulos
      }),
      inject: [ConfigService], // Injete o ConfigService, atributo do forRootAsync
  }),
    AuthModule,
    ProdutoModule,
    ItensProdutoModule,
    ItensCarrinhoModule,
    CarrinhoModule,
    PedidoModule,
    UsersModule,
    EnderecoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
