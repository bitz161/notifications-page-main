import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NotifsComponent } from './notifs/notifs.component';
import { NotificationTabsComponent } from './notification-tabs/notification-tabs.component';



@NgModule({
  declarations: [
    NavComponent,
    NotifsComponent,
    NotificationTabsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NotifsComponent,NavComponent]
})
export class SharedModule { }
