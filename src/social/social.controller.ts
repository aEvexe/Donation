import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
} from "@nestjs/common";
import { SocialService } from "src/social/social.service";
import { CreateSocialDto } from "src/social/dto/create-social.dto";
import { Social } from "src/social/models/social.models";
import { UpdateSocialDto } from "src/social/dto/update-social.dto";

@Controller("company")
export class SocialController {
  constructor(private readonly socialService: SocialService) {}

  @Post()
  async createSocial(
    @Body() createSocialDto: CreateSocialDto
  ): Promise<Social> {
    return this.socialService.createSocial(createSocialDto);
  }

  @Get()
  async getAllCompanies(): Promise<Social[]> {
    return this.socialService.getAllSocial();
  }

  @Get(":id")
  async getCompaniesById(@Param("id") id: number): Promise<Social | null> {
    return this.socialService.getSocialById(id);
  }

  @Delete(":id")
  async removeCompaniesById(@Param("id") id: number): Promise<string> {
    return this.socialService.removeSocialById(id);
  }

  @Patch(":id")
  async updateCompaniesById(
    @Param("id") id: number,
    @Body() updateSocialDto: UpdateSocialDto
  ) {
    return this.socialService.updateSocialById(id, updateSocialDto);
  }
}
