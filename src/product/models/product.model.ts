import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model } from "sequelize-typescript";
import { Table } from 'sequelize-typescript'
import { Category } from "src/category/models/category.models";
import { CreateSocial } from "src/create-social/models/create-social.model";
import { ProductImage } from "src/product_image/models/product_image.model";
import { User } from "src/user/models/user.models";

interface IProductCreationAttr{
    creator_id: number;
    name: string;
    description: string;
    in_stock: number;
    is_available: boolean;
    price: number;
    category_id: number;
}

@Table({ tableName: "products", timestamps: true})
export class Products extends Model<Products, IProductCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number

    @ForeignKey(()=> User)
    @Column({
        type: DataType.INTEGER,
    })
    declare creator_id: number;
    
    @BelongsTo(()=>User)
    users: User[]

    @Column({
        type: DataType.STRING,

    })
    declare description: string;

    @Column({
        type: DataType.INTEGER,

    })
    declare in_stock: number;

    @Column({
        type: DataType.BOOLEAN,

    })
    declare is_available: boolean;

    @Column({
        type: DataType.INTEGER,

    })
    declare price: number;

    @ForeignKey(()=> Category)
    @Column({
        type: DataType.INTEGER,
    })
    declare category_id: number;
    
    @BelongsTo(()=>Category)
    categories: Category[]

    @HasMany(()=>ProductImage)
    productImage: ProductImage[]
}