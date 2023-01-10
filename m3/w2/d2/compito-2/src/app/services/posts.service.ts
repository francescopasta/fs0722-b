import { Injectable } from '@angular/core';
import { Post } from '../interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = []

  constructor() { }

  async getPost(){
    fetch('/../../assets/db.json')
    .then(data => {
    return data.json();
    }).then(res => {
      for (let i = 0; i < res.length; i++) {
        this.posts.push(res[i])
      }
      return this.posts
    })
  }
}
