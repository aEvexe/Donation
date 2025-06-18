import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSocialDto } from 'src/social/dto/create-social.dto';
import { UpdateSocialDto } from 'src/social/dto/update-social.dto';
import { Social } from 'src/social/models/social.models';

@Injectable()
export class SocialService {
    constructor(@InjectModel(Social) private socialModel: typeof Social) {}

    async createSocial(createSocialDto: CreateSocialDto): Promise<Social>{
        const company = await this.socialModel.create(createSocialDto)
        return company
    }

    async getAllSocial(): Promise<Social[]>{
        return this.socialModel.findAll();
    }

    async getSocialById(id: number): Promise<Social | null>{
        return this.socialModel.findByPk(id);
    }

    async removeSocialById(id: number): Promise<string>{
        const res = await this.socialModel.destroy({where:{id}});
        if(res>0){
            return `${id} - social deleted successfully`
        }
        return `${id} - no such social`
    }

    async updateSocialById(id: number, updateSocialDto: UpdateSocialDto){
        const company = await this.socialModel.update(updateSocialDto, {where: {id}, returning: true});
        return company[0][1]
    }
}
