import {Component, inject} from '@angular/core';
import {MessageModule} from 'primeng/message';
import {CommonModule} from '@angular/common';
import { LayoutService } from '@/core/service/layout.service';

@Component({
    selector: 'message-widget',
    standalone: true,
    imports: [CommonModule, MessageModule],
    template: `
        <p-message styleClass="!h-18 !rounded-3xl !bg-surface-0 dark:!bg-surface-900 !font-medium !text-surface-500 dark:!text-surface-400 !outline-transparent" [ngClass]="{ 'dark-mode': layoutService.isDarkTheme() }">
            <div class="!p-4">👋 Hello! Welcome to Freya! Before start please complete your profile to know you better.</div>
        </p-message>
    `
})
export class MessageWidget {
    layoutService = inject(LayoutService);
}
