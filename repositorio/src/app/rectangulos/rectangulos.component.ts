import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-rectangulos',
  templateUrl: './rectangulos.component.html',
  styleUrls: ['./rectangulos.component.css']
})
export class RectangulosComponent implements OnInit {
  resultado : any;
  plot : any;
  r : any;
  table:any[];
  respuesta=false;
  constructor(private http : HttpClient) { }

  ngOnInit() {
  }
  graficadora(ec){
    var ecuacion = btoa(ec);
    this.http.get('http://127.0.0.1:5000/metodos/graf/'+ ecuacion).subscribe(res=>{
      this.r = res;
      this.plot = 'data:image/jpeg;base64,' + this.r.grafica;
      console.log (res);
    })
  }
  rectangulos(ec,li,ls,particiones){
    var ecuacion = btoa(ec);
    var lI=btoa(li)
    var lS=btoa(ls)
    this.http.get('http://127.0.0.1:5000/integr/rectangulos/'+ ecuacion+'/'+lI+'/'+lS+'/'+particiones).subscribe(res=>{
      this.resultado=res;
      this.table = this.resultado.rectangulo;
      this.respuesta=true;
      console.log(this.resultado);
      });
  }
}
