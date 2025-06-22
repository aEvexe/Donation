import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model } from "sequelize-typescript";
import { Table } from 'sequelize-typescript'
import { Products } from "src/product/models/product.model";

interface IProductImageCreationAttr{
    productId: number
    image_url: string
    is_main: boolean
}

@Table({ tableName: "product_image", timestamps: true})
export class ProductImage extends Model<ProductImage, IProductImageCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number

    @ForeignKey(()=>Products)
    @Column({type: DataType.INTEGER})
    declare productId: number

    @BelongsTo(()=>Products)
    products: Products

    @Column({
        type: DataType.STRING,

    })
    declare image_url: string;

    @Column({
        type: DataType.BOOLEAN,

    })
    declare is_main: boolean;

}