import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Social } from 'src/social/models/social.models';
import { CategoryController } from './category.controller';

@Module({
    imports: [SequelizeModule.forFeature([Social])],
    providers: [CategoryService],
    controllers: [CategoryController]
})
export class SocialModule {}
