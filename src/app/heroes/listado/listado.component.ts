import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

    heroe: string [] = ['spiderman','ironman', 'Hulk', 'thor'];
    borrado: string = '';
    borrarHero(){

      this.borrado= this.heroe.shift()||"";   
    }
    
  
  ngOnInit(): void {
    console.log('ngOnInit')

  }

}
