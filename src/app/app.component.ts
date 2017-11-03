import { Component }   from '@angular/core';
import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [HeroService]
           })

export class AppComponent 
{
  title = 'Tour of Heroes';
  hero: Hero = {id: 1,
                name: 'Windstorm'
               };
  heroes: Hero[];
  selectedHero: Hero;

  // The constructor itself does nothing. 
  // The parameter simultaneously defines a private heroService property 
  // and identifies it as a HeroService injection site.
  constructor(private heroService: HeroService)
  {

  }

  onSelect(hero: Hero): void
  {
    this.selectedHero = hero;
  }
}