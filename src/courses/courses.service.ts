import { Course } from './entities/course.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Model } from 'mongoose';
import {InjectModel}  from "@nestjs/mongoose"


@Injectable()
export class CoursesService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>){}
 async create(createCourseDto: CreateCourseDto) {
    const newCourse= new this.courseModel(createCourseDto);
    try{
      return await newCourse.save()
    }catch(error){
      throw new BadRequestException(`Error al guardar: ${error}`)
    }

  }

  async findAll() {
    return  await this.courseModel.find().exec();
  }

  findOne(id: number) {
    return  this.courseModel.find({_id : id}).exec();
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
