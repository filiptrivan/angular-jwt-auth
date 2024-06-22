import { NgModule } from "@angular/core";
import { SoftPasswordComponent } from "./soft-password.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PrimengModule } from "src/app/layout/modules/primeng.module";

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        PrimengModule,
    ],
    declarations: [
        SoftPasswordComponent
    ],
    exports: [
        SoftPasswordComponent
    ],
    providers:[]
})
export class SoftPasswordModule { }
