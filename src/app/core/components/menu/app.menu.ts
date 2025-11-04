import {Component, ElementRef, inject, Signal, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AppMenuitem} from '@/core/components/menu-item/app.menuitem';
import {TaskStore} from "@/features/dashboard/state/task-store";
import {Task} from "@/features/dashboard/type/task";

interface MenuItem {
    label?: string;
    icon?: string;
    routerLink?: string[];
    url?: string[];
    target?: '_blank' | '_self' | '_parent' | '_top';
    routerLinkActiveOptions?: { [key: string]: any };
    items?: MenuItem[];
    separator?: boolean;
    visible?: boolean;
    disabled?: boolean;
    command?: (event?: any) => void;
    class?: string;
    style?: string;
    styleClass?: string;
    id?: string;
    urlTarget?: '_blank' | '_self' | '_parent' | '_top';
}

@Component({
    selector: '[app-menu]',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    templateUrl: './app.menu.html',
    host: {
        class: 'layout-menu-container'
    }
})
export class AppMenu {
    el: ElementRef = inject(ElementRef);

    @ViewChild('menuContainer') menuContainer!: ElementRef;

    model: MenuItem[] = [
        {
            label: 'Dashboards',
            icon: 'pi pi-home',
            items: [
                {
                    label: 'E-Commerce',
                    icon: 'pi pi-fw pi-home',
                    routerLink: ['/']
                }
            ]
        }
    ];

    // Demo Purpose Only (remove it afterward)
    readonly store = inject(TaskStore);
    readonly tasks: Signal<Task[]> = this.store.taskEntities;
}
