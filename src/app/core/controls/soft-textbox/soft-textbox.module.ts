import { NgModule } from "@angular/core";
import { SoftTextboxComponent } from "./soft-textbox.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PrimengModule } from "src/app/layout/modules/primeng.module";

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        PrimengModule,
    ],
    declarations: [
        SoftTextboxComponent
    ],
    exports: [
        SoftTextboxComponent
    ],
    providers:[]
})
export class SoftTextboxModule { }
