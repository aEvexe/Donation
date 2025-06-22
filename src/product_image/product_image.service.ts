import { Injectable } from '@nestjs/common';
import { CreateProductImageDto } from './dto/create-product_image.dto';
import { UpdateProductImageDto } from './dto/update-product_image.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ProductImage } from 'src/product_image/models/product_image.model';

@Injectable()
export class ProductImageService {
  constructor(@InjectModel(ProductImage) private productImageModel: typeof ProductImage){}
  create(createProductImageDto: CreateProductImageDto) {
    return this.productImageModel.create(createProductImageDto)
  }

  findAll() {
    return this.productImageModel.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.productImageModel.findByPk(id);
  }

  update(id: number, updateProductImageDto: UpdateProductImageDto) {
    return this.productImageModel.update(updateProductImageDto, {where: {id}, returning: true});
  }

  remove(id: number) {
    return this.productImageModel.destroy({where:{id}});
  }
}
