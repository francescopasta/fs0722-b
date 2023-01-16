import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Photo } from '../interface/photo.interface';
import { Subject , catchError, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  baseUrl = ('https://jsonplaceholder.typicode.com/photos')
  favouritesSub = new Subject<number>()
  favouritesCounter:number = 0

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<Photo[]>(this.baseUrl).pipe(catchError(err => {
      return throwError(this.getErrorMess(err.stetus))
    }))
  }

  delete(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(catchError(err => {
      return throwError(this.getErrorMess(err.status))
    }))
  }

  addFavorite(){
    this.favouritesCounter ++
    this.favouritesSub.next(this.favouritesCounter)
  }

  private getErrorMess(status:number){
    let mess = ""
    if(status==404){
      mess = "error - data Not Found"
    } else if (status==500) {
      mess = "error - server Not Found"
    } else {
      mess = "data passed succesfully"
    }
    return mess
  }
}
