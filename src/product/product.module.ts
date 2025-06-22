import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Products } from 'src/product/models/product.model';

@Module({
  imports:[SequelizeModule.forFeature([Products])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
