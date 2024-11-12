import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Patch,
  Delete,
} from '@nestjs/common';

import { StudentsService } from './students.service';

import { Student } from './student.schema';
import { CreateStudentDto } from './create-student.dto';
import { UpdateStudentDto } from './update-student.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateStudentPartialDto } from './update-student-partial.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}
  @Get()
  async findListStudent(): Promise<Student[]> {
    const students = await this.studentsService.findListStudent();
    return students;
  }

  @Post()
  async createStudent(
    @Body() createStudentDto: CreateStudentDto,
  ): Promise<Student> {
    return await this.studentsService.createStudent(createStudentDto);
  }

  @Get(':id')
  async findStudentById(@Param('id') id: string): Promise<Student> {
    return await this.studentsService.findStudentById(id);
  }

  @Patch(':id')
  async updateStudentPartial(
    @Param('id') id: string,
    @Body() updateStudentPartialDto: UpdateStudentPartialDto,
  ): Promise<Student> {
    return await this.studentsService.updateStudentPartial(
      id,
      updateStudentPartialDto,
    );
  }

  @Put(':id')
  async updateStudent(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    return await this.studentsService.updateStudentPartial(
      id,
      updateStudentDto,
    );
  }

  @Delete(':id')
  async deleteOneStudent(@Param('id') id: string): Promise<void> {
    return await this.studentsService.deleteOneStudent(id);
  }
}
