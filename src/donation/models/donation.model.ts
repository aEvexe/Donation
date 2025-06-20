import { Column, DataType, ForeignKey, HasMany, Model } from "sequelize-typescript";
import { Table } from 'sequelize-typescript'
import { Notification } from "src/notification/models/notification.model";
import { User } from "src/user/models/user.models";

interface IDonationCreationAttr{
    supporterId: number;
    creatorId: number;
    amount: number;
    message: string;
    payment_method: string;
    is_anonumis: boolean;
}

@Table({ tableName: "user", timestamps: true})
export class Donation extends Model<Donation, IDonationCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number

    @ForeignKey(()=>User)
    @Column({type: DataType.INTEGER})
    declare supporterId: number

    @ForeignKey(()=>User)
    @Column({type: DataType.INTEGER})
    declare creatorId: number

    @Column({
        type: DataType.INTEGER,
    })
    declare amount: number;

    @Column({
        type: DataType.STRING,

    })
    declare message: string;

    @Column({
        type: DataType.STRING,

    })
    declare payment_method: string;

    @Column({
        type: DataType.BOOLEAN,

    })
    declare is_anonumis: boolean;
}
