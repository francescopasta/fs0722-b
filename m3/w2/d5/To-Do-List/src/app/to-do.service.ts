import { Injectable } from '@angular/core';
import { ToDo } from './to-do.interface';

@Injectable({
  providedIn: 'root'
})

export class ToDoService {
  toDos:ToDo[]=[];

  constructor() { }

  getFiltered(a:boolean): Promise<ToDo[]>{
    return new Promise((res)=>{
      setTimeout(()=>{
        res(this.toDos.filter(p=>p.completed==a))
      },2000);
    });
  }

  add(toDo:Omit<ToDo,'id'>): Promise<ToDo>{
    return new Promise((res)=>{
      setTimeout(()=>{
       const newTodo:ToDo={...toDo,id:this.toDos.length}
       this.toDos.push(newTodo);
       res(newTodo);
      },2000);

    })
  }

  remove(toDo:Omit<ToDo,'completed'>): Promise<number>{
    return new Promise((res)=>{
      setTimeout(()=>{
      this.toDos=this.toDos.filter((tod)=>tod.id !== toDo.id);
      res(toDo.id);
      },2000);

    })
  }

  update(id:number): Promise<ToDo>{
    return new Promise((res)=>{
      this.toDos[id].checkBox = true
      setTimeout(()=>{
        this.toDos[id].completed=true;
      },2000);
    })
  }

}


