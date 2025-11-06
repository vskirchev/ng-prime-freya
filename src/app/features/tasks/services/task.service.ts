import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {DialogConfig, Task} from "../type/task";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    dialogConfig: DialogConfig = {
        visible: false,
        header: '',
        newTask: false
    };

    private baseUrl = 'http://localhost:5000/todos'
    private dialogSource = new BehaviorSubject<DialogConfig>(this.dialogConfig);
    private selectedTask = new Subject<Task>();

    dialogSource$ = this.dialogSource.asObservable();
    selectedTask$ = this.selectedTask.asObservable();

    constructor(private http: HttpClient) {
    }

    getTasks(){
        return this.http.get<Task[]>(`${this.baseUrl}`);
    }

    createTask(task: Task) {
        return this.http.post<any>(`${this.baseUrl}`, task);
    }

    removeTask(id: string) {
        return this.http.delete<any>(`${this.baseUrl}/${id}`)
    }

    completeTask(id: string) {
        return this.http.put<any>(`${this.baseUrl}/${id}/complete`, {})
    }

    showDialog(header: string, newTask: boolean) {
        this.dialogConfig = {
            visible: true,
            header: header,
            newTask: newTask
        };

        this.dialogSource.next(this.dialogConfig);
    }

    onTaskSelect(task: Task) {
        this.selectedTask.next(task);
    }

    closeDialog() {
        this.dialogConfig = {
            visible: false
        };

        this.dialogSource.next(this.dialogConfig);
    }
}
