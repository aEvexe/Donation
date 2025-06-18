import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCategoryDto } from 'src/category/dto/create-kuryer.dto';
import { Category } from 'src/category/models/category.models';
import { UpdateSocialDto } from 'src/social/dto/update-social.dto';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category) private categoryModel: typeof Category) {}

    async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category>{
        const category = await this.categoryModel.create(createCategoryDto)
        return category
    }

    async getAllCategory(): Promise<Category[]>{
        return this.categoryModel.findAll();
    }

    async getCategoryById(id: number): Promise<Category | null>{
        return this.categoryModel.findByPk(id);
    }

    async removeCategoryById(id: number): Promise<string>{
        const res = await this.categoryModel.destroy({where:{id}});
        if(res>0){
            return `${id} - social deleted successfully`
        }
        return `${id} - no such social`
    }

    async updateCategoryById(id: number, updateSocialDto: UpdateSocialDto){
        const company = await this.categoryModel.update(updateSocialDto, {where: {id}, returning: true});
        return company[0][1]
    }
}
