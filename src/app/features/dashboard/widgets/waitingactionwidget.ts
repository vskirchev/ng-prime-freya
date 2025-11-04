import {Component} from '@angular/core';
import {TabsModule} from 'primeng/tabs';
import {ButtonModule} from 'primeng/button';
import {TagModule} from 'primeng/tag';
import {OverlayBadgeModule} from 'primeng/overlaybadge';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'waiting-action-widget',
    standalone: true,
    imports: [CommonModule, TabsModule, ButtonModule, TagModule, OverlayBadgeModule, MenuModule],
    template: `
        <div class="card w-full">
            <div class="card-header gap-4 pb-2">
                <div class="card-title">
                    <div class="font-semibold mb-2">Waiting Actions</div>
                    <p class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <p-tabs value="0">
                <p-tablist>
                    <p-tab value="0">
                        <p-overlay-badge severity="info" value="6">
                            <span class="m-0 mr-4">Orders</span>
                        </p-overlay-badge>
                    </p-tab>
                    <p-tab value="1">
                        <p-overlay-badge value="3" severity="warn">
                            <span class="m-0 mr-4">Messages</span>
                        </p-overlay-badge>
                    </p-tab>
                </p-tablist>
                <p-tabpanels>
                    <p-tabpanel value="0">
                        <ul class="list-none p-0 overflow-auto" style="max-height: 17.745rem">
                            <li class="rounded-lg pt-2 px-4 pb-2 mb-4 bg-primary-50/50 dark:bg-primary-950">
                                <div class="flex justify-between items-center mb-1">
                                    <div class="flex items-center gap-1">
                                        <span class="leading-normal m-0 font-medium">Order</span>
                                        <p-tag class="m-0 mr-2 px-2 text-xs bg-blue-300" [style]="{ display: 'inline-block' }" value="#05895"></p-tag>
                                    </div>

                                    <span class="text-gray-300 font-semibold text-sm leading-none">4h ago</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="mt-1 text-surface-400 dark:text-surface-400 block text-sm leading-none"> <b>1</b> Bamboo Watch, <b>3</b> Blue Band, </span>
                                    <p-button icon="pi pi-ellipsis-v" size="small" styleClass="flex-shrink-0" rounded text (onClick)="menu.toggle($event)"></p-button>
                                </div>
                            </li>
                            <li class="rounded-lg pt-2 px-4 pb-2 mb-4 bg-primary-50/50 dark:bg-primary-950">
                                <div class="flex justify-between items-center mb-1">
                                    <div class="flex items-center gap-1">
                                        <span class="leading-normal m-0 font-medium">Order</span>
                                        <p-tag class="m-0 mr-2 px-2 text-xs bg-blue-300" [style]="{ display: 'inline-block' }" value="#05852"></p-tag>
                                    </div>

                                    <span class="text-gray-300 font-semibold text-sm leading-none">6h ago</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="mt-1 text-surface-400 dark:text-surface-400 block text-sm leading-none"> <b>1</b> Bamboo Watch, <b>3</b> Blue Band, </span>
                                    <p-button icon="pi pi-ellipsis-v" size="small" styleClass="flex-shrink-0" rounded text (onClick)="menu.toggle($event)"></p-button>
                                </div>
                            </li>
                            <li class="rounded-lg pt-2 px-4 pb-2 mb-4 bg-primary-50/50 dark:bg-primary-950">
                                <div class="flex justify-between items-center mb-1">
                                    <div class="flex items-center gap-1">
                                        <span class="leading-normal m-0 font-medium">Order</span>
                                        <p-tag class="m-0 mr-2 px-2 text-xs bg-blue-300" [style]="{ display: 'inline-block' }" value="#05605"></p-tag>
                                    </div>

                                    <span class="text-gray-300 font-semibold text-sm leading-none">1d ago</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="mt-1 text-surface-400 dark:text-surface-400 block text-sm leading-none"> <b>1</b> Bamboo Watch, <b>3</b> Blue Band, </span>
                                    <p-button icon="pi pi-ellipsis-v" size="small" styleClass="flex-shrink-0" rounded text (onClick)="menu.toggle($event)"></p-button>
                                </div>
                            </li>
                            <li class="rounded-lg pt-2 px-4 pb-2 mb-4 bg-primary-50/50 dark:bg-primary-950">
                                <div class="flex justify-between items-center mb-1">
                                    <div class="flex items-center gap-1">
                                        <span class="leading-normal m-0 font-medium">Order</span>
                                        <p-tag class="m-0 mr-2 px-2 text-xs bg-blue-300" [style]="{ display: 'inline-block' }" value="#05462"></p-tag>
                                    </div>

                                    <span class="text-gray-300 font-semibold text-sm leading-none">1d ago</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="mt-1 text-surface-400 dark:text-surface-400 block text-sm leading-none"> <b>1</b> Bamboo Watch, <b>3</b> Blue Band, </span>
                                    <p-button icon="pi pi-ellipsis-v" size="small" styleClass="flex-shrink-0" rounded text (onClick)="menu.toggle($event)"></p-button>
                                </div>
                            </li>
                            <li class="rounded-lg pt-2 px-4 pb-2 mb-4 bg-primary-50/50 dark:bg-primary-950">
                                <div class="flex justify-between items-center mb-1">
                                    <div class="flex items-center gap-1">
                                        <span class="leading-normal m-0 font-medium">Order</span>
                                        <p-tag class="m-0 mr-2 px-2 text-xs bg-blue-300" [style]="{ display: 'inline-block' }" value="#05241"></p-tag>
                                    </div>

                                    <span class="text-gray-300 font-semibold text-sm leading-none">1w 2d ago</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="mt-1 text-surface-400 dark:text-surface-400 block text-sm leading-none"> <b>1</b> Bamboo Watch, <b>3</b> Blue Band, </span>
                                    <p-button icon="pi pi-ellipsis-v" size="small" styleClass="flex-shrink-0" rounded text (onClick)="menu.toggle($event)"></p-button>
                                </div>
                            </li>
                            <li class="rounded-lg pt-2 px-4 pb-2 mb-4 bg-primary-50/50 dark:bg-primary-950">
                                <div class="flex justify-between items-center mb-1">
                                    <div class="flex items-center gap-1">
                                        <span class="leading-normal m-0 font-medium">Order</span>
                                        <p-tag class="m-0 mr-2 px-2 text-xs bg-blue-300" [style]="{ display: 'inline-block' }" value="#05241"></p-tag>
                                    </div>

                                    <span class="text-gray-300 font-semibold text-sm leading-none">1w 2d ago</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="mt-1 text-surface-400 dark:text-surface-400 block text-sm leading-none"> <b>1</b> Bamboo Watch, <b>3</b> Blue Band, </span>
                                    <p-button icon="pi pi-ellipsis-v" size="small" styleClass="flex-shrink-0" rounded text (onClick)="menu.toggle($event)"></p-button>
                                </div>
                            </li>
                        </ul>
                        <p-menu #menu [popup]="true" [model]="items"></p-menu>
                    </p-tabpanel>
                    <p-tabpanel value="1">
                        <ul class="list-none p-0 overflow-auto m-0" [style]="{ 'max-height': '17.745rem' }">
                            <li class="rounded-lg pt-2 px-4 pb-2 mb-4">
                                <div class="flex justify-between items-center mb-1">
                                    <div class="flex items-center gap-1">
                                        <span class="leading-normal m-0 font-medium">Message from <b>Anna K.</b></span>
                                        <p-tag class="m-0 mr-2 px-2 text-xs bg-orange-300" [style]="{ display: 'inline-block' }" value="#05895"></p-tag>
                                    </div>

                                    <span class="text-gray-300 font-semibold text-sm leading-none">4h ago</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="mt-1 text-surface-400 dark:text-surface-400 block text-sm leading-none whitespace-nowrap overflow-hidden text-ellipsis">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ad itaque voluptatum deleniti impedit! Inventore eius soluta maxime a quisquam alias, at minima ullam reiciendis blanditiis voluptate.
                                        Dolore, nisi vel.
                                    </span>
                                    <p-button icon="pi pi-ellipsis-v" size="small" styleClass="flex-shrink-0" rounded text (onClick)="menu2.toggle($event)"></p-button>
                                </div>
                            </li>
                            <li class="rounded-lg pt-2 px-4 pb-2 mb-4">
                                <div class="flex justify-between items-center mb-1">
                                    <div class="flex items-center gap-1">
                                        <span class="leading-normal m-0 font-medium">Message from <b>Daniel F.</b></span>
                                        <p-tag class="m-0 mr-2 px-2 text-xs bg-orange-300" [style]="{ display: 'inline-block' }" value="#05895"></p-tag>
                                    </div>

                                    <span class="text-gray-300 font-semibold text-sm leading-none">6h ago</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="mt-1 text-surface-400 dark:text-surface-400 block text-sm leading-none whitespace-nowrap overflow-hidden text-ellipsis">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ad itaque voluptatum deleniti impedit! Inventore eius soluta maxime a quisquam alias, at minima ullam reiciendis blanditiis voluptate.
                                        Dolore, nisi vel.
                                    </span>
                                    <p-button icon="pi pi-ellipsis-v" size="small" styleClass="flex-shrink-0" rounded text (onClick)="menu2.toggle($event)"></p-button>
                                </div>
                            </li>
                            <li class="rounded-lg pt-2 px-4 pb-2 mb-4 bg-primary-50/50 dark:bg-primary-800">
                                <div class="flex justify-between items-center mb-1">
                                    <div class="flex items-center gap-1">
                                        <span class="leading-normal m-0 font-medium">Message from <b>Judy F.</b></span>
                                        <p-tag class="m-0 mr-2 px-2 text-xs bg-orange-300" [style]="{ display: 'inline-block' }" value="#05895"></p-tag>
                                    </div>

                                    <span class="text-gray-300 font-semibold text-sm leading-none">1d ago</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="mt-1 text-surface-400 dark:text-surface-400 block text-sm leading-none whitespace-nowrap overflow-hidden text-ellipsis">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ad itaque voluptatum deleniti impedit! Inventore eius soluta maxime a quisquam alias, at minima ullam reiciendis blanditiis voluptate.
                                        Dolore, nisi vel.
                                    </span>
                                    <p-button icon="pi pi-ellipsis-v" size="small" styleClass="flex-shrink-0" rounded text (onClick)="menu2.toggle($event)"></p-button>
                                </div>
                            </li>
                        </ul>
                        <p-menu #menu2 [popup]="true" [model]="items"></p-menu>
                    </p-tabpanel>
                </p-tabpanels>
            </p-tabs>
        </div>
    `,
    host:{
        class:'flex col-span-12 md:col-span-6 xl:col-span-12'
    }
})
export class WaitingActionWidget {
    items: MenuItem[] = [
        {
            icon: 'pi pi-check',
            label: 'Complete'
        },

        {
            icon: 'pi pi-times',
            label: 'Cancel'
        },
        {
            icon: 'pi pi-external-link',
            label: 'Details'
        }
    ];
}
