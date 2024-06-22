import { ApiService } from 'src/app/business/services/api/api.service';
import { Component } from "@angular/core";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: 'soft-delete-confirmation',
  templateUrl: './soft-delete-confirmation.component.html',
  styles: [],
})
export class SoftDeleteConfirmationComponent {

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private apiService: ApiService) {}

  accept(){
    this.apiService.deleteItemFromGrid(this.config.data.controllerName, this.config.data.methodPartName, this.config.data.id).subscribe({
      next: () => {
        this.ref.close(true) // deleted succesfully
      },
      error: () => {
        this.ref.close(false) // not deleted succesfully
      },
    });
  }

  reject(){
    this.ref.close()
  }
}