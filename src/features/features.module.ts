import { Module } from '@nestjs/common';
import { CatsController } from './apis/cats/cats.controller';
import { CatsService } from './apis/cats/cats.service';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [],
})
export class FeaturesModule {}
