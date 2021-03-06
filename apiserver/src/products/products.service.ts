import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getOne(id: string): Promise<Product> {
    return this.productModel.findById(id);
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async remove(id: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(id);
  }

  async update(id: string, productDto: UpdateProductDto): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, productDto, { new: true });
  }
}
