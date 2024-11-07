import { Module } from '@nestjs/common';
import { BootcampsService } from './bootcamps.service';
import { BootcampsController } from './bootcamps.controller';
import { BootcampSchema } from './entities/bootcamp.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Bootcamp } from './entities/bootcamp.entity';

@Module({
  imports: [MongooseModule.forFeature( [ { name: Bootcamp.name, schema: BootcampSchema } ]) ],
  controllers: [BootcampsController],
  providers: [BootcampsService],
})
export class BootcampsModule {}
