import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Users } from '../users/users.model';
import { IBarcodeAttributes } from 'src/interfaces/interface.barcode';

@Table({ tableName: 'barcodes', timestamps: true })
export class Barcode extends Model<Barcode, IBarcodeAttributes> {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id = 0;

  @Column({ allowNull: false, type: DataType.STRING })
  code!: string;

  @Column({allowNull: true, type: DataType.STRING })
  description?: string | null

  @Column({ allowNull: false, type: DataType.STRING })
  scannedDate: string 

  @Column({ allowNull: false, type: DataType.DATE })
  scannedAt!: Date;  

  @ForeignKey(() => Users)
  @Column({ allowNull: false, type: DataType.INTEGER })
  userId!: number;

  @BelongsTo(() => Users)
  user!: Users;
}
