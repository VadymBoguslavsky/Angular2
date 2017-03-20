import {Component} from "@angular/core";
import {Task} from "./task";
import {TaskService} from "./task.service";
import {Observable} from "rxjs";

@Component({
  selector: 'task-new',
  templateUrl: 'task-new.component.html',
  styleUrls: ['task.component.css']
})
export class TaskNewComponent {
  task = new Task;
  submitted: boolean = false;

  constructor(private taskService: TaskService) {
  }

  createTask(task: Task) {
    this.submitted = true;
    this.taskService.createTask(task)
      .subscribe(data => {
          return true
        },
        error => {
          console.log("Error creating task");
          return Observable.throw(error);
        });
  }
}
