import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.css']
})
export class MatrizComponent implements OnInit {

  matriz:any[];
  resultado:any;
    constructor(private http:HttpClient) { }
  
    ngOnInit() {
    }
   
    gaussJordan(m,coeficientes,b){
      this.http.get('http://127.0.0.1:5000/matrices/gaussj/2'+  m + "/"+ coeficientes + "/"+ b).subscribe(res => {
        this.resultado=res;
        this.matriz=this.resultado;
        console.log(res)});
    }

}
