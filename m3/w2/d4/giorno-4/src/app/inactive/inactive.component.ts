import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../interface/post.interface';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.scss']
})
export class InactiveComponent implements OnInit {

  posts:Post[] = []

  constructor(private ps:PostService) {
   }

  ngOnInit(): void {
    this.posts = this.ps.getPostFiltrati(false)
  }
  ngOnChanges():void{
    console.log('to mare omo')
    this.posts = this.ps.getPostFiltrati(false)
  }
  change(n:number){
    this.ps.updatePost(n);
  }

}
