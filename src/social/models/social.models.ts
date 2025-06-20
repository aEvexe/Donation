import { BelongsToMany, Column, DataType, Model } from "sequelize-typescript";
import { Table } from 'sequelize-typescript'
import { CreateSocial } from "src/create-social/models/create-social.model";
import { User } from "src/user/models/user.models";

interface ISocialCreationAttr{
    name: string;
    socail_icon: string;
}

@Table({ tableName: "social", timestamps: true})
export class Social extends Model<Social, ISocialCreationAttr>{
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
    declare name: string;

    @Column({
        type: DataType.STRING(15),

    })
    declare social_icon: string;

    @BelongsToMany(()=>User, ()=>CreateSocial)
    users: User[]

}