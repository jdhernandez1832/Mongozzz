import { Module } from '@nestjs/common';
import { BootcampsService } from './bootcamps.service';
import { BootcampsController } from './bootcamps.controller';
import { BootcampSchema } from './entities/bootcamp.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Bootcamp } from './entities/bootcamp.entity';
import { Category, CategorySchema } from './entities/category.entity';
import { Sponsor, SponsorSchema } from 'src/sponsor/entities/sponsor.entity';

@Module({
  imports: [MongooseModule.forFeature( [ { name: Bootcamp.name, schema: BootcampSchema } ])
            ,MongooseModule.forFeature([{name: Category.name, schema: CategorySchema}]),
            MongooseModule.forFeature([{ name: Sponsor.name, schema: SponsorSchema }]) ],
  controllers: [BootcampsController],
  providers: [BootcampsService],
})
export class BootcampsModule {}
