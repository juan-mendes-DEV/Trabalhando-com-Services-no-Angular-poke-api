import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonServicesService } from 'src/app/services/pokemon-services.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon?:PokemonData




  constructor(private service:PokemonServicesService) {
    this.pokemon  = {
      id : 0,
      name:'',
      sprites:{
        front_default:''
      },
      types:[]

    }
  }

  ngOnInit(): void {
    this.getPokemon('pikachu')
  }
  getPokemon(serachName:string){
    this.service.getPokemon(serachName).subscribe(
      {
        next: (res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }
        },
        error: (err) => console.log('not found')
      })
  }
}
