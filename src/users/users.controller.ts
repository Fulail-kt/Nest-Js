import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userService:UsersService){ }

   @Get()
   findAll(@Query("role") role?:'user'|"admin"){
    return this.userService.findAll(role)
   }


   @Get(':id')
   findOne(@Param('id') id:string){
    return this.userService.findOne(id)
   }

   @Post()
   create(@Body() user:{ name: string; password: "string"; email: "string"; role: "string"; }){
    return this.userService.create(user)
   }

   @Patch(':id')
   update(@Param('id') id:string,@Body() userUpdate:{ name?: string; email?: string; role?: string; }) {
    return this.userService.updateUser(userUpdate,id)
   }

   @Delete(':id')
   deleteOne(@Param('id') id:string){
    return this.userService.deleteUser(id)
   }
}
