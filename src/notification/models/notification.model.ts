import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model } from "sequelize-typescript";
import { Table } from 'sequelize-typescript'
import { User } from "src/user/models/user.models";

interface INotificationCreationAttr{
    userId: number
    message: string
}

@Table({ tableName: "user", timestamps: true})
export class Notification extends Model<Notification, INotificationCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number

    @ForeignKey(()=>User)
    @Column({type: DataType.INTEGER})
    declare userId: number

    @BelongsTo(()=>User)
    user: User

    @Column({
        type: DataType.STRING,

    })
    declare message: string;

}