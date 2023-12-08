import { BadRequestException, Injectable, Res } from "@nestjs/common";
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOfResource } from '../type-of-resource/entities/type-of-resource.entity';
import { In, Repository } from 'typeorm';
import { Genre } from '../genre/entities/genre.entity';
import { Author } from '../author/entities/author.entity';
import { Resource } from './entities/resource.entity';

@Injectable()
export class ResourceService {
  constructor(
    @InjectRepository(TypeOfResource)
    private readonly typeOfResourceRepository: Repository<TypeOfResource>,
    @InjectRepository(Genre)
    private readonly genreRepository: Repository<Genre>,
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
    @InjectRepository(Resource)
    private readonly resourceRepository: Repository<Resource>,
  ) {}
  async create(createResourceDto: CreateResourceDto) {
    const typeOfResource: TypeOfResource =
      await this.typeOfResourceRepository.findOne({
        where: { id: createResourceDto.typeOfResource },
      });

    console.log(typeOfResource);

    if (!typeOfResource || createResourceDto.typeOfResource === null) {
      throw new BadRequestException("typeOfResource doesn't exist");
    }

    const authors: Author[] = await this.authorRepository.find({
      where: { id: In(createResourceDto.authors) },
    });

    if (!authors) {
      throw new BadRequestException("authors doesn't exist");
    }

    const genres: Genre[] = await this.genreRepository.find({
      where: { id: In(createResourceDto.genres) },
    });

    if (!genres) {
      throw new BadRequestException("genres doesn't exist");
    }

    const resource = new Resource();

    resource.authors = authors;
    resource.description = createResourceDto.description;
    resource.genres = genres;
    resource.typeOfResource = typeOfResource;
    resource.quantity = createResourceDto.quantity;
    resource.available = createResourceDto.available;
    resource.title = createResourceDto.title;

    return this.resourceRepository.save(resource);
  }

  findAll() {
    return this.resourceRepository.find({
      relations: ['typeOfResource', 'authors', 'genres'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} resource`;
  }

  update(id: number, updateResourceDto: UpdateResourceDto) {
    return `This action updates a #${id} resource`;
  }

  remove(id: number) {
    return `This action removes a #${id} resource`;
  }
}
