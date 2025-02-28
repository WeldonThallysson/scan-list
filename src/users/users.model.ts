import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Barcode } from 'src/barcode/barcode.model';  
import { IUsersAttributes } from 'src/interfaces/interface.users';


@Table({ tableName: 'users', timestamps: true })

export class Users extends Model<Users, IUsersAttributes> {  
   @Column({primaryKey: true, autoIncrement: true, type: DataType.INTEGER})
   id = 0;

  @Column({ allowNull: false, type: DataType.STRING })
  name!: string;

  @Column({ allowNull: false, unique: true, type: DataType.STRING })
  email!: string;

  @Column({ allowNull: false, type: DataType.STRING })
  password!: string;

  @HasMany(() => Barcode)
  barcodes!: Barcode[];
}
