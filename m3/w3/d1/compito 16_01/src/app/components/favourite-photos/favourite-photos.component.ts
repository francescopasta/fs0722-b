import { Component, OnInit } from '@angular/core';
import { FotosService } from 'src/app/service/fotos.service';
import { Photo } from 'src/app/interface/photo.interface';

@Component({
  selector: 'app-favourite-photos',
  templateUrl: './favourite-photos.component.html',
  styleUrls: ['./favourite-photos.component.scss']
})
export class FavouritePhotosComponent implements OnInit {

  foto:Photo[] = []
  done:boolean = false
  piaciuti:number = 0

  constructor(private ps:FotosService) { }

  ngOnInit(): void {
    this.ps.get()
    .subscribe(
      (data) => {
        this.foto = data
        console.log('Hello World' + this.foto + ' ' + data)
        this.done = true
      }
    )
  }

  elimina(idolo:number) {
    this.ps.delete(idolo)
    .subscribe(()=>{
      this.foto = this.foto.filter((img)=>img.id != idolo)
    })
  }

  miPiace() {
    this.ps.addFavorite()
    this.piaciuti = this.ps.favouritesCounter
  }

}
