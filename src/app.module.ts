import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { KuryerModule } from './kuryer/kuryer.module';
import { Social } from 'src/social/models/social.models';
import { Kuryer } from 'src/kuryer/models/kuryer.model';
import { Category } from 'src/category/models/category.models';
import { AdminModule } from './admin/admin.module';
import { Admin } from 'src/admin/models/admin.model';

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
    models: [Social, Kuryer, Category, Admin],
    autoLoadModels: true,
    logging: true,
    sync: {alter: true}
  }),

  KuryerModule,

  AdminModule

],
})
export class AppModule {}
