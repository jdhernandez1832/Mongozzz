import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class User {

    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    rol: string;

    @Prop()
    password: string;


}

export const UserSchema = SchemaFactory.createForClass(User);