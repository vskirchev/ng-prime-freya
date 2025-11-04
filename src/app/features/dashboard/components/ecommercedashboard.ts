import { Component, inject } from '@angular/core';
import { MessageWidget } from '../widgets/messagewidget';
import { StatsEcommerceWidget } from '../widgets/statsecommercewidget';
import { WaitingActionWidget } from '../widgets/waitingactionwidget';
import { SalesByCategoryWidget } from '../widgets/salesbycategorywidget';
import { ClientsWidget } from '../widgets/clientswidget';
import { AdManagementWidget } from '../widgets/admanagementwidget';
import { OrdersWidget } from '../widgets/orderswidget';
import { CountStateStore } from '../state/count-store';
import { ButtonModule } from 'primeng/button';

@Component({
    standalone: true,
    selector: 'dashboard-ecommerce',
    imports: [MessageWidget, StatsEcommerceWidget, OrdersWidget, WaitingActionWidget, SalesByCategoryWidget, ClientsWidget, AdManagementWidget, ButtonModule],
    templateUrl: './ecommercedashboard.html'
})
export class EcommerceDashboard {
    readonly store = inject(CountStateStore);

    increment(){
        this.store.increment();
    }

    decrement(){
        this.store.decrement();
    }
}
