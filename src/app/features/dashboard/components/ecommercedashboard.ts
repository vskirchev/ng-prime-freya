import {Component, inject, Signal} from '@angular/core';
import {MessageWidget} from '../widgets/messagewidget';
import {StatsEcommerceWidget} from '../widgets/statsecommercewidget';
import {WaitingActionWidget} from '../widgets/waitingactionwidget';
import {SalesByCategoryWidget} from '../widgets/salesbycategorywidget';
import {ClientsWidget} from '../widgets/clientswidget';
import {AdManagementWidget} from '../widgets/admanagementwidget';
import {OrdersWidget} from '../widgets/orderswidget';
import {ButtonModule} from 'primeng/button';
import {Task} from "@/features/dashboard/type/task";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TaskStore} from "@/features/dashboard/state/task-store";
import {Card, CardModule} from "primeng/card";
import {ProgressSpinner, ProgressSpinnerModule} from "primeng/progressspinner";
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';



@Component({
    standalone: true,
    selector: 'dashboard-ecommerce',
    imports: [InputTextModule, TextareaModule, CardModule, ProgressSpinnerModule, MessageWidget, StatsEcommerceWidget, OrdersWidget, WaitingActionWidget,
        SalesByCategoryWidget, ClientsWidget, AdManagementWidget, ButtonModule, ReactiveFormsModule, Card, ProgressSpinner],
    templateUrl: './ecommercedashboard.html'
})
export class EcommerceDashboard {
    readonly store = inject(TaskStore);

    readonly todo: Signal<Task[]> = this.store.tasksTodo;
    readonly inProgress: Signal<Task[]> = this.store.tasksInProgress;
    readonly done: Signal<Task[]> = this.store.tasksDone;
    readonly isLoading = this.store.isLoading;

    private readonly fb = inject(FormBuilder);
    taskForm: FormGroup = this.fb.group({
        title: ['', [Validators.required, Validators.minLength(3)]],
        description: [''],
    });

    async createTask() {
        try {
            await this.store.createTask({
                title: this.taskForm.get('title')?.value,
                description: this.taskForm.get('description')?.value,
                status: 'todo',
            });
            this.taskForm.reset();
        } catch (error) {
            console.error('Error creating task:', error);
        }
    }

    async deleteTask(taskId: string) {
        if (confirm('Are you sure you want to delete this task?')) {
            try {
                await this.store.deleteTask(taskId);
            } catch (error) {
                console.error('Error deleting task:', error);
            }
        }
    }

    moveTo(taskId: string, targetStatus: Task['status']) {
        this.store.changeTaskStatus(taskId, targetStatus);
    }
}
