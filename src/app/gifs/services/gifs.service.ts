import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apy_key = 'apeedNITsk5KRSoI4AJUrnxnb0FQ3E5x';
  private servicioURlgifs='https://api.giphy.com/v1/gifs';
  private _historial:string []=  [];

  public resultados:Gif[] = [];

  get historial(){
    //romper la referencia y devolver un nuevo arreglo
    return [...this._historial];
  }

  constructor (private http:HttpClient){
    //this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    if (localStorage.getItem('historial')){
      // confia en mi con !
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }
  }

  buscarGifs(query:string){
    query = query.trim().toLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

      // LOCALSTORAGE
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params =new HttpParams()
        .set('api_key', this.apy_key)
        .set('limit', '10')
        .set('q',query);
    console.log(params.toString());
    //url = 'https://api.giphy.com/v1/gifs/search?api_key=apeedNITsk5KRSoI4AJUrnxnb0FQ3E5x&q=naruto&limit=5';
    this.http.get<SearchGifsResponse>(`${this.servicioURlgifs}/search`, {params})
    .subscribe(response =>{
      console.log(response.data);
      this.resultados =  response.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    });

    console.log(this._historial);
  }
  
}
