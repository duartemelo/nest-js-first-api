import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from './models/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a ${params.id} cat.`;
  }

  // TODO: estou em dependency injection: https://docs.nestjs.com/providers

  // @Get()
  // @Redirect('https://nestjs.com')
  // findAll(): void {}
}
