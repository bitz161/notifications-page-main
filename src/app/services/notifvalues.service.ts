import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs';

interface INotification {
  id:string;
  notif_status:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NotifvaluesService {

  public status: INotification[]=[]

  constructor() { }

  register(id:string) {
    this.status.push({id, notif_status:false})
  }

  isTabRead(id:string):boolean {
    return !!this.status.find(element => element.id === id)?.notif_status
  }

  readAction(id:string) {
    const read = this.status.find (element => element.id === id)
    if (read) {
read.notif_status = true
    }
  }

}
