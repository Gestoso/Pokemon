import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-team-builder',
  templateUrl: './team-builder.component.html',
  styleUrls: ['./team-builder.component.css']
})
export class TeamBuilderComponent implements OnInit {
  private pokemons: any;
  private pokemon: any;
  pokemonsprite: any[] = new Array(0);
  slotsconts: number = 0;
  pokemonslots: any[] = new Array(0);
  infomov: any[] = new Array(0);

  pokemonform = new FormControl('');

constructor(
  private http: HttpClient,

){

}
  ngOnInit() {
    console.log('Hola');

    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').subscribe((response) => {
      this.pokemons = response;
  });
  setTimeout(() => {
    console.log(this.pokemons);

  }, 1000);
  for (let i = 0; i < 6; i++) {
    const movimientos = [];
    for (let j = 0; j < 4; j++) {
      const movimiento = {};
      movimientos.push(movimiento);
    }
    this.infomov.push({ movimientos: movimientos });
  }


  }

  Buscar() {
    const pokemons = this.pokemonform.value;

    this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemons}`).subscribe((response) => {
      if(this.slotsconts < 6) {
        this.pokemonslots[this.slotsconts] = response;
        this.pokemonslots[this.slotsconts].movimientos = this.getRandomIndices(this.pokemonslots[this.slotsconts].moves, 4);
        console.log(this.pokemonslots);

        this.slotsconts++;
        for (let i = 0; i < 4; i++){
          this.http.get((this.pokemonslots[this.slotsconts-1].movimientos[i].move.url)).subscribe((response) => {
            this.pokemonslots[this.slotsconts-1].movimientos[i] = response;
            console.log(this.pokemonslots[this.slotsconts-1].movimientos[i].type.name);

            console.log(this.pokemonslots);
        })
        }
        console.log(this.pokemonslots[this.slotsconts]);
        console.log(this.pokemonslots);
        console.log(this.pokemonslots[this.slotsconts-1].types[0].type.name);
      }


    });

/* setTimeout(() => {
  for (let i = 0; i < this.pokemonslots[this.slotsconts-1].movimientos[3]; i++){
      this.http.get((this.pokemonslots[this.slotsconts-1].movimientos[i].move.url).tostring).subscribe((response) => {
        this.infomov = response;
        console.log(this.infomov);


    })
    }
    console.log(this.infomov);

}, 1000); */


  }
  getRandomIndices(array: any[], count: number): number[] {
    const shuffled = array.slice(); // Crear una copia del array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Intercambiar elementos
    }
    return shuffled.slice(0, count);
  }

  getPokemonTypeClass(type: string): string {
    switch (type) {
      case 'normal':
        return 'normal';
      case 'fire':
        return 'fire';
      case 'water':
        return 'water';
      case 'electric':
        return 'electric';
      case 'grass':
        return 'grass';
      case 'ice':
        return 'ice';
      case 'fighting':
        return 'fighting';
      case 'poison':
        return 'poison';
      case 'ground':
        return 'ground';
      case 'flying':
        return 'flying';
      case 'psychic':
        return 'psychic';
      case 'bug':
        return 'bug';
      case 'rock':
        return 'rock';
      case 'ghost':
        return 'ghost';
      case 'dragon':
        return 'dragon';
      case 'dark':
        return 'dark';
      case 'steel':
        return 'steel';
      case 'fairy':
        return 'fairy';


        default:
        return '';
    }
  }
}
