import { NgModule } from '@angular/core';
import { SoftTextboxModule } from './soft-textbox/soft-textbox.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SoftCheckboxModule } from './soft-checkbox/soft-checkbox.module';
import { SoftCalendarModule } from './soft-calendar/soft-calendar.module';
import { SoftReturnButtonModule } from '../components/soft-buttons/soft-return-button.module';
import { SoftPanelsModule } from '../components/soft-panels/soft-panels.module';
import { SoftPasswordModule } from './soft-password/soft-password.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SoftTextboxModule,
    SoftCheckboxModule,
    SoftCalendarModule,
    SoftReturnButtonModule,
    SoftPanelsModule,
    SoftPasswordModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SoftTextboxModule,
    SoftCheckboxModule,
    SoftCalendarModule,
    SoftReturnButtonModule,
    SoftPanelsModule,
    SoftPasswordModule
  ],
  declarations: [
  ],
  providers: [
  ]
})
export class SoftControlsModule {}