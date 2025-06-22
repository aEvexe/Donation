import { Module } from '@nestjs/common';
import { ProductImageService } from './product_image.service';
import { ProductImageController } from './product_image.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductImage } from 'src/product_image/models/product_image.model';

@Module({
  imports: [SequelizeModule.forFeature([ProductImage])],
  controllers: [ProductImageController],
  providers: [ProductImageService],
})
export class ProductImageModule {}
