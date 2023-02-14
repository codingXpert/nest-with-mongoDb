import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BreedDocument } from 'src/schemas/breed.schema';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { Breed } from './entities/breed.entity';

@Injectable()
export class BreedsService {
  constructor(@InjectModel(Breed.name) private BreedModel: Model<BreedDocument>) {}
  async create(createBreedDto: CreateBreedDto):Promise<Breed> {
    return new this.BreedModel(createBreedDto).save();
  }

  findAll() {
    return this.BreedModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} breed`;
  }

  update(id: number, updateBreedDto: UpdateBreedDto) {
    return `This action updates a #${id} breed`;
  }

  remove(id: number) {
    return `This action removes a #${id} breed`;
  }
}
