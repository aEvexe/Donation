import { Controller } from '@nestjs/common';
import {
  Body,
  Get,
  Post,
  Param,
  Delete,
  Patch,
} from "@nestjs/common";
import { CreateKuryerDto } from 'src/kuryer/dto/create-kuryer.dto';
import { UpdateKuryerDto } from 'src/kuryer/dto/update-kuryer.dto';
import { KuryerService } from 'src/kuryer/kuryer.service';
import { Kuryer } from 'src/kuryer/models/kuryer.model';

@Controller('kuryer')
export class KuryerController {
    constructor(private readonly kuryerService: KuryerService){}

    @Post()
  async createCompany(
    @Body() createKuryerDto: CreateKuryerDto
  ): Promise<Kuryer> {
    return this.kuryerService.createKuryer(createKuryerDto);
  }

  @Get()
  async getAllCompanies(): Promise<Kuryer[]> {
    return this.kuryerService.getAllKuryer();
  }

  @Get(":id")
  async getCompaniesById(@Param("id") id: number): Promise<Kuryer | null> {
    return this.kuryerService.getKuryerById(id);
  }

  @Delete(":id")
  async removeCompaniesById(@Param("id") id: number): Promise<string> {
    return this.kuryerService.removeKuryerById(id);
  }

  @Patch(":id")
  async updateCompaniesById(
    @Param("id") id: number,
    @Body() updateKuryerDto: UpdateKuryerDto
  ) {
    return this.kuryerService.updateKuryerById(id, updateKuryerDto);
  }
}
