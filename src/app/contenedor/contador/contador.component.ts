import { Component } from "@angular/core";

@Component({
    selector: 'app-contaodr',
    template: `
    <h1>{{ title }}</h1>
    <h3>
        <span>LA BASE ES {{base}}</span>
    </h3>

    <button (click)=" acumular(base) "> +{{base}} </button>
    <span>{{numero}}</span>
    <button (click)=" acumular(-base)"> -{{base}} </button>

    
    `,
})

export class ContadorComponent {
    title: string = 'spotiapp';
  numero: number = 10;
  base: number = 5;

  acumular( valor:number ){
    this.numero+=valor;
  }
}