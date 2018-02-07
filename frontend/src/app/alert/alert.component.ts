import { Component, OnInit } from '@angular/core';
import { AlertService, AlertMessage } from '../service/alert.service'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  objAlert = {type: "" , show: false, message: ""};
  constructor( private alertService: AlertService) { }

  ngOnInit() {
    console.log(this.objAlert);
    this.alertService.getAlert().subscribe(
      (res: AlertMessage) => {
        //console.log("Recebendo requisicao "+res.show+"  "+ res.message);
        this.objAlert = res;
        this.objAlert.type = this.definindoAlert(this.objAlert);
        setTimeout(() => {
          this.objAlert.show = false;
        },5000);
     }, (error) => {
         console.log(error);
     })
  }

  definindoAlert(alert){
        if(alert.type == "sucesso"){
          return 'alert alert-success';
        }
        if(alert.type == "info"){
          return 'alert alert-info';
        }else{
          return 'alert alert-danger';
        }
  }
}
