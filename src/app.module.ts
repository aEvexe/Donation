import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { KuryerModule } from './kuryer/kuryer.module';
import { Social } from 'src/social/models/social.models';
import { Kuryer } from 'src/kuryer/models/kuryer.model';
import { Category } from 'src/category/models/category.models';
import { AdminModule } from './admin/admin.module';
import { Admin } from 'src/admin/models/admin.model';
import { UserModule } from './user/user.module';
import { NotificationModule } from './notification/notification.module';
import { User } from 'src/user/models/user.models';
import { Notification } from 'src/notification/models/notification.model';
import { DonationModule } from './donation/donation.module';
import { CreateSocialModule } from './create-social/create-social.module';
import { Donation } from 'src/donation/models/donation.model';
import { CreateSocial } from 'src/create-social/models/create-social.model';

@Module({
  imports: [
    ConfigModule.forRoot({
    envFilePath: '.env', 
    isGlobal: true
  }),

  SequelizeModule.forRoot({
    dialect: "postgres",
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB,
    models: [Social, Kuryer, Category, Admin, User, Notification, Donation, CreateSocial],
    autoLoadModels: true,
    logging: false,
    sync: {alter: true}
  }),

  KuryerModule,

  AdminModule,

  UserModule,

  NotificationModule,

  DonationModule,

  CreateSocialModule

],
})
export class AppModule {}
