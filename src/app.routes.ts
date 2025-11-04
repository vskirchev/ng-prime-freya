import {Routes} from '@angular/router';
import {AppLayout} from '@/core/components/layout/app.layout';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', data: { breadcrumb: 'E-Commerce Dashboard' }, loadComponent: () => import('./app/features/dashboard/components/ecommercedashboard').then((c) => c.EcommerceDashboard) },
        ]
    },
];
