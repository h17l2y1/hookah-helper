import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TobaccoService } from '../services/tobacco.service';
import { Tobacco } from '../schemas/tobacco.schema';
import { CreateTobaccoDto } from '../dto/create-tobacco.dto';

@Controller('tobacco')
export class TobaccoController {
  constructor(private readonly service: TobaccoService) {}

  @Get('/test')
  async test(): Promise<string> {
    return 'hello';
  }

  @Get()
  async getAll(): Promise<Array<Tobacco>> {
    return this.service.getAll();
  }

  @Get('/getAllByBrandId/:id')
  async getAllByBrandId(@Param('id') id: string): Promise<Array<Tobacco>> {
    return this.service.getAllByBrandId(id);
  }

  @Post()
  async create(@Body() request: CreateTobaccoDto) {
    await this.service.create(request);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Tobacco> {
    return this.service.getById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
