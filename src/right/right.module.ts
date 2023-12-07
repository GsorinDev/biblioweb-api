import { Module } from '@nestjs/common';
import { RightService } from './right.service';
import { RightController } from './right.controller';

@Module({
  controllers: [RightController],
  providers: [RightService]
})
export class RightModule {}
