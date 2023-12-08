import { Module } from '@nestjs/common';
import { TypeOfResourceService } from './type-of-resource.service';
import { TypeOfResourceController } from './type-of-resource.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOfResource } from './entities/type-of-resource.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeOfResource])],
  controllers: [TypeOfResourceController],
  providers: [TypeOfResourceService],
})
export class TypeOfResourceModule {}
