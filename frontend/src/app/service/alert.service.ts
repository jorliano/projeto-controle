import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';


export class AlertMessage {
    public type: string;
    public show: boolean;
    public message: string;

}


@Injectable()
export class AlertService {

    private subject = new Subject<AlertMessage>();

    constructor() { }

    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }

    success(message: string, isShow = false) {
        let alertObj: AlertMessage = { type: "sucesso", show: isShow, message: message };
        this.subject.next(alertObj);
    }

    error(message: string, isShow = false) {
      let alertObj: AlertMessage = { type: "danger", show: isShow, message: message };
      this.subject.next(alertObj);
    }

    info(message: string, isShow = false) {
      let alertObj: AlertMessage = { type: "info", show: isShow, message: message };      
      this.subject.next(alertObj);
    }

}
