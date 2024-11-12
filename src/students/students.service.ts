import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Student, StudentDocument } from './student.schema';
import { CreateStudentDto } from './create-student.dto';
import { UpdateStudentDto } from './update-student.dto';
import { UpdateStudentPartialDto } from './update-student-partial.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name)
    private studentsModel: Model<StudentDocument>,
  ) {}

  async findListStudent(): Promise<Student[]> {
    const students = await this.studentsModel.find().exec();
    return students;
  }

  async createStudent(createStudentDto: CreateStudentDto): Promise<Student> {
    const createdStudent = new this.studentsModel(createStudentDto);
    return await createdStudent.save();
  }

  async updateStudentPartial(
    id: string,
    updateStudentPartialDto: UpdateStudentPartialDto,
  ): Promise<Student> {
    const student = await this.findStudentById(id);
    Object.assign(student, updateStudentPartialDto);
    return await student.save();
  }

  async updateStudent(
    id: string,
    updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    const student = await this.findStudentById(id);
    Object.assign(student, updateStudentDto);
    return await student.save();
  }

  async findStudentById(id: string): Promise<Student> {
    const student = await this.studentsModel.findById(id).exec();
    return student;
  }

  async deleteOneStudent(id: string): Promise<void> {
    const student = await this.findStudentById(id);
    await student.deleteOne();
  }
}
