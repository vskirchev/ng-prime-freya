import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {StyleClassModule} from 'primeng/styleclass';
import {LayoutService} from '@/core/service/layout.service';
import {InputText} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {FormsModule} from '@angular/forms';
import {AppSidebar} from '../sidebar/app.sidebar';
import { CountStateStore } from '@/features/dashboard/state/count-store';

@Component({
    selector: '[app-topbar]',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, FormsModule, AppSidebar, InputText, ButtonModule, IconField, InputIcon],
    templateUrl: './app.topbar.html',
    host: {
        class: 'layout-topbar'
    }
})
export class AppTopbar {
    layoutService = inject(LayoutService);

    el = inject(ElementRef);

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild(AppSidebar) appSidebar!: AppSidebar;


    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    onConfigButtonClick() {
        this.layoutService.toggleConfigSidebar();
    }

    onRightMenuButtonClick() {
        this.layoutService.showRightMenu();
    }

    onTopbarItemClick() {
        document.body.click();
    }

    readonly store = inject(CountStateStore);
}
