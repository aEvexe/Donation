import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from 'src/admin/models/admin.model';

@Module({
  imports: [SequelizeModule.forFeature([Admin])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
