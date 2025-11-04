import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'stats-ecommerce-widget',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
        <div class="flex-1 min-w-[20rem]">
            <div class="card text-surface-0 dark:text-surface-900 flex justify-between pt-6 h-full" [ngStyle]="{ 'background-color': 'var(--p-primary-color)' }">
                <div class="overview-info">
                    <div class="m-0 mb-1 text-surface-0 dark:text-surface-900 text-lg font-semibold">Revenue</div>
                    <div class="m-0 text-surface-0 dark:text-surface-900 text-4xl font-semibold">$1548.26</div>
                </div>
                <i class="pi pi-dollar !text-3xl"></i>
            </div>
        </div>

        <div class="flex-1 min-w-[20rem]">
            <div class="card !bg-gray-400 text-white flex justify-between pt-6 h-full">
                <div class="overview-info">
                    <div class="m-0 mb-1 text-white text-lg font-semibold">Buyer Messages</div>
                    <div class="m-0 text-white text-4xl font-semibold">2</div>
                </div>
                <i class="pi pi-envelope !text-3xl"></i>
            </div>
        </div>

        <div class="flex-1 min-w-[20rem]">
            <div class="card !bg-gray-600 text-white flex justify-between pt-6 h-full">
                <div class="overview-info">
                    <div class="m-0 mb-1 text-white text-lg font-semibold">CTR</div>
                    <div class="m-0 text-white text-4xl font-semibold">12%</div>
                </div>
                <i class="pi pi-chart-bar !text-3xl"></i>
            </div>
        </div>

        <div class="flex-1 min-w-[20rem]">
            <div class="card text-white flex justify-between pt-6 h-full" style="background: linear-gradient(90deg, #ffb340 0%, #ffa740 100%)">
                <div class="overview-info">
                    <div class="m-0 mb-1 text-white text-lg font-semibold">Out of Stock Products</div>
                    <div class="m-0 text-white text-4xl font-semibold">4</div>
                </div>
                <i class="pi pi-box !text-3xl"></i>
            </div>
        </div>
    `,
    host: {
        class: 'flex flex-wrap gap-8'
    }
})
export class StatsEcommerceWidget {}
