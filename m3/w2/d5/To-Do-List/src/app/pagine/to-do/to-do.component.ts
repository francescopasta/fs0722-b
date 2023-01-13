import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/to-do.service';
import { ToDo } from 'src/app/to-do.interface';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  todos!:ToDo[]
  nuovoToDo:string = ""
  controllo:boolean=false
  controlloDue:boolean=false
  controlloTre:boolean=false
  controlloBox:boolean=false

  constructor(private td:ToDoService) { }

  ngOnInit(): void {
    this.prova()
  }

  async prova(){
    this.todos=await this.td.getFiltered(false);
    this.controllo=true;
    this.controlloDue=true
  }

  async aggiungi(){
    if(this.nuovoToDo.trim()!=""){
      const todoMom:ToDo = {
        id:1,
        title:this.nuovoToDo,
        completed:false,
        checkBox:false
      }
      this.controllo=false;
      this.td.add(todoMom);
      this.prova();
      this.nuovoToDo = ""
    }
  }

  async aggiorna(id:number){
    this.td.update(id);
    this.prova();
  }

  async elimina(id:number){
    const momToDo:ToDo={
      id:id,
      title:"",
      completed:true,
      checkBox:true
    }
    this.td.remove(momToDo);
    this.controlloTre = true
    this.controlloDue = false
    this.prova()
  }

}
