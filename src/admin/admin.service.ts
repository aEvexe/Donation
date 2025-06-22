import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import {
  BadRequestException,
  HttpException,
  HttpStatus,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from 'src/admin/models/admin.model';
import { RoleService } from 'src/role/role.service';
import { AddRoleDto } from 'src/admin/dto/add-role.dto';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private adminModel: typeof Admin,
  private readonly roleService: RoleService
  ){}

  async create(createAdminDto: CreateAdminDto) {
    const role = await this.roleService.findRoleByValue(createAdminDto.role);
    if (!role) {
      throw new NotFoundException(`Not found such a role`)
      // throw new HttpException(`Not found such a role`, HttpStatus.NOT_FOUND);
    }
    const newAdmin = await this.adminModel.create(createAdminDto);
    await newAdmin.$set("role", [role.id]);
    await newAdmin.save();
    return newAdmin;
  }

  findAll() {
    return this.adminModel.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.adminModel.findByPk(id);
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.adminModel.update(updateAdminDto, {where: {id}, returning: true});
  }

  async addRole(addRoleDto: AddRoleDto){
    const user = await this.adminModel.findByPk(addRoleDto.userId);
    if(!user){
      throw new BadRequestException("This type of user not exists")
    }

    const role = await this.roleService.findRoleByValue(addRoleDto.value);
    if (!role) {
      throw new NotFoundException(`Not found such a role`)
    }

    await user.$add("roles", role.id);

    const updatedUser = await this.adminModel.findByPk(addRoleDto.userId, {include: {all: true}})
    return updatedUser
  }

  async removeRole(addRoleDto: AddRoleDto){
    const user = await this.adminModel.findByPk(addRoleDto.userId);
    if(!user){
      throw new BadRequestException("This type of user not exists")
    }

    const role = await this.roleService.findRoleByValue(addRoleDto.value);
    if (!role) {
      throw new NotFoundException(`Not found such a role`)
    }

    await user.$remove("roles", role.id);

    const updatedUser = await this.adminModel.findByPk(addRoleDto.userId, {include: {all: true}})
    return updatedUser
  }

  remove(id: number) {
    return this.adminModel.destroy({where:{id}});
  }
}
