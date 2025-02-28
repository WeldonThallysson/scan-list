import { Model } from 'sequelize-typescript';
import { Barcode } from 'src/barcode/barcode.model';
import { IUsersAttributes } from 'src/interfaces/interface.users';
export declare class Users extends Model<Users, IUsersAttributes> {
    id: number;
    name: string;
    email: string;
    password: string;
    barcodes: Barcode[];
}
