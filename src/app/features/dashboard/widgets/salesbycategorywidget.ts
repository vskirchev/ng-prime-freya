import { LayoutService } from '@/core/service/layout.service';
import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {ChartModule} from 'primeng/chart';
import {debounceTime, Subscription} from 'rxjs';

@Component({
    selector: 'sales-by-category-widget',
    standalone: true,
    imports: [ChartModule],
    template: `
        <div class="card w-full">
            <div class="card-header gap-4 pb-2">
                <div class="card-title">
                    <div class="font-semibold mb-2">Sales By Category</div>
                    <p class="subtitle">Categorized sales data</p>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <ul class="list-none p-0 m-0">
                    <li class="mb-4 flex items-center"><i class="pi pi-circle-fill text-primary-300 mr-2"></i><span>Watches</span></li>
                    <li class="mb-4 flex items-center"><i class="pi pi-circle-fill text-orange-300 mr-2"></i><span>Clothing</span></li>
                    <li class="mb-4 flex items-center"><i class="pi pi-circle-fill text-green-300 mr-2"></i><span>Gadgets</span></li>
                    <li class="mb-4 flex items-center"><i class="pi pi-circle-fill text-cyan-300 mr-2"></i><span>Accessories</span></li>
                </ul>
                <p-chart type="doughnut" [data]="pieData" [options]="pieOptions" height="140px" width="140px"></p-chart>
            </div>
        </div>
    `,
    host: {
        class: 'flex col-span-12 md:col-span-6 xl:col-span-12'
    }
})
export class SalesByCategoryWidget implements OnInit, OnDestroy {
    layoutService = inject(LayoutService);

    pieData: any;

    pieOptions: any;

    subscription!: Subscription;

    constructor() {
        this.subscription = this.layoutService.configUpdate$.pipe(debounceTime(50)).subscribe(() => {
            this.initChart();
        });
    }

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        //sales by category pie chart
        this.pieData = {
            labels: ['Watches', 'Clothing', 'Gadgets', 'Accessories'],
            datasets: [
                {
                    data: [300, 50, 100, 80],
                    backgroundColor: [documentStyle.getPropertyValue('--p-primary-300'), documentStyle.getPropertyValue('--p-orange-300'), documentStyle.getPropertyValue('--p-green-300'), documentStyle.getPropertyValue('--p-cyan-300')],
                    borderColor: surfaceBorder
                }
            ]
        };
        this.pieOptions = {
            animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        display: false
                    },
                    position: 'bottom'
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
