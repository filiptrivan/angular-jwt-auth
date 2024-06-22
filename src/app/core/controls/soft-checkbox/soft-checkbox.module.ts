import { NgModule } from "@angular/core";
import { SoftCheckboxComponent } from "./soft-checkbox.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PrimengModule } from "src/app/layout/modules/primeng.module";

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        PrimengModule,
    ],
    declarations: [
        SoftCheckboxComponent
    ],
    exports: [
        SoftCheckboxComponent
    ],
    providers:[]
})
export class SoftCheckboxModule { }
