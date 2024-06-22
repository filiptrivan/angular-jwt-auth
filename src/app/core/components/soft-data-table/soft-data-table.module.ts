import { NgModule } from '@angular/core';
import { SoftDataTableComponent } from './soft-data-table.component';
import { PrimengModule } from 'src/app/layout/modules/primeng.module';
import { SoftDeleteConfirmationModule } from '../soft-delete-dialog/soft-delete-confirmation.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SoftDataTableComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    PrimengModule,
    SoftDeleteConfirmationModule
  ],
  exports: [
    SoftDataTableComponent
  ],    
  providers: [],
})
export class SoftDataTableModule {}
