import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Task} from "./task";
import {TaskService} from "./task.service";


@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService,
              private router: Router) {
  }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getTasks());
  }

  getTasks() {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  goToShow(task: Task): void {
    let taskLink = ['/tasks', task.id];
    this.router.navigate(taskLink);
  }

}
