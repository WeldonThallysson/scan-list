import { Users } from './users.model';
import { IUsersAttributes } from 'src/interfaces/interface.users';
import { IResponseApi } from 'src/interfaces/interface.response.message';
export declare class UsersService {
    private usersModel;
    constructor(usersModel: typeof Users);
    findAll(): Promise<Users[]>;
    findOne(id: number): Promise<Users | null>;
    create(item: IUsersAttributes): Promise<IResponseApi>;
    update(item: IUsersAttributes): Promise<IResponseApi>;
    remove(id: number): Promise<IResponseApi>;
}
