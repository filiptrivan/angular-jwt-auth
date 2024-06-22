import { Injectable, NgZone } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class SoftMessageService { // TODO FT: nece da prikaze poruku ako je neki angular error koji se dogodi tek nakon api poziva
  constructor(private messageService: MessageService, private zone: NgZone) {}

  successMessage(title: string = 'Successful action', detail: string) {
    this.zone.run(()=>{
      this.messageService.add({
        severity: 'success',
        summary: title,
        detail: detail,
        life: 10000,
      });
    });
  }
  warningMessage(title: string = 'Warning', detail: string) {
    this.zone.run(()=>{
      this.messageService.add({
        severity: 'warn',
        summary: title,
        detail: detail,
        life: 10000,
      });
    });
  }
  errorMessage(title: string = 'Error', detail: string) {
    this.zone.run(()=>{
      this.messageService.add({
        severity: 'error',
        summary: title,
        detail: detail,
        life: 10000,
      });
    });
  }
}
