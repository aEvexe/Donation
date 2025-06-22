import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Products } from 'src/product/models/product.model';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Products) private productsModel: typeof Products){}
  create(createProductDto: CreateProductDto) {
    return this.productsModel.create(createProductDto)
  }

  findAll() {
    return this.productsModel.findAll({include:{all: true}});
  }

  findOne(id: number) {
    return this.productsModel.findByPk(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productsModel.update(updateProductDto, {where: {id}, returning: true})
  }

  remove(id: number) {
    return this.productsModel.destroy({where:{id}});
  }
}
