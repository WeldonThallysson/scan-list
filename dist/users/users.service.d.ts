import { Users } from './users.model';
export declare class UsersService {
    private usersModel;
    constructor(usersModel: typeof Users);
    create(createUser: any): Promise<void>;
}
