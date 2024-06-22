import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PrimengModule } from "src/app/layout/modules/primeng.module";
import { SoftReturnButtonComponent } from "./soft-return-button.component";


@NgModule({
  declarations: [
    SoftReturnButtonComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
  ],
  exports: [
    SoftReturnButtonComponent
  ],    
  providers: [],
})
export class SoftReturnButtonModule {}
