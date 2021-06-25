import { Injectable } from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable()
export class NotificationService {

  constructor(private messageService: MessageService) { }
  public showSuccess = (body: string): void => {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: body });
  }
  showError = (body: string): void => {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: body });
  }
}
