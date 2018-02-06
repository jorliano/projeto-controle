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
    //private keepAfterRouteChange = false;

    constructor() { }

   /*enviaMensagem(isShow: boolean, message: string) {
        //this.subject.next(texto);
        //console.log("Requeste recebida "+isShow+" "+msg);
        let alertObj: AlertMessage = { type: "" show: isShow, message: msg };

        this.subject("sucesso", isShow, message);
        this.subject.next(alertObj);
    }

  /*  recebeMensagem(): Observable<any> {
        console.log("Requeste enviada");
        return this.subject.asObservable();
    }*/

    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }

    success(message: string, isShow = false) {
        let alertObj: AlertMessage = { type: "sucesso", show: isShow, message: message };
        //this.subject("sucesso", isShow, message);
        this.subject.next(alertObj);
    }

    error(message: string, isShow = false) {
      let alertObj: AlertMessage = { type: "danger", show: isShow, message: message };
      //this.subject("sucesso", isShow, message);
      this.subject.next(alertObj);
    }

    info(message: string, isShow = false) {
      let alertObj: AlertMessage = { type: "info", show: isShow, message: message };
      //this.subject("sucesso", isShow, message);
      this.subject.next(alertObj);
    }

}
