import { Injectable } from '@angular/core';
import { Post } from '../interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  allPosts:Post[] = [
    {
        id:1,
        body:"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
        title:"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
        active:true,
        type:"news"
    },
    {
        id:2,
        body:"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
        title:"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
        active:true,
        type:"politic"
    },
    {
        id:3,
        body:"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
        title:"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
        active:true,
        type:"education"
    },
    {
        id:4,
        body:"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
        title:"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
        active:false,
        type:"news"
    },
    {
        id:5,
        body:"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
        title:"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
        active:false,
        type:"politic"
    }
]


  getPostFiltrati(a:boolean) {
    return this.allPosts.filter(p=>p.active==a)
  }

  updatePost(n:number){
    for(let i=0;i<this.allPosts.length;i++){
      if(this.allPosts[i].id==n){
        if(this.allPosts[i].active){
          this.allPosts[i].active=false;
        }
        else{
          this.allPosts[i].active=true;
        }
      }
    }
  }
}

