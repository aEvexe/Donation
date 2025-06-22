import { Column, DataType, HasMany, Model } from "sequelize-typescript";
import { Table } from 'sequelize-typescript'
import { Products } from "src/product/models/product.model";

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

    @HasMany(()=> Products)
    peoducts: Products[]

}