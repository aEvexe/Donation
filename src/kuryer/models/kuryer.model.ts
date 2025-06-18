import { Column, DataType, Model } from "sequelize-typescript";
import { Table } from 'sequelize-typescript'

interface IKuryerCreationAttr{
    full_name: string;
    phone_number: string;
    vehicle_type: string;
    vehicle_plate_number: string;
    is_active: boolean;
}

@Table({ tableName: "kuryer", timestamps: true})
export class Kuryer extends Model<Kuryer, IKuryerCreationAttr>{
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
    declare phone_number: string;

    @Column({
        type: DataType.STRING,

    })
    declare vehicle_type: string;

    @Column({
        type: DataType.STRING,

    })
    declare vehicle_plate_number: string;


    @Column({
        type: DataType.BOOLEAN,

    })
    declare is_active: Boolean;
}