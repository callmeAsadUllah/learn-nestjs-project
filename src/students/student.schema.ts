import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema({ timestamps: true })
export class Student extends Document {
  @Prop({ required: true, unique: true, index: true, lowercase: true })
  username: string;

  @Prop({ required: false })
  firstName?: string;

  @Prop({ required: false })
  lastName?: string;

  @Prop({
    required: true,
    unique: true,
    index: true,
    lowercase: true,
  })
  email: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
