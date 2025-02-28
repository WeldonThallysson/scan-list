import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users} from './users.model';
import * as bcrypt from 'bcrypt'
import { ValidationUtils } from 'src/utils/validations.utils';
import { IUsersAttributes } from 'src/interfaces/interface.users';
import { IResponseApi } from 'src/interfaces/interface.response.message';
 
@Injectable()
export class UsersService {
   constructor(
    @InjectModel(Users) private usersModel: typeof Users,
   ){}

   async findAll(): Promise<Users[]> {
    return this.usersModel.findAll()
   }

   async findOne(id: number): Promise<Users | null> {
    return this.usersModel.findByPk(id)
   }

   async create(item: IUsersAttributes): Promise<IResponseApi>{
       if((!item.email || !item.password || !item.name)){
        throw new BadRequestException('Preencha os campos obrigatórios nome, e-mail e senha.');
       }

       if (!ValidationUtils.isValidEmail(item.email)) {
        throw new BadRequestException('Email inválido');
      }
  
      if (!ValidationUtils.isValidPassword(item.password)) {
        throw new BadRequestException('Senha deve ter pelo menos 8 caracteres.');
      }
       
       const hashedPassword = await bcrypt.hash(item.password, 10)
    
        await this.usersModel.create({
        name: item.name,
        email: item.email,
        password: hashedPassword
       })

       return {
         message: "Cadastro realizado com sucesso"
       }
    }

    async update(item: IUsersAttributes):  Promise<IResponseApi>{
        if(item.id){
            throw new BadRequestException("Não")
        }
        const user = item.id && await this.findOne(item.id);
    
        if (!ValidationUtils.isValidEmail(item.email)) {
            throw new BadRequestException('Email inválido');
          }
      
          if (!ValidationUtils.isValidPassword(item.password)) {
            throw new BadRequestException('Senha deve ter pelo menos 8 caracteres');
          }

          if (user) {
            user.name = item.name;
            user.email = item.email;
            if (item.password) {
              user.password = await bcrypt.hash(item.password, 10);
            }
            await user.save();
          }

          return {
             message: 'Usuário atualizado com sucesso'
          };

    }

    async remove(id: number): Promise<IResponseApi> {
        const user = await this.findOne(id)

        if(user){
            await user.destroy()
        }

        return {
            message: "Usuário deletado com sucesso"
        }
    }




}
