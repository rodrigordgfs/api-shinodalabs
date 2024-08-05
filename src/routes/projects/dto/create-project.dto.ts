import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';

export class CreateProjectDTO {
  @ApiProperty({})
  @IsString({ message: 'Titulo precisa ser uma string' })
  @MinLength(4, { message: 'Titulo precisa ter no mínimo 4 caracteres' })
  title: string;

  @ApiProperty({})
  @IsString({ message: 'Descrição precisa ser uma string' })
  @MinLength(4, { message: 'Descrição precisa ter no mínimo 4 caracteres' })
  description: string;

  @ApiProperty({})
  @IsDateString(
    {},
    { message: 'Data precisa ser uma string no formato de data' },
  )
  date: string;

  @ApiProperty({})
  @IsArray({ message: 'Tags precisa ser um array' })
  tags: string[];

  @ApiProperty({})
  @IsUrl({}, { message: 'Imagem precisa ser uma URL' })
  image: string;

  @ApiProperty({})
  @IsUrl({}, { message: 'Link precisa ser uma URL' })
  link: string;

  @ApiProperty({})
  @IsUrl({}, { message: 'Repository precisa ser uma URL' })
  repository: string;
}
