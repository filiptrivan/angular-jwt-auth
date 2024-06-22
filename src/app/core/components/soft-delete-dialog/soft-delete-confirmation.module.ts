import { NgModule } from '@angular/core';
import { PrimengModule } from 'src/app/layout/modules/primeng.module';
import { SoftDeleteConfirmationComponent } from './soft-delete-confirmation.component';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    SoftDeleteConfirmationComponent
  ],
  imports: [
    PrimengModule
  ],
  exports: [
    SoftDeleteConfirmationComponent
  ],
  providers: [ConfirmationService],
})
export class SoftDeleteConfirmationModule {}
