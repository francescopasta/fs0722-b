import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/post.interface';
import { PostsService } from 'src/app/posts.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
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
                    console.log(this.post)
                }
            }
        })
    }

    tornaHome() {
        this.ps.torna();
    }

    modifica(form: NgForm) {
        if (form.value.body == '' || form.value.title == '') {
            alert('fill all inputs')
        }
        else {
            this.post.body = form.value.body;
            this.post.title = form.value.title;
            this.ps.edit(this.post.id, this.post)
        }

    }
}
