import { Injectable } from '@angular/core';
import { Post } from './post.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { throwError, catchError, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class PostsService {
    link: string = 'https://63ce47bf6d27349c2b6a74a0.mockapi.io/post/';

    constructor(private http: HttpClient, private router: Router) { }


    getPosts() {
        return this.http.get<Post[]>(this.link).pipe(
            catchError((err) => {
                return throwError(this.getMessaggioErrore(err.stato));
            })
        );
    }


    edit(id: string, post: Post) {
        this.http.put<Post>(this.link + id, post).subscribe(() => {
            this.torna()
        })
    }

    create(post: Post) {
        this.http.post(this.link, post).subscribe(() => {
            this.torna()
        })
    }

    delete(id: string) {
        return this.http.delete(this.link + id);
    }

    torna() {
        this.router.navigate(['/'])
    }

    getMessaggioErrore(stato: number) {
        let messaggio: string = '';
        if (199 < stato && stato < 299) {
            messaggio = 'TUTTO OK';
        } else if (stato < 399) {
            messaggio = 'PROBLEMI DI COMUNICAZIONE DATI';
        } else {
            messaggio = 'PROBLEMI GENERICI';
        }
    }

}
