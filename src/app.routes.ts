import {Routes} from '@angular/router';
import {AppLayout} from "@/core/layout/components/layout/app.layout";

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: 'tasklist', data: { breadcrumb: 'Task List' }, loadComponent: () => import('./app/features/tasks/components/index').then((c) => c.TaskList) },
        ]
    },
];
