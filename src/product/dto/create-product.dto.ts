export class CreateProductDto {
    creator_id: number;
    name: string;
    description: string;
    in_stock: number;
    is_available: boolean;
    price: number;
    category_id: number;
}
