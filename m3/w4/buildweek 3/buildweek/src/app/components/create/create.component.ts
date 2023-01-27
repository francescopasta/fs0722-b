import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/post.interface';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

    post: Post = {
        userId: 0,
        title: '',
        body: '',
        id: ''
    };

    posts: Post[] = [];

    merdaccia: string = '';

    constructor(private ps: PostsService, private http: HttpClient) { }
    ngOnInit(): void { }

    tornaHome() {
        this.ps.torna();
    }

    crea(form: NgForm) {
        if (form.value.body == '' || form.value.title == '' || form.value.id == '') {
            alert('fill all inputs')
        }
        else {
            this.post.body = form.value.body;
            this.post.title = form.value.title;
            console.log(form.value)
            this.post.userId = form.value.id;

            this.ps.getPosts().subscribe((ris) => {
                this.posts = ris;
            });
            let indiceMaggiore: number = 0;
            for (let i of this.posts) {
                if (Number(i.id) > indiceMaggiore) {
                    indiceMaggiore = Number(i.id);
                }
            }
            indiceMaggiore++;
            this.post.id = indiceMaggiore.toString();
            this.ps.create(this.post)
        }
    }
}
