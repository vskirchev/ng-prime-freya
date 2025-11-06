import {ChangeDetectionStrategy, Component, inject, Input, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Menu, MenuModule} from 'primeng/menu';
import {CommonModule} from '@angular/common';
import {CheckboxModule} from 'primeng/checkbox';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {AvatarModule} from 'primeng/avatar';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {FormsModule} from '@angular/forms';
import {TaskService} from "@/features/tasks/services/task.service";
import { Task } from "../../type/task";
import {TaskStore} from "@/features/tasks/state/task-store";

@Component({
    selector: 'app-task-list',
    standalone: true,
    imports: [CommonModule, CheckboxModule, AvatarGroupModule, AvatarModule, MenuModule, ButtonModule, RippleModule, FormsModule],
    templateUrl: './task-list.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {
    @Input() taskList!: Task[];
    @Input() title!: string;

    @ViewChild('menu') menu!: Menu;

    menuItems: MenuItem[] = [];
    clickedTask!: Task;

    readonly store = inject(TaskStore);

    constructor() {}

    ngOnInit(): void {
        this.menuItems = [
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => this.handleDelete()
            }
        ];
    }

    parseDate(date: Date) {
        let d = new Date(date);
        return d.toUTCString().split(' ').slice(1, 3).join(' ');
    }

    handleDelete() {
        this.store.removeTask(this.clickedTask.id);
    }

    toggleMenu(event: Event, task: Task) {
        this.clickedTask = task;
        this.menu.toggle(event);
    }

    onCheckboxChange(event: any, task: Task) {
        event.originalEvent.stopPropagation();
        this.store.completeTask(task.id);
    }
}
