import { Component, OnInit } from '@angular/core';
import { firstTaskService } from './services/firstTask.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  get users() {
    return this.firstTaskService.users;
  }
  list: boolean = true;
  loading: boolean = false;
  constructor(private firstTaskService: firstTaskService) {}
  showuser: boolean = false;
  ngOnInit(): void {}
  click() {
    this.list = false;
    setTimeout(() => {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.showuser = true;
      }, 1000);
    }, 1000);
  }
}
