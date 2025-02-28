import { Model } from 'sequelize-typescript';
import { Users } from '../users/users.model';
import { IBarcodeAttributes } from 'src/interfaces/interface.barcode';
export declare class Barcode extends Model<Barcode, IBarcodeAttributes> {
    id: number;
    code: string;
    description?: string | null;
    scannedDate: string;
    scannedAt: Date;
    userId: number;
    user: Users;
}
