import { Component } from '@angular/core';


interface Options {
  id: number;
  name: Dificulty;
}

enum Dificulty {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
}

enum Optcolors {
  Green = "optgreen",
  Blue = "optblue",
  Black = "optblack"
}

enum BtnColors {
  Green = "green",
  Red = "red"
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  options: Array<Options> = [{ id: 1, name: Dificulty.Easy },{ id: 2, name: Dificulty.Medium },{ id: 3, name: Dificulty.Hard }];

  dificulty = Dificulty;
  title = 'todo-app';
  visible = true;
  list: any = [];
  optName: string = this.dificulty.Easy;

  taskname: string = '';
  secondlist: any[] = [];
  thirdlist: any[] = [];


  buttoncolors = [BtnColors.Green,BtnColors.Red];

  optcolors = [Optcolors.Green,Optcolors.Blue,Optcolors.Black];

  addtask(x: string) {
    if (x !== '') {
      this.list.push({ id: this.list.length, name: x, opts: this.optName });
      this.visible = false;
      this.taskname = '';
    }
  }
  removetask(id: number) {
    this.list.splice(id, 1);
  }
  addtoProgress(x: string, id: number) {
    this.secondlist.push({ id: this.secondlist.length, name: x, opts: this.optName  });
    this.list.splice(id, 1);
  }
  addtoDone(x: string, id: number) {
    this.thirdlist.push({ id: this.thirdlist.length, name: x, opts: this.optName  });
    this.secondlist.splice(id, 1);
  }
  addfromDonetoProgress(x: string, id: number) {
    this.thirdlist.splice(id, 1);
    this.secondlist.push({ id: this.thirdlist.length, name: x, opts: this.optName  });
  }
  removesecondtask(x: string, id: number) {
    this.list.push({ id: this.thirdlist.length, name: x, opts: this.optName  });
    this.secondlist.splice(id, 1);
  }
  removethirdtask(id: number) {
    this.thirdlist.splice(id, 1);
  }
}
