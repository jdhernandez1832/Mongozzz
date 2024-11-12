import { Sponsor } from './../../sponsor/entities/sponsor.entity';
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Category, CategorySchema } from "./category.entity";
import { IsMongoId } from 'class-validator';
import { Types } from 'mongoose';

@Schema()
export class Bootcamp {

    @Prop()
    name: string;
    
    @Prop()
    phone: number;

    @Prop()
    address: string;

    @Prop()
    averageRating: number;

    @Prop()
    createdAt: Date;

    
    @Prop({type: CategorySchema,
        required: true
    })
    category: Category;

    @Prop({type: Types.ObjectId,
        ref:Sponsor.name
    })
    sponsor : Sponsor | Types.ObjectId

    @Prop({type: [{name: {type: String}, color: {type: String} }]})
    skills : Types.Array<Record <string, any>>
}

export const BootcampSchema = SchemaFactory.createForClass(Bootcamp);