import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post.interface';
import { PostsService } from 'src/app/posts.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    posts: Post[] = [];
    conferma: boolean = false;
    codiceVerifica: string = '';
    ricerca: string = '';
    constructor(private ps: PostsService, private router: Router) { }

    ngOnInit(): void {
        this.caricaPost();
    }

    cancellaPost(id: string) {
        this.conferma = true;
        this.codiceVerifica = id;
    }

    confermaCanc(id: string) {
        console.log(id);
        this.ps.delete(id).subscribe(() => {
            this.caricaPost();
            this.conferma = false;
        });
    }

    annullaCanc() {
        this.conferma = false;
    }

    caricaPost() {
        this.ps.getPosts().subscribe((ris) => {
            this.posts = ris;
        });
    }

    nuovoPost() {
        if (this.posts.length >= 100) {
            alert(
                'Spazio massimo della pagina raggiunto, eliminare post per aggiungerne di nuovi'
            );
        } else {
            this.router.navigate(['/create']);
        }
    }

    guardaPost(id: string) {
        this.router.navigate(['/view/:' + id]);
    }

    cerca() {
        // this.ricerca = form.value.ricerca
        if (this.posts[0].id == this.ricerca) {
            window.location.href = '#'
        }
        else {
            let controllo: boolean = false;
            for (let i of this.posts) {
                if (controllo) {
                    break;
                }
                if (i.id == this.ricerca) {
                    this.ricerca = (Number(this.ricerca) - 1).toString()
                    window.location.href = `#${this.ricerca}`
                    controllo = true;
                }
            }
            if (!controllo) {
                alert('post not found')
            }
        }
        this.ricerca = ''
    }

}
