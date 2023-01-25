import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/posts.service';
import { Post } from 'src/app/post.interface';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
    posts: Post[] = [];
    post: Post = {
        userId: 0,
        title: '',
        body: '',
        id: ''
    }
    constructor(private ar: ActivatedRoute, private ps: PostsService) { }

    ngOnInit(): void {
        let id: number = this.ar.snapshot.params['id'];
        this.ps.getPosts().subscribe((ris) => {
            this.posts = ris;
            for (let i of this.posts) {
                if (Number(i.id) == id) {
                    this.post = i;
                }
            }
        });

    }

    tornaHome() {
        this.ps.torna();
    }

}
