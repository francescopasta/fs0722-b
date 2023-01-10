import { Injectable } from '@angular/core';
import { Post } from '../interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = []

  constructor() { }

  getPosts(a){
    fetch('assets/db.json').then(data => { return data.json();})
    .then(res => {
      res.filter(p=> a)
    })
  }
}
