import { Module } from '@nestjs/common';
import { KuryerService } from './kuryer.service';
import { KuryerController } from './kuryer.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Kuryer } from 'src/kuryer/models/kuryer.model';

@Module({
  imports: [SequelizeModule.forFeature([Kuryer])],
  providers: [KuryerService],
  controllers: [KuryerController]
})
export class KuryerModule {}
