import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class Course {

    @Prop()
    title: string;

    @Prop()
    description: string;
    
    @Prop()
    weeks: number;


    @Prop()
    tuition: number;

    @Prop()
    miniumSkill: string;

    @Prop()
    createdAt: Date;

}

export const CourseSchema = SchemaFactory.createForClass(Course);