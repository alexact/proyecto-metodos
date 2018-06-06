import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {
  r:any;
  resultado:any;
  num:string;
  base:string;
  decimales:any;
  binarios:any;
  octales:any;
  hexadecimales:any;
 
   constructor(private http:HttpClient) { }
 
   ngOnInit() {
   }
 
   
  converBases(num,opcion){

   console.log(num,opcion);
   this.http.get('http://127.0.0.1:5000/basesYRe/bases/'+ num + "/"+ opcion).subscribe(res => {
   this.resultado=res;
   this.decimales = this.resultado.base10;
   this.octales=this.resultado.base8;
   this.binarios=this.resultado.base2;
   this.hexadecimales = this.resultado.base16;
   
   console.log(this.resultado);
   });
     }
}
