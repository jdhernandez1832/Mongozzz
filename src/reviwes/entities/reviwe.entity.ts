import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class Review {

    @Prop()
    title: string;
    
    @Prop()
    comment: string;

    @Prop()
    rating: number;

    @Prop()
    createdAt: Date;


}

export const ReviewSchema = SchemaFactory.createForClass(Review);