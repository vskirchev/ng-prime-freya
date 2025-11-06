import {Component, computed, inject} from '@angular/core';
import {DrawerModule} from 'primeng/drawer';
import {ButtonModule} from 'primeng/button';
import {CommonModule} from '@angular/common';
import {LayoutService} from "@/core/layout/service/layout.service";

@Component({
    selector: '[app-right-menu]',
    standalone: true,
    imports: [CommonModule, DrawerModule, ButtonModule],
    templateUrl: './app.rightmenu.html'
})
export class AppRightMenu {
    layoutService = inject(LayoutService);

    menuActive = computed(() => this.layoutService.layoutState().rightMenuActive);

    hideMenu() {
        this.layoutService.hideRightMenu();
    }
}
