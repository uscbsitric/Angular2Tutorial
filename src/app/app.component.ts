import { Component, OnInit }   from '@angular/core';
import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [HeroService]             // teach the injector how to make a HeroService
                                                 // The providers array tells Angular to create a fresh instance of the HeroService when it creates an AppComponent. 
                                                 // The AppComponent, as well as its child components, can use that service to get hero data.
           })

export class AppComponent implements OnInit
{
  title = 'Tour of Heroes';
  hero: Hero = {id: 1,
                name: 'Windstorm'
               };
  heroes: Hero[];
  selectedHero: Hero;

  // The constructor itself does nothing. 
  // The parameter simultaneously defines a private heroService property <-- VERY IMPORTANT NOTE, THIS ONE IS CREATING A VARIABLE ON THE FLY
  // and identifies it as a HeroService injection site.
  // Now Angular knows to supply an instance of the HeroService when it creates an AppComponent.
  constructor(private heroService: HeroService)                       // <-- VERY IMPORTANT NOTE, THIS ONE IS CREATING A VARIABLE ON THE FLY
  {

  }

  ngOnInit(): void
  {
    this.getHeroes();
  }

  getHeroes(): void
  {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void
  {
    this.selectedHero = hero;
  }
}