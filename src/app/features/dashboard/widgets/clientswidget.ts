import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartModule} from 'primeng/chart';
import {ButtonModule} from 'primeng/button';
import {debounceTime, Subscription} from 'rxjs';
import { LayoutService } from '@/core/service/layout.service';

@Component({
    selector: 'clients-widget',
    standalone: true,
    imports: [CommonModule, ChartModule, ButtonModule],
    template: ` <div class="card overflow-auto">
        <div class="card-header gap-4">
            <div class="card-title">
                <div class="font-semibold mb-2">Clients</div>
                <p class="subtitle">Your Clients Data</p>
            </div>
            <p class="subtitle">8 May</p>
        </div>
        <p-chart type="line" [data]="chart1" [options]="chartOptions1" [responsive]="true" style="max-height: 160px"></p-chart>
        <div class="p-4 rounded-xl my-4 mx-0 bg-primary-100/20 dark:bg-primary-800">
            <div class="flex items-center b-2">
                <img src="/demo/images/dashboard/subtract.svg" alt="freya-layout" />
                <span class="my-0 mx-2">Insights</span>
            </div>
            <ul class="list-none p-0 m-0">
                <li class="flex items-center justify-between my-2 mx-0">
                    <span class="font-semibold"><span class="font-normal text-sm">1</span> Client from Mail CTA</span>
                    <span class="p-tag p-tag-warn">12%</span>
                </li>
                <li class="flex items-center justify-between my-2 mx-0">
                    <span class="font-semibold"><span class="font-normal text-sm">2</span> Clients from FB Ads</span>
                    <span class="p-tag p-tag-success">UP!</span>
                </li>
                <a href="#">See all(4)</a>
            </ul>
        </div>
        <p-button type="button" label="Go to Clients Reports" styleClass="w-full" outlined></p-button>
    </div>`
})
export class ClientsWidget implements OnInit {
    layoutService = inject(LayoutService);

    chart1: any;

    chartOptions1: any;

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
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.chart1 = {
            labels: ['8Sun', '9Mon', '10Thu', '11Wed', '12Fri', '13Sat', '14Sun'],
            datasets: [
                {
                    label: 'New Clients',
                    data: [12, 19, 15, 28, 32, 22, 39],
                    borderColor: documentStyle.getPropertyValue('--p-primary-200'),
                    borderWidth: 4,
                    fill: true,
                    backgroundColor: documentStyle.getPropertyValue('--p-primary-100'),
                    tension: 0.4
                }
            ]
        };
        this.chartOptions1 = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                        usePointStyle: true,
                        boxHeight: 15,
                        pointStyleWidth: 17,
                        padding: 14
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            },

            maintainAspectRatio: false,
            hover: {
                mode: 'index'
            },
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            }
        };
    }
}
