import { Injectable } from '@nestjs/common';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Donation } from 'src/donation/models/donation.model';

@Injectable()
export class DonationService {
  constructor(@InjectModel(Donation) private donationModel: typeof Donation){}
  create(createDonationDto: CreateDonationDto) {
    return this.donationModel.create(createDonationDto);
  }

  findAll() {
    return this.donationModel.findAll({include: {all: true}});
  }

  findOne(id: number) {
    return this.donationModel.findByPk(id);
  }

  update(id: number, updateDonationDto: UpdateDonationDto) {
    return this.donationModel.update(updateDonationDto, {where: {id}, returning: true});
  }

  remove(id: number) {
    return this.donationModel.destroy({where:{id}});
  }
}
