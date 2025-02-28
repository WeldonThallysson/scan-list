import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Users } from './users.model';
import { IResponseApi } from 'src/interfaces/interface.response.message';
import { IUsersAttributes } from 'src/interfaces/interface.users';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/guard/jwt.guard';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService ){}
    
    @Post()
    async create(@Body() item: Users): Promise<IResponseApi> {
        return this.usersService.create(item);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(): Promise<Users[]> {
        return this.usersService.findAll();
    }
    @UseGuards(JwtAuthGuard)
    @Get(":id")
    async findOne(@Param("id") id: number): Promise<Users | null> {
        return this.usersService.findOne(id) 
    }

    @UseGuards(JwtAuthGuard)
    @Put(":id")
    async update(@Param('id') id: number, @Body() item: IUsersAttributes ): Promise<IResponseApi> {
         const data = {
            id,
            ...item
         }
        return this.usersService.update(data)
    }
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: number): Promise<IResponseApi> {
        return this.usersService.remove(id)
    }
}
