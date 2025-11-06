import {Component, inject, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {Subscription} from 'rxjs';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {EditorModule} from 'primeng/editor';
import {DatePickerModule} from 'primeng/datepicker';
import {ButtonModule} from 'primeng/button';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FluidModule} from 'primeng/fluid';
import {InputTextModule} from 'primeng/inputtext';
import {Ripple} from 'primeng/ripple';
import {DialogConfig, Task} from "@/features/tasks/type/task";
import {TaskService} from "@/features/tasks/services/task.service";
import {TaskStore} from "@/features/tasks/state/task-store";

@Component({
    selector: 'app-create-task',
    standalone: true,
    imports: [ToastModule, DialogModule, FormsModule, EditorModule, DatePickerModule, ButtonModule, AutoCompleteModule, FluidModule, InputTextModule, Ripple],
    templateUrl: './create-task.html',
    providers: [MessageService]
})
export class CreateTaskComponent implements OnInit {
    task!: Task;
    dialogConfig: DialogConfig = { header: '', visible: false };
    dialogSubscription: Subscription;
    subscription: Subscription;

    readonly store = inject(TaskStore);

    constructor(
        private taskService: TaskService
    ) {
        this.subscription = this.taskService.selectedTask$.subscribe((data) => (this.task = data));
        this.dialogSubscription = this.taskService.dialogSource$.subscribe((data) => {
            this.dialogConfig = data;
            if (this.dialogConfig.newTask) {
                this.resetTask();
            }
        });
    }

    ngOnInit(): void {
        this.resetTask();
    }

    save() {
        this.task.id = Math.floor(Math.random() * 1000).toString();
        this.store.createTask(this.task);
        this.taskService.closeDialog();
    }

    cancelTask() {
        this.resetTask();
        this.taskService.closeDialog();
    }

    resetTask() {
        this.task = {
            id: this.task && this.task.id ? this.task.id : Math.floor(Math.random() * 1000).toString(),
            userId: this.task && this.task.userId ? this.task.userId : Math.floor(Math.random() * 1000).toString(),
            createdAt: new Date(),
        };
    }
}
