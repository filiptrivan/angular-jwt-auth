import { ErrorHandler, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './layout/components/notfound/notfound.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { CoreModule } from './core/core.module';
import { SoftMessageService } from './core/services/soft-message.service';
import { SoftErrorHandler } from './core/handlers/soft-error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './business/services/api/api.service';
import { BaseService } from './core/services/base-service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppLayoutModule,
    MessagesModule,
    ToastModule,
    NgxSpinnerModule.forRoot({ type: 'ball-clip-rotate-multiple' }),
    CoreModule,
  ],
  providers: [
    SoftMessageService,
    MessageService, 
    {
    provide: ErrorHandler,
    useClass: SoftErrorHandler,
    },
    ApiService,
    BaseService,
    NgxSpinnerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}