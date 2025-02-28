import { Model } from 'sequelize-typescript';
import { Barcode } from 'src/barcode/barcode.model';
export declare class Users extends Model<Users> {
    id: number;
    name: string;
    email: string;
    password: string;
    barcodes: Barcode[];
}
