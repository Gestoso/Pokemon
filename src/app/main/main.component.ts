import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  pokerandom: any;
  shinyrand: any;
  ataquesrand: any;
  ataques: any;
  pokemon: any;
  pokemonsprite: any[] = new Array(0);
  slotsconts: number = 0;
  pokemonslots: any[] = new Array(0);
  infomov: any[] = new Array(0);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  TeamBuilder(){
    this.router.navigate(['/teambuilder']);
  }
  Pokedex(){
    this.router.navigate(['/pokedex']);
  }

  Pokemon(){
    this.pokerandom = Math.floor(Math.random() * 600) + 1;
    this.shinyrand = Math.floor(Math.random() * 2)+ 1;

    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.pokerandom}`).subscribe((response) => {

      if(this.slotsconts < 6) {
        this.pokemonslots[this.slotsconts] = response;
        this.pokemonslots[this.slotsconts].shiny = this.shinyrand;
        this.pokemonslots[this.slotsconts].movimientos = this.getRandomIndices(this.pokemonslots[this.slotsconts].moves, 4);

        console.log(this.pokemonslots[this.slotsconts]);

          this.pokemonsprite[this.slotsconts] = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + this.pokemonslots[this.slotsconts].id + '.png';

        this.slotsconts++;
        console.log(this.pokemonslots);

      }

      this.pokemon = response;



        this.ataquesrand = (this.pokemonslots[0].moves);



    });



       /* this.ataquesrand = (this.pokemonslots[this.slotsconts].moves);

      this.pokemonslots[this.slotsconts].movimientos = this.getRandomIndices(this.pokemonslots[this.slotsconts].moves, 4); */
  }
 getRandomIndices(array: any[], count: number): number[] {
  const shuffled = array.slice(); // Crear una copia del array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Intercambiar elementos
  }
  return shuffled.slice(0, count);
}


}
