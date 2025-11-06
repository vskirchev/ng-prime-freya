import {Component, inject, OnDestroy, Signal} from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {TaskListComponent} from "@/features/tasks/components/task-list/task-list";
import {CreateTaskComponent} from "@/features/tasks/components/create-task/create-task";
import {TaskService} from "@/features/tasks/services/task.service";
import {Task} from "@/features/tasks/type/task";
import {TaskStore} from "@/features/tasks/state/task-store";
import {ProgressSpinner } from 'primeng/progressspinner';


@Component({
    standalone: true,
    imports: [ButtonModule, TaskListComponent, CreateTaskComponent, RippleModule, ProgressSpinner],
    templateUrl: './index.html',
    providers: [TaskService]
})
export class TaskList  {
    readonly store = inject(TaskStore);

    readonly tasksInProgress: Signal<Task[]> = this.store.tasksTodo;
    readonly tasksDone: Signal<Task[]> = this.store.tasksDone;
    readonly isLoading: Signal<boolean> = this.store.isLoading;

    constructor(private taskService: TaskService) {
    }

    showDialog() {
        this.taskService.showDialog('Create Task', true);
    }
}
