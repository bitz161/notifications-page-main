import { Component , OnInit} from '@angular/core';
import { NotifvaluesService } from '../services/notifvalues.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(public status:NotifvaluesService) {}

  ngOnInit(): void {
    this.status.register('mark')
    this.status.register('angela')
    this.status.register('jacob')
    this.status.register('rizky')
    this.status.register('kimberly')
    this.status.register('nathan')
    this.status.register('anna')

    console.log(this.status)
}




}
