import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampsModule } from './bootcamps/bootcamps.module';
import { CoursesModule } from './courses/courses.module';
import { ReviwesModule } from './reviwes/reviwes.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SponsorModule } from './sponsor/sponsor.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest_2902081'), BootcampsModule, CoursesModule, ReviwesModule, UsersModule, SponsorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
