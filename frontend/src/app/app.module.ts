import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask'


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { CreateServerComponent } from './create-server/create-server.component';
import { UpdateServerComponent } from './update-server/update-server.component';
import { ProviderService } from './service/provider.service'

import { AlertService } from './service/alert.service';
import { AlertComponent } from './alert/alert.component';
import { DataIdadePipe } from './data-idade.pipe'



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    CreateServerComponent,
    UpdateServerComponent,
    AlertComponent,
    DataIdadePipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "", component: ServerComponent},
      {path: "cadastro", component: CreateServerComponent},
      {path: "update/:id", component: UpdateServerComponent}
    ]),
    NgxMaskModule.forRoot(),
  ],
  providers: [
    ProviderService,
    AlertService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
