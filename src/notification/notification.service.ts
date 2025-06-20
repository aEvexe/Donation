import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Notification } from 'src/notification/models/notification.model';

@Injectable()
export class NotificationService {
  constructor(@InjectModel(Notification) private notificationModel: typeof Notification){}
  create(createNotificationDto: CreateNotificationDto) {
    return this.notificationModel.create(createNotificationDto);
  }

  findAll() {
    return this.notificationModel.findAll({include:{all: true}});
  }

  findOne(id: number) {
    return this.notificationModel.findByPk(id);
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return this.notificationModel.update(updateNotificationDto, {where: {id}, returning: true});
  }

  remove(id: number) {
    return this.notificationModel.destroy({where:{id}});
  }
}
