import { Body, Controller, Delete, Get,Param, Patch, Post,ParseUUIDPipe,ParseIntPipe } from '@nestjs/common';
import { CreateHeroesDto, UpdateHeroesDto } from './dto';
import { HeroesService } from './heroes.service';

@Controller('heroes')
export class HeroesController {

    constructor(
        private readonly heroesService: HeroesService
    ){}

    @Get()
    getAllHeroes(){
        return this.heroesService.findAll();
    }

    @Get(':id')
    getHeroesById(@Param('id',ParseUUIDPipe) id:string){
        console.log({id: id});
        return this.heroesService.findOneById(id);
    }

    @Get(':category/:publisher')
    getHeroesByPublisher(@Param('publisher') publisher:string){
        console.log({publisher: publisher});
        return this.heroesService.findByPublisher(publisher);
    }

    @Post()
    createNewHeroe(@Body() createHeroesDto: CreateHeroesDto){
        return this.heroesService.create(createHeroesDto);
    }

    @Patch(':id')
    updateHeroe(
        @Param('id', ParseUUIDPipe) id:string,
        @Body() updateHeroesDto:UpdateHeroesDto)
    {
        return this.heroesService.update(id,updateHeroesDto);
    }

    @Delete(':id')
    deleteHeroe(@Param('id',ParseIntPipe) id:string){
        return this.heroesService.delete(id);
    }
}
