import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list.component';
import { PrimengModule } from 'src/app/layout/modules/primeng.module';
import { SoftDataTableModule } from 'src/app/core/components/soft-data-table/soft-data-table.module';
import { UserDetailsComponent } from './pages/user-details.component';
import { SoftControlsModule } from 'src/app/core/controls/soft-controls.module';

const routes: Routes = [
    {
        path: 'users',
        component: UserListComponent,
    },
    {
        path: 'users/:id',
        component: UserDetailsComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        PrimengModule,
        SoftDataTableModule,
        SoftControlsModule
    ],
    declarations: [
        UserListComponent,
        UserDetailsComponent
    ],
    providers:[]
})
export class AdministrationModule { }
