import { Module } from '@nestjs/common';
import { ResourceService } from './resource.service';
import { ResourceController } from './resource.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOfResource } from '../type-of-resource/entities/type-of-resource.entity';
import { Resource } from './entities/resource.entity';
import { Author } from '../author/entities/author.entity';
import { Genre } from '../genre/entities/genre.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TypeOfResource, Resource, Author, Genre]),
  ],
  controllers: [ResourceController],
  providers: [ResourceService],
})
export class ResourceModule {}
