import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfResourceController } from './type-of-resource.controller';
import { TypeOfResourceService } from './type-of-resource.service';

describe('TypeOfResourceController', () => {
  let controller: TypeOfResourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeOfResourceController],
      providers: [TypeOfResourceService],
    }).compile();

    controller = module.get<TypeOfResourceController>(TypeOfResourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
