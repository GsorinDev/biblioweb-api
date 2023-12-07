import { Test, TestingModule } from '@nestjs/testing';
import { RightController } from './right.controller';
import { RightService } from './right.service';

describe('RightController', () => {
  let controller: RightController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RightController],
      providers: [RightService],
    }).compile();

    controller = module.get<RightController>(RightController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
