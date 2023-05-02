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
    this.status.register('mark','react')
    this.status.register('angela','follow')
    this.status.register('jacob','group')
    this.status.register('rizky','message')
    this.status.register('kimberly','comment')
    this.status.register('nathan','react')
    this.status.register('anna','group')

    console.log(this.status)
}



}
