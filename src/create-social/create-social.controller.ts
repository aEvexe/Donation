import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateSocialService } from './create-social.service';
import { CreateCreateSocialDto } from './dto/create-create-social.dto';
import { UpdateCreateSocialDto } from './dto/update-create-social.dto';

@Controller('create-social')
export class CreateSocialController {
  constructor(private readonly createSocialService: CreateSocialService) {}

  @Post()
  create(@Body() createCreateSocialDto: CreateCreateSocialDto) {
    return this.createSocialService.create(createCreateSocialDto);
  }

  @Get()
  findAll() {
    return this.createSocialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.createSocialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreateSocialDto: UpdateCreateSocialDto) {
    return this.createSocialService.update(+id, updateCreateSocialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.createSocialService.remove(+id);
  }
}
