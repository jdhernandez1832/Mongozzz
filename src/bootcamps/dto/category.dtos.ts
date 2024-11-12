import { PartialType } from '@nestjs/mapped-types';
import { UpdateBootcampDto } from './update-bootcamp.dto';
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto{
       @IsNotEmpty()
       @IsString()
       readonly name: string;
       
       @IsNotEmpty()
       @IsString()
       readonly description: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto){

}