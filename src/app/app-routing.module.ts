import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DialogContentExample } from './dialog-test/dialog-test.component';

const routes: Routes = [
  { path: '', redirectTo: '/dialog-test', pathMatch: 'full' },
  { path: 'dialog-test', component: DialogContentExample }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
