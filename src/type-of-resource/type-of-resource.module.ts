import { Module } from '@nestjs/common';
import { TypeOfResourceService } from './type-of-resource.service';
import { TypeOfResourceController } from './type-of-resource.controller';

@Module({
  controllers: [TypeOfResourceController],
  providers: [TypeOfResourceService]
})
export class TypeOfResourceModule {}
