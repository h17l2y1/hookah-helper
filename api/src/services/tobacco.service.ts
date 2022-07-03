import {Injectable} from '@nestjs/common';
import {Tobacco, TobaccoDocument} from '../schemas/tobacco.schema';
import {InjectModel} from '@nestjs/mongoose';
import {CreateTobaccoDto} from '../dto/create-tobacco.dto';
import {Model} from 'mongoose';

@Injectable()
export class TobaccoService {
  constructor(
    @InjectModel(Tobacco.name)
    private readonly tobaccoModel: Model<TobaccoDocument>,
  ) {}

  async create(request: CreateTobaccoDto): Promise<Tobacco> {
    // request.creationDate = moment().format('DD-MM-YYYY hh:mm:ss');
    return await this.tobaccoModel.create(request);
  }

  async getAll(): Promise<Array<Tobacco>> {
    return this.tobaccoModel.find().exec();
  }

  // @UseFilters(MongoExceptionFilter)
  async getAllByBrandId(brandId: string): Promise<Array<Tobacco>>{
    return this.tobaccoModel.find({brandId: brandId}).exec();
  }

  async getById(id: string): Promise<Tobacco> {
    return this.tobaccoModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    return await this.tobaccoModel
        .findByIdAndRemove({_id: id})
        .exec();
  }
}
