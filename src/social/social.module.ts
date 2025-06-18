import { Module } from '@nestjs/common';
import { SocialService } from './social.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Social } from 'src/social/models/social.models';
import { SocialController } from './social.controller';

@Module({
    imports: [SequelizeModule.forFeature([Social])],
    providers: [SocialService],
    controllers: [SocialController]
})
export class SocialModule {}
