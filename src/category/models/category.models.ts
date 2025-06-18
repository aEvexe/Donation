import { Column, DataType, Model } from "sequelize-typescript";
import { Table } from 'sequelize-typescript'

interface ICategoryCreationAttr{
    name: string;
}

@Table({ tableName: "category", timestamps: true})
export class Category extends Model<Category, ICategoryCreationAttr>{
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
}