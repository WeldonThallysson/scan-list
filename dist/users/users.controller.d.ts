import { Users } from './users.model';
import { IResponseApi } from 'src/interfaces/interface.response.message';
import { IUsersAttributes } from 'src/interfaces/interface.users';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(item: Users): Promise<IResponseApi>;
    findAll(): Promise<Users[]>;
    findOne(id: number): Promise<Users | null>;
    update(id: number, item: IUsersAttributes): Promise<IResponseApi>;
    remove(id: number): Promise<IResponseApi>;
}
