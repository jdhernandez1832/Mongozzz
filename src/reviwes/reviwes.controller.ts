import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReviwesService } from './reviwes.service';
import { CreateReviweDto } from './dto/create-reviwe.dto';
import { UpdateReviweDto } from './dto/update-reviwe.dto';

@Controller('reviwes')
export class ReviwesController {
  constructor(private readonly reviwesService: ReviwesService) {}

  @Post()
  create(@Body() createReviweDto: CreateReviweDto) {
    return this.reviwesService.create(createReviweDto);
  }

  @Get()
  findAll() {
    return this.reviwesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviwesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReviweDto: UpdateReviweDto) {
    return this.reviwesService.update(+id, updateReviweDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviwesService.remove(+id);
  }
}
