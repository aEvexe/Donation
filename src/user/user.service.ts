import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/user/models/user.models';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User){}
  create(createUserDto: CreateUserDto) {
    return this.userModel.create(createUserDto)
  }

  findAll() {
    return this.userModel.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.userModel.findByPk(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.update(updateUserDto, {where: {id}, returning: true});
  }

  remove(id: number) {
    return this.userModel.destroy({where:{id}});
  }
}
