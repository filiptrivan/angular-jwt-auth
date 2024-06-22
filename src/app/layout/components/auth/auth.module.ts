import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SoftControlsModule } from 'src/app/core/controls/soft-controls.module';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
    ]
})
export class AuthModule { }
