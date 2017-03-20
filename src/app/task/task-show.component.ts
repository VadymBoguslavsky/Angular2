import {Component, OnInit, Input} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Http} from "@angular/http";
import {Task} from "./task";
import {TaskService} from "./task.service";
import {Observable} from "rxjs";

@Component({
  selector: 'task-show',
  templateUrl: 'task-show.component.html',
  styleUrls: ['task.component.css']
})

export class TaskShowComponent implements OnInit {
  id: number;
  routeId: any;
  errorMessage: any;
  returnUrl: string;
  editBtnClicked: boolean = false;

  constructor(private http: Http,
              private route: ActivatedRoute,
              private router: Router,
              private taskService: TaskService) {
  }

  @Input() task: Task;

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/tasks';
    this.routeId = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    );
    let taskRequest = this.route.params
      .flatMap((params: Params) =>
        this.taskService.getTask(+params['id']));
    taskRequest.subscribe(response => this.task = response.json());

    taskRequest.subscribe(response => {
      console.log(response);
      this.task = response.json()
    });
  }

  update(task: Task) {
    this.editBtnClicked = true;
    this.taskService.updateTask(task)
      .subscribe(data => {
        return true
      }, error => {
        console.log('Error editing Task');
        return Observable.throw(error);
      })
  }

  delete(task: Task) {
    this.taskService.deleteTask(this.task.id)
      .subscribe(data => {
          this.router.navigate([this.returnUrl]) },
        error => this.errorMessage = error)
  }
  onUpdateClicked(){
    this.router.navigate([this.returnUrl]);
    this.editBtnClicked = false;
  }

}
