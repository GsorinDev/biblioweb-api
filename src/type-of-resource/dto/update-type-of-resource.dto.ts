import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeOfResourceDto } from './create-type-of-resource.dto';

export class UpdateTypeOfResourceDto extends PartialType(CreateTypeOfResourceDto) {}
