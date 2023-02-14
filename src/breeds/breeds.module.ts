import { Module } from '@nestjs/common';
import { BreedsService } from './breeds.service';
import { BreedsController } from './breeds.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Breed } from './entities/breed.entity';
import { BreedSchema } from 'src/schemas/breed.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Breed.name, schema: BreedSchema }])],
  controllers: [BreedsController],
  providers: [BreedsService]
})
export class BreedsModule {}
