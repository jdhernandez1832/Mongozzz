import { Injectable } from '@nestjs/common';
import { CreateReviweDto } from './dto/create-reviwe.dto';
import { UpdateReviweDto } from './dto/update-reviwe.dto';
import { Model } from 'mongoose';
import {InjectModel}  from "@nestjs/mongoose"
import { Review } from './entities/reviwe.entity';

@Injectable()
export class ReviwesService {
  constructor(@InjectModel(Review.name) private reviewModel: Model<Review>){}

  create(createReviweDto: CreateReviweDto) {
    return 'This action adds a new reviwe';
  }

  findAll() {
    return  this.reviewModel.find().exec();
  }

  findOne(id: number) {
    return  this.reviewModel.find({_id : id}).exec();
  }

  update(id: number, updateReviweDto: UpdateReviweDto) {
    return `This action updates a #${id} reviwe`;
  }

  remove(id: number) {
    return `This action removes a #${id} reviwe`;
  }
}
