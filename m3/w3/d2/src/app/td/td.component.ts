import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-td',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.scss']
})
export class TdComponent implements OnInit {

  @ViewChild('form', {static: true}) form!: NgForm

  constructor() { }

  heroForm = {
    nome: '',
    alterEgo: '',
    potere: '',
    pianeta: '',
    debolezza: ''

  }

  superPoteri = [
    {
      label: 'faccia di villano',
      value: 'faccia di villano'
    },
    {
      label: 'occhi di procida',
      value: 'occhi di procida'
    },
    {
      label: 'mani di sasso',
      value: 'mani di sasso'
    },
    {
      label: 'giudice di X Factor',
      value: 'giudice di X Factor'
    }
  ]


  hero:any = {
    nome: '',
    alterEgo: '',
    superPotere: '',
    nemico: '',
    pianeta: '',
    debolezza: ''
  }

  ngOnInit(): void {
  }

  submit() {
    console.log('Form inviato: ', this.form);
    this.form.reset();
  }

}
