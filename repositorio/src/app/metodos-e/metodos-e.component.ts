import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-metodos-e',
  templateUrl: './metodos-e.component.html',
  styleUrls: ['./metodos-e.component.css']
})
export class MetodosEComponent implements OnInit {
  
  
  resultado : any;
  plot :any;
  respuesta=false;
  constructor(private http : HttpClient) { }

  ngOnInit() {

  }

 

  evaluar(ecuacion, valor,limI,limS,muestreo){
var ec =btoa(ecuacion);
var val=btoa(valor)
console.log(limI,limS,muestreo);
this.http.get('http://127.0.0.1:5000/Evaluador/'+ ec + "/"+ val + '/' + limI + '/' + limS + '/' + muestreo).subscribe(res => {
  this.resultado=res;
  this.plot = 'data:image/jpeg;base64,' + this.resultado.grafica;
  this.respuesta=true;
  console.log(res)});

  }

}


