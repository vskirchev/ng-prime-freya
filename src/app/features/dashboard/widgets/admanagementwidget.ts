import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {InputIconModule} from 'primeng/inputicon';
import {InputTextModule} from 'primeng/inputtext';
import {Table, TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {IconFieldModule} from 'primeng/iconfield';

@Component({
    selector: 'ad-management-widget',
    standalone: true,
    imports: [CommonModule, FormsModule, InputTextModule, TableModule, ButtonModule, IconFieldModule, InputIconModule],
    template: `
        <div class="card h-full">
            <div class="card-header gap-4">
                <div class="card-title">
                    <div class="font-semibold mb-2">Ad Management</div>
                    <p class="subtitle">Your <b>Active</b> Ad's ROI's</p>
                </div>
                <div class="inline-flex items-center">
                    <p-iconfield class="flex-auto">
                        <p-inputicon class="pi pi-search" />
                        <input pInputText type="text" (input)="onGlobalFilter(dt, $event)" placeholder="Search" class="w-full" style="border-radius: 2rem" />
                    </p-iconfield>
                    <p-button icon="pi pi-upload" styleClass="mx-4" rounded (onClick)="dt.exportCSV()"></p-button>
                </div>
            </div>
            <p-table #dt [value]="activeAds" dataKey="name" [rows]="3" [paginator]="true" [tableStyle]="{ 'min-width': '60rem' }">
                <ng-template #header>
                    <tr class="border-">
                        <th class="px-1" style="width: 5rem"></th>
                        <th class="px-1" pSortableColumn="name">Name <p-sortIcon field="name"></p-sortIcon></th>
                        <th class="px-1"></th>
                        <th class="text-right px-1" pSortableColumn="adROI" style="width: 10rem;">Ad ROI <p-sortIcon field="adROI"></p-sortIcon></th>
                        <th class="text-right px-1" pSortableColumn="adCTR" style="width: 12rem;">Ad CTR<p-sortIcon field="adCTR"></p-sortIcon></th>
                    </tr>
                </ng-template>
                <ng-template #body let-ad let-expanded="expanded">
                    <tr>
                        <td class="px-1 py-2">
                            <p-button text rounded [pRowToggler]="ad" [icon]="expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'"></p-button>
                        </td>
                        <td class="px-1 py-2">{{ ad.name }}</td>
                        <td class="px-1 py-2"><img [src]="ad.image" [alt]="ad.name" class="rounded h-[60px]" /></td>
                        <td class="px-1 py-2 text-right">{{ ad.adROI }}</td>
                        <td class="px-1 py-2 text-right">{{ ad.adCTR }}</td>
                    </tr>
                </ng-template>
                <ng-template #expandedrow let-ad>
                    <tr>
                        <td colspan="5">
                            <div class="flex">
                                <img [src]="ad.image" [alt]="ad.name" class="h-[160px] border-round" />
                                <div class="ml-4 w-8/12">
                                    <div class="p-4">
                                        <h4 class="font-medium m-0 mb-2">{{ ad.name }}</h4>
                                        <p class="p-0 m-0">{{ ad.adDesc }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-6 mb-4">
                                <p-table [value]="ad.detailedData" styleClass="" responsiveLayout="scroll" [globalFilterFields]="['name', 'category', 'inventoryStatus']">
                                    <ng-template #header>
                                        <tr>
                                            <th style="min-width: 12rem" class="white-space-nowrap">Name</th>
                                            <th class="white-space-nowrap text-right">ROI</th>
                                            <th class="white-space-nowrap text-right">CTR</th>
                                            <th class="white-space-nowrap text-right">CR</th>
                                            <th class="white-space-nowrap text-right">CPA</th>
                                            <th class="white-space-nowrap text-right">CPC</th>
                                            <th class="white-space-nowrap text-right">Imp.</th>
                                            <th class="white-space-nowrap text-right">Clicks</th>
                                        </tr>
                                    </ng-template>
                                    <ng-template #body let-details>
                                        <tr>
                                            <td>{{ details.name }}</td>
                                            <td class="text-right">{{ details.adROI }}</td>
                                            <td class="text-right">{{ details.adCTR }}</td>
                                            <td class="text-right">{{ details.adCR }}</td>
                                            <td class="text-right">{{ details.adCPA }}</td>
                                            <td class="text-right">{{ details.adCPC }}</td>
                                            <td class="text-right">{{ details.impressions }}</td>
                                            <td class="text-right">{{ details.clicks }}</td>
                                        </tr>
                                    </ng-template>
                                </p-table>
                            </div>
                        </td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
    `
})
export class AdManagementWidget {
    activeAds: any[] = [
        {
            image: 'https://primefaces.org/cdn/primeng/images/demo/product/black-watch.jpg',
            name: 'Experience Timeless Elegance with the Black-Watch',
            adDesc: `Upgrade your style with the Black-Watch. Its sleek and sophisticated design will elevate your wardrobe to new heights. With its precise timekeeping, you'll never miss an important appointment again. Invest in a piece that will last a lifetime. Get your Black-Watch today.`,
            adCTR: '6%',
            adROI: '10%',
            detailedData: [
                {
                    name: 'Mail',
                    adROI: '10%',
                    adCTR: '3%',
                    adCR: '2%',
                    impressions: 5000,
                    clicks: 100,
                    adCPA: '$50.00',
                    adCPC: '$2.00'
                },
                {
                    name: 'Google Ads',
                    adROI: '15%',
                    adCTR: '6%',
                    adCR: '4%',
                    impressions: 10000,
                    clicks: 400,
                    adCPA: '$37.50',
                    adCPC: '$1.50'
                },
                {
                    name: 'FB Ads',
                    adROI: '20%',
                    adCTR: '7%',
                    adCR: '5%',
                    impressions: 15000,
                    clicks: 750,
                    adCPA: '$31.25',
                    adCPC: '$1.25'
                }
            ]
        },
        {
            image: 'https://primefaces.org/cdn/primeng/images/demo/product/green-earbuds.jpg',
            name: 'Eco-Friendly Sound with Green-Earbuds',
            adDesc: `Listen to your music while helping the environment with Green-Earbuds. Made with sustainable materials, these earbuds offer high-quality sound while reducing your carbon footprint. With a comfortable fit and long battery life, you can enjoy your music all day. Join the eco-movement and get your Green-Earbuds today.`,
            adCTR: '6%',
            adROI: '15%',
            detailedData: [
                {
                    name: 'Mail',
                    adROI: '10%',
                    adCTR: '3%',
                    adCR: '2%',
                    impressions: 5000,
                    clicks: 100,
                    adCPA: '$50.00',
                    adCPC: '$2.00'
                },
                {
                    name: 'Google Ads',
                    adROI: '15%',
                    adCTR: '6%',
                    adCR: '4%',
                    impressions: 10000,
                    clicks: 400,
                    adCPA: '$37.50',
                    adCPC: '$1.50'
                },
                {
                    name: 'FB Ads',
                    adROI: '20%',
                    adCTR: '7%',
                    adCR: '5%',
                    impressions: 15000,
                    clicks: 750,
                    adCPA: '$31.25',
                    adCPC: '$1.25'
                }
            ]
        },
        {
            image: 'https://primefaces.org/cdn/primeng/images/demo/product/yoga-set.jpg',
            name: 'Find Your Zen with the Yoga-Set',
            adDesc: `Take your yoga practice to the next level with the Yoga-Set. This comprehensive kit includes everything you need to enhance your stretch and strength. Whether you're a beginner or an experienced practitioner, the non-slip mat, blocks, and strap will support you in your journey. Embrace a healthier, happier lifestyle with the Yoga-Set. Order now.`,
            adCTR: '6%',
            adROI: '10%',
            detailedData: [
                {
                    name: 'Mail',
                    adROI: '10%',
                    adCTR: '3%',
                    adCR: '2%',
                    impressions: 5000,
                    clicks: 100,
                    adCPA: '$50.00',
                    adCPC: '$2.00'
                },
                {
                    name: 'Google Ads',
                    adROI: '15%',
                    adCTR: '6%',
                    adCR: '4%',
                    impressions: 10000,
                    clicks: 400,
                    adCPA: '$37.50',
                    adCPC: '$1.50'
                },
                {
                    name: 'FB Ads',
                    adROI: '20%',
                    adCTR: '7%',
                    adCR: '5%',
                    impressions: 15000,
                    clicks: 750,
                    adCPA: '$31.25',
                    adCPC: '$1.25'
                }
            ]
        },
        {
            image: 'https://primefaces.org/cdn/primeng/images/demo/product/gold-phone-case.jpg',
            name: 'Add a Touch of Luxury to Your Phone with the Gold Case',
            adDesc: `Make a statement with the Gold Phone Case. Its sleek and stylish design will turn heads and keep your phone protected. Crafted with premium materials, this case will not only protect your phone but also elevate your style. Don't settle for a boring case. Get the Gold Phone Case today.`,
            adCTR: '6%',
            adROI: '13%',
            detailedData: [
                {
                    name: 'Mail',
                    adROI: '10%',
                    adCTR: '3%',
                    adCR: '2%',
                    impressions: 5000,
                    clicks: 100,
                    adCPA: '$50.00',
                    adCPC: '$2.00'
                },
                {
                    name: 'Google Ads',
                    adROI: '15%',
                    adCTR: '6%',
                    adCR: '4%',
                    impressions: 10000,
                    clicks: 400,
                    adCPA: '$37.50',
                    adCPC: '$1.50'
                },
                {
                    name: 'FB Ads',
                    adROI: '20%',
                    adCTR: '7%',
                    adCR: '5%',
                    impressions: 15000,
                    clicks: 750,
                    adCPA: '$31.25',
                    adCPC: '$1.25'
                }
            ]
        },
        {
            image: 'https://primefaces.org/cdn/primeng/images/demo/product/bamboo-watch.jpg',
            name: 'Eco-Friendly Timepiece: Experience Style with our Bamboo Watch',
            adDesc: `Stay on time and on trend with the Bamboo-Watch. Made with sustainable bamboo materials, this watch not only looks great but also helps protect the environment. With its precise timekeeping and versatile design, the Bamboo-Watch is perfect for any occasion. Get yours today and join the eco-movement in style.`,
            adCTR: '6%',
            adROI: '22%',
            detailedData: [
                {
                    name: 'Mail',
                    adROI: '10%',
                    adCTR: '3%',
                    adCR: '2%',
                    impressions: 5000,
                    clicks: 100,
                    adCPA: '$50.00',
                    adCPC: '$2.00'
                },
                {
                    name: 'Google Ads',
                    adROI: '15%',
                    adCTR: '6%',
                    adCR: '4%',
                    impressions: 10000,
                    clicks: 400,
                    adCPA: '$37.50',
                    adCPC: '$1.50'
                },
                {
                    name: 'FB Ads',
                    adROI: '20%',
                    adCTR: '7%',
                    adCR: '5%',
                    impressions: 15000,
                    clicks: 750,
                    adCPA: '$31.25',
                    adCPC: '$1.25'
                }
            ]
        }
    ];

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
}
