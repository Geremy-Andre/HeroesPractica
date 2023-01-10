import { IsString,IsOptional,IsUUID } from "class-validator";


export class UpdateHeroesDto{
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;
    @IsString()
    @IsOptional()
    readonly superhero?: string;
    @IsString()
    @IsOptional()
    readonly publisher?: string;
    @IsString()
    @IsOptional()
    readonly alter_ego?: string;
    @IsString()
    @IsOptional()
    readonly first_appearance?: string;
    @IsString()
    @IsOptional()
    readonly characters?: string;
}