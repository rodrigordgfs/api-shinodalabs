import { Module } from '@nestjs/common';
import { ProjectController } from './projects.controller';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { ProjectService } from './projects.service';
import { ProjectRepository } from './projects.repository';

@Module({
  controllers: [ProjectController],
  providers: [PrismaService, ProjectService, ProjectRepository],
})
export class ProjectModule {}
