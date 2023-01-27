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
    decisione: string = '';
    constructor(private ar: ActivatedRoute, private ps: PostsService) { }

    ngOnInit(): void {
        let id: string = this.ar.snapshot.params['id'];
        this.decisione = id;
        this.ps.getPosts().subscribe((ris) => {
            this.posts = ris;
            for (let a of this.posts) {
                if (a.id == id) {
                    this.post = a;
                }
            }
        });

    }

    tornaHome() {
        this.ps.torna();
    }

}
