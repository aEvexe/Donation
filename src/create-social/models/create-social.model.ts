import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model } from "sequelize-typescript";
import { Table } from 'sequelize-typescript'
import { Social } from "src/social/models/social.models";
import { User } from "src/user/models/user.models";

interface ICreateSocialCreationAttr{
    creatorId: number
    socialId: number
    url: string
}

@Table({ tableName: "createSocial", timestamps: true})
export class CreateSocial extends Model<CreateSocial, ICreateSocialCreationAttr>{
    @ForeignKey(()=>User)
    @Column({type: DataType.INTEGER})
    declare creatorId: number

    @BelongsTo(() => User)
    user: User;

    @ForeignKey(()=>Social)
    @Column({type: DataType.INTEGER})
    declare socialId: number

    @BelongsTo(() => Social)
    social: Social;

    @Column({
        type: DataType.STRING,
    })
    declare url: string;
}
