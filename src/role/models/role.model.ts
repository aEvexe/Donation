import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript"

interface IRoleCreationAtrr{
    value: string
    description: string
}

@Table({tableName: "role", timestamps: true})
export class Role extends Model<Role, IRoleCreationAtrr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number

    @Column({
        type: DataType.STRING,
    })
    declare value: string

    @Column({
        type: DataType.STRING
    })
    declare description: string
}


