import { Component } from "@angular/core";


@Component({

    selector:'app-heroe',
    templateUrl:`heroe.component.html`

})
export class HeroeComponent{
    nombre: string = 'IronMan'
    edad: number = 23
    
    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }
    obtenerNombre():string{
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(){
        this.nombre ="Spiderman";
    }
    cambiarEdad(){
        this.edad= 41;
    }
}