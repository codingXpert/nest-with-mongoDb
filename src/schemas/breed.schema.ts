import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Breed } from 'src/breeds/entities/breed.entity';

export type BreedDocument = Breed & Document

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  furType: string;
}

export const BreedSchema = SchemaFactory.createForClass(Cat);