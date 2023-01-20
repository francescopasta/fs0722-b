import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from 'src/app/components/movies/movie.interface';
import { throwError, catchError, Subject } from 'rxjs'
import { Favorite } from './favorite.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
    indirizzo:string= 'http://localhost:4201'
  constructor(private http:HttpClient) { }


  getMovies() {
    return this.http.get<Movie[]>(this.indirizzo + '/movies-popular').pipe(catchError(err => {
        return throwError(this.getMessaggioErrore(err.stato));
    }));
}

getMessaggioErrore(stato: number) {
    let messaggio:string = '';
    if (199 < stato && stato < 299) {
        messaggio = 'TUTTO OK';
    } else if (stato < 399) {
        messaggio = 'PROBLEMI DI COMUNICAZIONE DATI';
    } else {
        messaggio = 'PROBLEMI GENERICI';
    }
}


//merda di francesco

setFav(favorite:Partial<Favorite>){
    console.log("favorite",favorite);
    return this.http.post('http://localhost:4201/favorites/', favorite).subscribe();
  }

  cancFav(movieId: number){
    return this.http.delete('http://localhost:4201/favorites/' + movieId).subscribe();
  }

  getFav(){
   return this.http.get<Favorite[]>('http://localhost:4201/favorites');
  }

}
