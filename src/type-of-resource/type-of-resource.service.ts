import { Injectable } from '@nestjs/common';
import { CreateTypeOfResourceDto } from './dto/create-type-of-resource.dto';
import { UpdateTypeOfResourceDto } from './dto/update-type-of-resource.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOfResource } from './entities/type-of-resource.entity';

@Injectable()
export class TypeOfResourceService {
  constructor(
    @InjectRepository(TypeOfResource)
    private readonly typeOfResourceRepository: Repository<TypeOfResource>,
  ) {}
  create(createTypeOfResourceDto: CreateTypeOfResourceDto) {
    const typeOfResource = new TypeOfResource();
    typeOfResource.name = createTypeOfResourceDto.name;

    return this.typeOfResourceRepository.save(typeOfResource);
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
