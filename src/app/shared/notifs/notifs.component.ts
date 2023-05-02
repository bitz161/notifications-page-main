import { Component, OnInit } from '@angular/core';
import { NotifvaluesService } from 'src/app/services/notifvalues.service';
@Component({
  selector: 'app-notifs',
  templateUrl: './notifs.component.html',
  styleUrls: ['./notifs.component.scss']
})
export class NotifsComponent implements OnInit{

constructor(public status:NotifvaluesService){}


ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
}

typeStatusChanged(id:string) {
  return this.status.typeStatus(id)
}

}
