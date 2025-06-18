import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateKuryerDto } from 'src/kuryer/dto/create-kuryer.dto';
import { UpdateKuryerDto } from 'src/kuryer/dto/update-kuryer.dto';
import { Kuryer } from 'src/kuryer/models/kuryer.model';

@Injectable()
export class KuryerService {
    constructor(@InjectModel(Kuryer) private kuryerModel: typeof Kuryer){}

    async createKuryer(createKuryerDto: CreateKuryerDto): Promise<Kuryer>{
        const kuryer = await this.kuryerModel.create(createKuryerDto)
        return kuryer
    }

    async getAllKuryer(): Promise<Kuryer[]>{
        return this.kuryerModel.findAll();
    }

    async getKuryerById(id: number): Promise<Kuryer | null>{
        return this.kuryerModel.findByPk(id);
    }

    async removeKuryerById(id: number): Promise<string>{
        const res = await this.kuryerModel.destroy({where:{id}});
        if(res>0){
            return `${id} - kuryer deleted successfully`
        }
        return `${id} - no such kuryer`
    }

    async updateKuryerById(id: number, updateKuryerDto: UpdateKuryerDto){
        const res = await this.kuryerModel.update(updateKuryerDto, {where: {id}, returning: true});
        return res[0][1]
    }
}
