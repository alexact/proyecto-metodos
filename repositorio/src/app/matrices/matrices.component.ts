import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-matrices',
  templateUrl: './matrices.component.html',
  styleUrls: ['./matrices.component.css']
})
export class MatricesComponent implements OnInit {

matrizF:any[];
matrizC:any[];
resultado:any;
matriz:any[];
m:any;
row:any;
col:any;
enviar:boolean;
  
constructor(private http:HttpClient) { 
  
  }
  ngOnInit() {
  }
  crearMatriz(x,y){
   
    this.http.get('http://127.0.0.1:5000/matrices/gaussj/'+"1/" + x + "/" +"hola").subscribe(res => {
      this.resultado=res;   
      this.matrizF=this.resultado.filas;
      this.matrizC=this.resultado.colum;
      console.log(this.resultado);
  });
    

  }
 
  valoresMatriz1(m){
   this.enviar=false;

    for(let i in this.matrizF){  
    for(let i in this.matrizC){
      this.matriz.push(0); 
      }
    }
    console.log(this.matriz);
 /*   if(this.matriz[i]!=""){
      this.enviar= true;
   }else{
     this.enviar=false;
   }
    if(this.enviar){
      this.http.get('http://127.0.0.1:5000/matrices/gaussj/2'+  m + "/"+ "hola").subscribe(res => {
      this.resultado=res;
      console.log(res)});
  }*/
}
}
