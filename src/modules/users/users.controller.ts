// src/modules/produto/produto.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Users | null> {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Users>): Promise<Users> {
    return this.usersService.create(data);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<Users>,
  ): Promise<Users | null> {
    return this.usersService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.usersService.remove(id);
  }
}
