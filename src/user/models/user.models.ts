import { BelongsToMany, Column, DataType, HasMany, Model } from "sequelize-typescript";
import { Table } from 'sequelize-typescript'
import { CreateSocial } from "src/create-social/models/create-social.model";
import { Donation } from "src/donation/models/donation.model";
import { Notification } from "src/notification/models/notification.model";
import { Products } from "src/product/models/product.model";
import { Social } from "src/social/models/social.models";

interface IUserCreationAttr{
    full_name: string;
    email: string;
    password_hash: string;
    role: string;
    bio: string;
    avatar_url: string;
    banner_url: string;
    is_active: boolean;
} 

@Table({ tableName: "user", timestamps: true})
export class User extends Model<User, IUserCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare full_name: string;

    @Column({
        type: DataType.STRING,

    })
    declare email: string;

    @Column({
        type: DataType.STRING,

    })
    declare password_hash: string;

    @Column({
        type: DataType.STRING,

    })
    declare role: string;

    @Column({
        type: DataType.STRING,

    })
    declare bio: string;

    @Column({
        type: DataType.STRING,

    })
    declare avatar_url: string;

    @Column({
        type: DataType.STRING,

    })
    declare banner_url: string;

    @Column({
        type: DataType.BOOLEAN,

    })
    declare is_active: Boolean;

    @HasMany(()=>Notification)
    notification: Notification

    @HasMany(()=>Donation)
    supporters: Donation[]

    @HasMany(()=>Donation)
    creators: Donation[]

    @HasMany(()=> Products)
    product: Products[]

    @BelongsToMany(()=>Social, ()=>CreateSocial)
    Socials: Social[]
}