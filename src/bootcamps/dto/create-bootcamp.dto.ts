import { Sponsor } from './../../sponsor/entities/sponsor.entity';
import {IsNotEmpty, IsAlpha, IsNumber, IsInt, Min, Max, IsPositive, ValidateNested, IsMongoId, IsArray} from 'class-validator'
import { Category } from '../entities/category.entity';
import { CreateCategoryDto } from './category.dtos';
import { Type } from 'class-transformer';
export class CreateBootcampDto {
    
    @IsNotEmpty()
    readonly name: string;
    
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    
    readonly phone: number;
    

    readonly address: string;

    @IsInt()
    @IsNotEmpty()
    @Min(0)
    @Max(10)
    
    readonly averageRating: number;
    
    readonly createdAt: Date;

    @IsNotEmpty()
    @ValidateNested()
    @Type(()=>CreateCategoryDto)
    readonly category: CreateCategoryDto;
    
    @IsMongoId()
    @IsNotEmpty()
    sponsor: string

    @IsNotEmpty()
    @IsArray()
    readonly skills: any[]

}
