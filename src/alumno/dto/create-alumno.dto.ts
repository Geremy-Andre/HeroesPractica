import { Type } from "class-transformer";
import { IsString, IsNumber, IsPositive } from "class-validator";

export class CreateAlumnoDto {
    @IsString()
    nombre: string;
    @IsString()
    curso: string;
    @IsNumber()
    @Type(()=>Number)
    @IsPositive()
    nota1: number;
    @IsNumber()
    @Type(()=>Number)
    @IsPositive()
    nota2: number;
}
