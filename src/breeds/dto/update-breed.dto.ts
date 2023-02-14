import { PartialType } from '@nestjs/mapped-types';
import { CreateBreedDto } from './create-breed.dto';

export class UpdateBreedDto extends PartialType(CreateBreedDto) {}  //by writing update DTO like , all the
                                                                   // fields of CreateBreedDto becomes optional for UpdateBreedDto
