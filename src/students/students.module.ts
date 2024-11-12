import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';

import { StudentsService } from './students.service';

import { Student, StudentSchema } from './student.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  providers: [StudentsService],
  controllers: [StudentsController],
})
export class StudentsModule {}
