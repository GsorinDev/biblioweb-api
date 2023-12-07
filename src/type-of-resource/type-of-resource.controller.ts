import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeOfResourceService } from './type-of-resource.service';
import { CreateTypeOfResourceDto } from './dto/create-type-of-resource.dto';
import { UpdateTypeOfResourceDto } from './dto/update-type-of-resource.dto';

@Controller('type-of-resource')
export class TypeOfResourceController {
  constructor(private readonly typeOfResourceService: TypeOfResourceService) {}

  @Post()
  create(@Body() createTypeOfResourceDto: CreateTypeOfResourceDto) {
    return this.typeOfResourceService.create(createTypeOfResourceDto);
  }

  @Get()
  findAll() {
    return this.typeOfResourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeOfResourceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeOfResourceDto: UpdateTypeOfResourceDto) {
    return this.typeOfResourceService.update(+id, updateTypeOfResourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeOfResourceService.remove(+id);
  }
}
