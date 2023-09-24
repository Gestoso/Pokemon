import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit{

  private allpokemons: any;
   kanto: any[] = new Array(0);
   johto: any[] = new Array(0);
   hoenn: any[] = new Array(0);
   sinnoh: any[] = new Array(0);
   teselia: any[] = new Array(0);
   kalos: any[] = new Array(0);
   alola: any[] = new Array(0);
   galar: any[] = new Array(0);
  public show_kanto = false;
  public show_johto = false;
  public show_hoenn = false;
  public show_sinnoh = false;
  public show_teselia = false;
  public show_kalos = false;
  public show_alola = false;
  public show_galar = false;

  constructor(
    private http: HttpClient
    ){
  }

  ngOnInit(): void {
this.http.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').subscribe((response) => {
      this.allpokemons = response;
      console.log("All Pokemons", this.allpokemons);
  });
  }

  kantofunction(){
      for (let i = 0; i < 151; i++){
     this.kanto[i] = this.allpokemons.results[i];
     this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.kanto[i].name}`).subscribe((response) => {
        this.kanto[i] = response;
  });
   }
   setTimeout(() => {
    this.show_kanto = true;
   }, 2000);
   console.log(this.kanto);
  }

  johtofunction() {
    for (let i = 0; i < 100; i++){
      this.johto[i] = this.allpokemons.results[i+151];
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.johto[i].name}`).subscribe((response) => {
         this.johto[i] = response;
   });
    }
    setTimeout(() => {
      this.show_johto = true;
     }, 2000);
    console.log(this.johto);
  }

  hoennfunction(){
    for (let i = 0; i < 135; i++) {
      this.hoenn[i] = this.allpokemons.results[i + 251];
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.hoenn[i].name}`).subscribe((response) => {
         this.hoenn[i] = response;
   });
    }
    setTimeout(() => {
      this.show_hoenn = true;
     }, 2000);
     console.log(this.hoenn);
  }

  sinnohfunction(){
    for (let i = 0; i < 107; i++){
      this.sinnoh[i] = this.allpokemons.results[i + 386];
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.sinnoh[i].name}`).subscribe((response) => {
        this.sinnoh[i] = response;
  });
}
setTimeout(() => {
  this.show_sinnoh = true;
 }, 2000);
 console.log(this.sinnoh);
  }

  teseliafunction(){

  }

kalosfunction(){

}

alolafunction(){

}

galarfunction(){

}

}

