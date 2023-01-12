import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post.interface';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {

  posts:Post[] = []


  constructor(private ps:PostService) {}

  ngOnInit(): void {
    this.posts = this.ps.getPostFiltrati(true)
  }
  change(n:number){
    this.ps.updatePost(n);
  }

}
