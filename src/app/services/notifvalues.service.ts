import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs';

interface INotification {
  id:string;
  notif_status:boolean;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotifvaluesService {

  public status: INotification[]=[]

  constructor() { }

  register(id:string, type:string) {
    this.status.push({id, notif_status:false, type})
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

  typeAction(id:string) {
    const type = this.status.find(element => element.id === id)?.type

    if (type === 'message') {
       return true
    }
    return false
  }

  typeStatus(id: string) {
    const typenotif = this.typeAction(id);
    const readStatus = this.isTabRead(id);
    
    if (readStatus === true && typenotif === true) {
      return true;
    }
    return false;
  }
  

}
