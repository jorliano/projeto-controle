import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';


import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { AlertService } from './service/alert.service';
import { PessoaService } from './service/pessoa.service';
import { AlertComponent } from './alert/alert.component';
import { DataIdadePipe } from './data-idade.pipe';
import { FormatFonePipe } from './format-fone.pipe'



@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    CadastroPessoaComponent,
    EditarPessoaComponent,
    AlertComponent,
    DataIdadePipe,
    FormatFonePipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "", component: PessoaComponent},
      {path: "cadastro", component: CadastroPessoaComponent},
      {path: "update/:id", component: EditarPessoaComponent}
    ]),
    NgxMaskModule.forRoot(),
  ],
  providers: [
    AlertService,
    PessoaService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
