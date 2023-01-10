import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';
import { PublishersModule } from './publishers/publishers.module';
import { AlumnoModule } from './alumno/alumno.module';

@Module({
  imports: [HeroesModule, PublishersModule, AlumnoModule],
  controllers: [],
  providers: [],
  exports:[]
})
export class AppModule {}
