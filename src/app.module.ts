import { Module } from '@nestjs/common';
import { PrismaService } from './lib/prisma/prisma.service';
import { ProjectModule } from './routes/projects/projects.module';
@Module({
  imports: [ProjectModule],
  providers: [PrismaService],
})
export class AppModule {}
