import { Module } from '@nestjs/common';
import { ReviwesService } from './reviwes.service';
import { ReviwesController } from './reviwes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Review, ReviewSchema } from './entities/reviwe.entity';

@Module({
  imports: [MongooseModule.forFeature( [ { name: Review.name, schema: ReviewSchema } ]) ],
  controllers: [ReviwesController],
  providers: [ReviwesService],
})
export class ReviwesModule {}
