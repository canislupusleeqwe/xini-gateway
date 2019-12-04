import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { FeaturesModule } from './features/features.module';
@Module({
  imports: [FeaturesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
