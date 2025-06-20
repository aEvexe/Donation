import { PartialType } from '@nestjs/mapped-types';
import { CreateCreateSocialDto } from './create-create-social.dto';

export class UpdateCreateSocialDto extends PartialType(CreateCreateSocialDto) {}
