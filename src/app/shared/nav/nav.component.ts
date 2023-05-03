import { Component, OnInit } from '@angular/core';
import { NotifvaluesService } from 'src/app/services/notifvalues.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public status:NotifvaluesService){}
ngOnInit(): void {}

countNotification() {
  return this.status.status.filter(element => element.notif_status === false).length
}

}
