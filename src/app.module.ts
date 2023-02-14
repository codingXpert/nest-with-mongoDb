import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreedsModule } from './breeds/breeds.module';

@Module({
  imports: [BreedsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
