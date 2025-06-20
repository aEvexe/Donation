import { Injectable } from '@nestjs/common';
import { CreateCreateSocialDto } from './dto/create-create-social.dto';
import { UpdateCreateSocialDto } from './dto/update-create-social.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSocial } from 'src/create-social/models/create-social.model';

@Injectable()
export class CreateSocialService {
  constructor(@InjectModel(CreateSocial) private createSocialModel: typeof CreateSocial){}
  create(createCreateSocialDto: CreateCreateSocialDto) {
    return this.createSocialModel.create(createCreateSocialDto);
  }

  findAll() {
    return this.createSocialModel.findAll({include:{all: true}});
  }

  findOne(id: number) {
    return this.createSocialModel.findByPk(id);
  }

  update(id: number, updateCreateSocialDto: UpdateCreateSocialDto) {
    return this.createSocialModel.update(updateCreateSocialDto, {where: {id}, returning: true});
  }

  async remove(id: number) {
  const deleted = await this.createSocialModel.destroy({ where: { id } });
  return { message: `Deleted ${deleted} record(s)` };
}
}
