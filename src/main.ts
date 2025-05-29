import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //Remove atributos que não estão no DTO
    forbidNonWhitelisted: true, //Gera erro se enviar propriedade a mais
    transform: true //Transforma os tipos (string para Date, etc)
  }));
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();

//UPDATE DIA 27/05
//Falta colocar uma DTO e Validation nas outras entidades (pedido, itens_produto, itens_carrinho, endereco e carrinho)
