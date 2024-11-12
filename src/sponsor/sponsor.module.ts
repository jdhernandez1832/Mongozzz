import { Module } from '@nestjs/common';
import { SponsorService } from './sponsor.service';
import { SponsorController } from './sponsor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sponsor, SponsorSchema } from './entities/sponsor.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Sponsor.name, schema: SponsorSchema }])],
  controllers: [SponsorController],
  providers: [SponsorService],
})
export class SponsorModule {}
