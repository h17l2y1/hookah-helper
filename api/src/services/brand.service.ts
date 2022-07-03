import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Brand, BrandDocument} from "../schemas/brand.schema";
import {CreateBrandDto} from "../dto/create-barand.dto";

@Injectable()
export class BrandService {
    constructor(
        @InjectModel(Brand.name)
        private readonly brandModel: Model<BrandDocument>,
    ) {}

    test(): string {
        const arr = [];
        const first = arr[0].name;

        return 'test';
    }

    async create(request: CreateBrandDto): Promise<Brand> {
        // request.creationDate = moment().format('DD-MM-YYYY hh:mm:ss');
        return await this.brandModel.create(request);
    }

    async getAll(): Promise<Array<Brand>> {
        return this.brandModel.find().exec();
    }

    async getById(id: string): Promise<Brand> {
        return this.brandModel.findOne({ _id: id }).exec();
    }

    async delete(id: string) {
        return await this.brandModel
            .findByIdAndRemove({_id: id})
            .exec();
    }
}
