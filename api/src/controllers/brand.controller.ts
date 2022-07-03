import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {Brand} from "../schemas/brand.schema";
import {CreateBrandDto} from "../dto/create-barand.dto";
import {BrandService} from "../services/brand.service";

@Controller('brand')
export class BrandController {
    constructor(private readonly service: BrandService) {}

    @Get('/test')
    test(): string {
        return this.service.test();
    }

    @Get()
    async getAll(): Promise<Array<Brand>> {
        return this.service.getAll();
    }

    @Post()
    async create(@Body() request: CreateBrandDto) {
        await this.service.create(request);
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Brand> {
        return this.service.getById(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.service.delete(id);
    }
}
