import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  // providers : private by default
  exports: [PowerService],
})
export class PowerModule {}
