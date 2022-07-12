import { UpdateProductDto } from './dto/update-product.dto';
import { Controller, Get, Post, Delete, Param, Body, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  @Get()
  getAll() {
    return 'get all';
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return `ID = ${id}`;
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return `Title: ${createProductDto.title} / Price: ${createProductDto.price}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} product`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }
}
