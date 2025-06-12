
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    ConfigModule,
    JwtModule.registerAsync({
        useFactory: async (configService: ConfigService) => ({ //usando o ConfigService do NEST pra pegar a secret e o expiresin do .env
            global: true,
            secret: configService.get<string>('JWT_SECRET'),
            signOptions: { 
                expiresIn: configService.get<string>('JWT_EXPIRES_IN'),
             },
        }),
        inject: [ConfigService],
    }),
],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [JwtModule, AuthService]
})
export class AuthModule {}
