import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Sponsor extends Document{
       
       @Prop({required: true, unique: true})
       name: string;

       @Prop({required: true})
       nit: string;
}

export const SponsorSchema = SchemaFactory.createForClass(Sponsor);