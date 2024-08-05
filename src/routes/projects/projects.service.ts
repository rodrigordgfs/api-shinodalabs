import { Injectable, NotFoundException } from '@nestjs/common';
import { ProjectRepository } from './projects.repository';
import { CreateProjectDTO } from './dto/create-project.dto';
import { UpdateProjectDTO } from './dto/update-project.dto';

@Injectable()
export class ProjectService {
  constructor(private readonly repository: ProjectRepository) {}

  async findById(id: string) {
    return await this.repository.findById(id);
  }

  async find() {
    return await this.repository.find();
  }

  async create(createProjectDTO: CreateProjectDTO) {
    return await this.repository.create(createProjectDTO);
  }

  async update(id: string, updateProjectDTO: UpdateProjectDTO) {
    const project = await this.repository.findById(id);

    if (!project) {
      throw new NotFoundException('Projeto não encontrado');
    }

    return await this.repository.update(id, updateProjectDTO);
  }

  async delete(id: string) {
    const project = await this.repository.findById(id);

    if (!project) {
      throw new NotFoundException('Projeto não encontrado');
    }
    return await this.repository.delete(id);
  }
}
