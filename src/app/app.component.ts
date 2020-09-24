import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  public imglink: string;
  public nombre: string;
  public edad:string;
  public sintoma:string;

  constructor(){
    this.imglink = "https://i.blogs.es/68e984/jinx_article_banner/450_1000.jpg"
    this.nombre = "Nombre: Jinx "
    this.edad = "Edad: 18 "
    this.sintoma = "Sintima/s: Muy Nashe, otro , otro"

  }
}
