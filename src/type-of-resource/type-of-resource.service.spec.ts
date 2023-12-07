import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfResourceService } from './type-of-resource.service';

describe('TypeOfResourceService', () => {
  let service: TypeOfResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeOfResourceService],
    }).compile();

    service = module.get<TypeOfResourceService>(TypeOfResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
