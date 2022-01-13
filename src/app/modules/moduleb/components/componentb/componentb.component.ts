import { Component, OnInit } from '@angular/core';
import { Task } from '@filipemoraes/pattern-lib';

@Component({
  selector: 'app-componentb',
  templateUrl: './componentb.component.html',
  styleUrls: ['./componentb.component.scss'],
})
export class ComponentbComponent implements OnInit {
  tasks: Task[];

  constructor() {}

  ngOnInit(): void {
    this.tasks = [
      {
        id: '1',
        title: 'Tarefa A',
        state: 'TASK_ARCHIVED',
      },
      {
        id: '2',
        title: 'Tarefa B',
        state: 'ACTIVE',
      },
    ];
  }
}
