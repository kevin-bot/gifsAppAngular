import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  
  ngOnInit(): void {
  }  
  
  get historial(){
    return this.gifsService.historial;
  }

  buscar(termino:string){
    console.log(termino);
    this.gifsService.buscarGifs(termino);
  }
  
  constructor(private gifsService:GifsService) { }
}
