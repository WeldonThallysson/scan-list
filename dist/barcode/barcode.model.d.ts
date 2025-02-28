import { Model } from 'sequelize-typescript';
import { Users } from '../users/users.model';
export declare class Barcode extends Model<Barcode> {
    id: number;
    code: string;
    scannedAt: Date;
    userId: number;
    user: Users;
}
