import { Component, OnInit, Output } from '@angular/core';
import { NotifvaluesService } from 'src/app/services/notifvalues.service';
@Component({
  selector: 'app-notification-tabs',
  templateUrl: './notification-tabs.component.html',
  styleUrls: ['./notification-tabs.component.scss']
})
export class NotificationTabsComponent implements OnInit {
  @Output() statusID = ''
  constructor(public status:NotifvaluesService) {}
ngOnInit(): void {}

notificationread(){
  this.status.readAction(this.statusID)
}

statusChange(){
  this.status.isTabRead(this.statusID)
}

}
