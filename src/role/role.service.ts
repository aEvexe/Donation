import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from 'src/role/models/role.model';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private roleModel: typeof Role){}
  create(createRoleDto: CreateRoleDto) {
    return this.roleModel.create({...createRoleDto, value: createRoleDto.value.toUpperCase()});
  }

  findAll() {
    return this.roleModel.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.roleModel.findByPk(id);
  }

  findRoleByValue(value: string) {
    if (!value) {
    throw new Error('Role value is undefined or null');
  }
    return this.roleModel.findOne({where:{value: value.toUpperCase()}});
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.roleModel.update(updateRoleDto, {where: {id}, returning: true});
  }

  remove(id: number) {
    return this.roleModel.destroy({where:{id}});
  }
}
