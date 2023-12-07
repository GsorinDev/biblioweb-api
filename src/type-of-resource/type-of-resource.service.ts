import { Injectable } from '@nestjs/common';
import { CreateTypeOfResourceDto } from './dto/create-type-of-resource.dto';
import { UpdateTypeOfResourceDto } from './dto/update-type-of-resource.dto';

@Injectable()
export class TypeOfResourceService {
  create(createTypeOfResourceDto: CreateTypeOfResourceDto) {
    return 'This action adds a new typeOfResource';
  }

  findAll() {
    return `This action returns all typeOfResource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeOfResource`;
  }

  update(id: number, updateTypeOfResourceDto: UpdateTypeOfResourceDto) {
    return `This action updates a #${id} typeOfResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeOfResource`;
  }
}
