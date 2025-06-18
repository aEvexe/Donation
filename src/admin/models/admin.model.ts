import { Column, DataType, Model } from "sequelize-typescript";
import { Table } from 'sequelize-typescript'

interface IAdminCreationAttr{
    full_name: string;
    email: string;
    role: string;
    password_hash: string;
    is_active: boolean;
}

@Table({ tableName: "admin", timestamps: true})
export class Admin extends Model<Admin, IAdminCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    declare full_name: string;

    @Column({
        type: DataType.STRING,

    })
    declare email: string;

    @Column({
        type: DataType.STRING,

    })
    declare role: string;

    @Column({
        type: DataType.STRING,

    })
    declare password_hash: string;


    @Column({
        type: DataType.BOOLEAN,

    })
    declare is_active: Boolean;
}