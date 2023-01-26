import { Component, OnInit } from '@angular/core';
import { secondTaskService } from './services/secondTask.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent implements OnInit {
  get elements() {
    return this.secondTaskService.elements;
  }
  constructor(private secondTaskService: secondTaskService) {}

  ngOnInit(): void {}
}
