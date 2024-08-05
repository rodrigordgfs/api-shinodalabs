import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectService } from './projects.service';
import { CreateProjectDTO } from './dto/create-project.dto';

@ApiTags('Projects')
@Controller('projects')
export class ProjectController {
  constructor(private readonly service: ProjectService) {}

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Get()
  async find() {
    return this.service.find();
  }

  @Post()
  async create(@Body() createProjectDTO: CreateProjectDTO) {
    return this.service.create(createProjectDTO);
  }

  @Put(':id')
  async update(
    @Body() updateProjectDTO: CreateProjectDTO,
    @Param('id') id: string,
  ) {
    return this.service.update(id, updateProjectDTO);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
