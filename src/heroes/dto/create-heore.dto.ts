import { IsString } from "class-validator";


export class CreateHeroesDto{
    @IsString()
    readonly superhero: string;
    @IsString()
    readonly publisher: string;
    @IsString()
    readonly alter_ego: string;
    @IsString()
    readonly first_appearance: string;
    @IsString()
    readonly characters: string;
}