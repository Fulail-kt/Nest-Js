import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

     private users = [
        {
            id: "1",
            name: 'fulail',
            password: 'fulail123',
            role:'admin',
            email:''
        },
        {
            id: "2",
            name: 'abhi',
            password: 'abhi123',
            role:'user',
            email:''
        }
    ]

    findAll(role?: 'user' | 'admin') {
        if (role) {
            const usersWithRole = this.users.filter((item) => item.role === role);
            return usersWithRole.length > 0 ? usersWithRole : "missing";
          }
        return this.users;
    }

    findOne(id:string){
        if(id){
            const user=this.users.filter((item)=>item.id==id)
            return user
        }
    }

    create(user:{name:string,password:'string',email:'string',role:'string'}){ 
        const lastID=this.users.sort((a:any,b:any)=>b.id-a.id)
        const newUser={
            id:(parseInt(lastID[0].id)+1).toString(),
            role: user.role || 'user',
            ...user
        }
        this.users.push(newUser)
        return newUser
    }

    updateUser(updateData:{name?:string,email?:string,role?:string},id:string){
        if(id){
            const userIndex=this.users.findIndex((item)=>item.id==id)
            if(userIndex!=-1){

            this.users[userIndex]={...this.users[userIndex],...updateData}
            }
            return this.users[userIndex]
        }
    }

    deleteUser(id:string){
        try {
            if(id){
               const removeUser= this.findOne(id)
               this.users=this.users.filter((user)=>user.id!=id)
               return removeUser
            }
        } catch (error) {
            throw error
        }
    }
}
