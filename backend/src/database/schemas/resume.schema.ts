import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

class Contact {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  location: string;

  @Prop()
  linkedin: string;
}

@Schema({ _id: false })
class Education {
  @Prop({ required: true })
  school: string;

  @Prop({ required: true })
  degree: string;

  @Prop({ required: true })
  field: string;

  @Prop({ required: true })
  startDate: string;

  @Prop()
  endDate: string;
}

@Schema({ _id: false })
class Experience {
  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  position: string;

  @Prop({ required: true })
  startDate: string;

  @Prop()
  endDate: string;

  @Prop()
  description: string;
}

@Schema({ _id: false })
class Project {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  link: string;
}

@Schema({ timestamps: true })
export class Resume extends Document {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: string;

  @Prop({ required: true })
  title: string;

  @Prop({ type: Contact, required: true })
  contact: Contact;

  @Prop()
  summary: string;

  @Prop({ type: [String], default: [] })
  languages: string[];

  @Prop({ type: [String], default: [] })
  certifications: string[];

  @Prop({ type: [String], default: [] })
  awards: string[];

  @Prop({ type: [String], default: [] })
  interests: string[];

  @Prop()
  profilePhoto: string;

  @Prop({
    type: {
      theme: { type: String, required: true },
      colorPalette: { type: [String], default: [] },
    },
    required: true,
  })
  template: {
    theme: string;
    colorPalette: string[];
  };

  @Prop()
  thumbnailLink: string;

  @Prop({ type: [Education], default: [] })
  education: Education[];

  @Prop({ type: [Experience], default: [] })
  experience: Experience[];

  @Prop({ type: [String], default: [] })
  skills: string[];

  @Prop({ type: [Project], default: [] })
  projects: Project[];
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);
