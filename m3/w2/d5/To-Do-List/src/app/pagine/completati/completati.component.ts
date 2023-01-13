import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/to-do.interface';
import { ToDoService } from 'src/app/to-do.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {
  todos:ToDo[]=[]
  controllo:boolean=false
  controlloDue:boolean=true
  controlloTre:boolean=false

  constructor(private tdLemon:ToDoService) { }

  ngOnInit(): void {
    this.prova()
  }
  async prova(){
    this.todos=await this.tdLemon.getFiltered(true);
    this.controllo=true;
    this.controlloDue=false
  }
  async elimina(id:number){
    const momToDo:ToDo={
      id:id,
      title:"",
      completed:true,
      checkBox:true
    }
    this.tdLemon.remove(momToDo);
    this.controlloTre = true
    this.controllo = false
    this.prova();
  }

}
