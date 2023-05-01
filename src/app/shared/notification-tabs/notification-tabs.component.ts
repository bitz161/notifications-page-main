import { Component, Input, OnInit } from '@angular/core';
import { NotifvaluesService } from 'src/app/services/notifvalues.service';
@Component({
  selector: 'app-notification-tabs',
  templateUrl: './notification-tabs.component.html',
  styleUrls: ['./notification-tabs.component.scss']
})
export class NotificationTabsComponent implements OnInit {
  @Input() statusID = ''
  constructor(public status:NotifvaluesService) {}
ngOnInit(): void {}

notificationread(){
  this.status.isTabRead(this.statusID)
}

statusChange(){
  this.status.readAction(this.statusID)
}

}
