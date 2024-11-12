import { IsArray, IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class CreateCourseDto {

       @IsNotEmpty()
       readonly title: string;
       @IsNotEmpty()
       readonly description: string;
       @IsNotEmpty()
       @IsNumber()
       @IsPositive()
       readonly weeks: number;
       @IsNotEmpty()
       @IsNumber()
       @IsPositive()
       readonly tuition: number;
       @IsNotEmpty()
       readonly miniumSkill: string;
       @IsNotEmpty()
       readonly createdAt: Date;

       @IsNotEmpty()
       @IsArray()
       readonly skills: any[]
}
