import {IsNotEmpty, IsAlpha, IsNumber, IsInt, Min, Max, IsPositive} from 'class-validator'
export class CreateBootcampDto {
    @IsNotEmpty()
    @IsAlpha()
    readonly name: string;
    
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    
    readonly phone: number;
    

    readonly address: string;

    @IsInt()
    @IsNotEmpty()
    @Min(0)
    @Max(10)
    
    readonly averageRating: number;
    
    readonly createdAt: Date;

}
