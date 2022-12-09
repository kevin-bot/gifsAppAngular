import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }

  buscar(){    
    const value = this.txtBuscar.nativeElement.value;
    if(value.trim().length === 0){return;}

    console.log(value);
    this.gifsService.buscarGifs(value);
    this.txtBuscar.nativeElement.value = '';
  }
}
