import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {Task} from "./task";

@Injectable()
export class TaskService {
  headers: Headers;
  options: RequestOptions;
  private tasksUrl = 'https://cadymapi.herokuapp.com';

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({headers: this.headers});
  }

  getTasks(): Observable<Task[]> {
    return this.http.get(this.tasksUrl)
      .map((response: Response) => <Task[]>response.json())
  }

  getTask(id: number) {
    return this.http.get(this.tasksUrl + "/" + id + '.json');
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post(this.tasksUrl, JSON.stringify(task),
      this.options).map((res: Response) => res.json());
  }

  deleteTask(id: number): Observable<Task>{
    const url = `${this.tasksUrl}/${id}`;
    return this.http.delete(url, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateTask(task: Task): Observable<Task>{
    const url = `${this.tasksUrl}/${task.id}`;
    return this.http.put(url, JSON.stringify(task),
    this.options).map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private extractData(res: Response){
    let body = res.json();
    return body || {};
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
