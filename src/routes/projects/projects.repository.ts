import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { CreateProjectDTO } from './dto/create-project.dto';
import { UpdateProjectDTO } from './dto/update-project.dto';

@Injectable()
export class ProjectRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    return await this.prisma.project.findUnique({
      where: {
        id,
      },
    });
  }

  async find() {
    return await this.prisma.project.findMany({
      orderBy: {
        date: 'desc',
      },
    });
  }

  async create(createProjectDTO: CreateProjectDTO) {
    const { date, description, image, link, repository, tags, title } =
      createProjectDTO;

    return this.prisma.project.create({
      data: {
        date,
        description,
        image,
        link,
        repository,
        title,
        tags,
      },
    });
  }

  async update(id: string, updateProjectDTO: UpdateProjectDTO) {
    const { date, description, image, link, repository, tags, title } =
      updateProjectDTO;

    return this.prisma.project.update({
      where: {
        id,
      },
      data: {
        date,
        description,
        image,
        link,
        repository,
        title,
        tags,
      },
    });
  }

  async delete(id: string) {
    return await this.prisma.project.delete({
      where: {
        id,
      },
    });
  }
}
