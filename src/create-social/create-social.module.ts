import { Module } from '@nestjs/common';
import { CreateSocialService } from './create-social.service';
import { CreateSocialController } from './create-social.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CreateSocial } from 'src/create-social/models/create-social.model';

@Module({
  imports: [SequelizeModule.forFeature([CreateSocial])],
  controllers: [CreateSocialController],
  providers: [CreateSocialService],
})
export class CreateSocialModule {}
